// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  // パフォーマンス最適化
  experimental: {
    // クリティカルCSSをHTMLにインライン化（レンダリングブロック解消）
    inlineSSRStyles: true,
    // ペイロードの最適化
    payloadExtraction: true,
  },

  modules: [
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@vee-validate/nuxt',
    '@vueuse/nuxt',
    '@nuxt/image',
  ],

  css: ['~/assets/css/main.css'],

  // Viteビルド最適化
  vite: {
    css: {
      devSourcemap: false,
    },
    build: {
      // CSSコード分割を最適化
      cssCodeSplit: true,
      // 圧縮設定
      minify: 'esbuild',
      // チャンクサイズ警告閾値
      chunkSizeWarningLimit: 500,
    },
  },

  i18n: {
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
      { code: 'ja', language: 'ja-JP', name: '日本語', file: 'ja.json' },
      { code: 'de', language: 'de-DE', name: 'Deutsch', file: 'de.json' },
      { code: 'es', language: 'es-ES', name: 'Español', file: 'es.json' },
      { code: 'fr', language: 'fr-FR', name: 'Français', file: 'fr.json' },
      { code: 'id', language: 'id-ID', name: 'Bahasa Indonesia', file: 'id.json' },
      { code: 'it', language: 'it-IT', name: 'Italiano', file: 'it.json' },
      { code: 'nl', language: 'nl-NL', name: 'Nederlands', file: 'nl.json' },
      { code: 'ru', language: 'ru-RU', name: 'Русский', file: 'ru.json' },
      { code: 'pt', language: 'pt-PT', name: 'Português', file: 'pt.json' },
      { code: 'th', language: 'th-TH', name: 'ไทย', file: 'th.json' },
      { code: 'uk', language: 'uk-UA', name: 'Українська', file: 'uk.json' },
      { code: 'tr', language: 'tr-TR', name: 'Türkçe', file: 'tr.json' },
      { code: 'ro', language: 'ro-RO', name: 'Română', file: 'ro.json' },
      { code: 'pl', language: 'pl-PL', name: 'Polski', file: 'pl.json' },
      { code: 'zh-CN', language: 'zh-CN', name: '简体中文', file: 'zh-CN.json' },
      { code: 'zh-TW', language: 'zh-TW', name: '繁體中文', file: 'zh-TW.json' },
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'locales',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },

  app: {
    head: {
      title: 'BitcoinPay - Crypto to Everyday Payments',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Virtual credit card powered by USDC/USDT. Use crypto for everyday payments with Apple Pay and Google Pay.',
        },
        { property: 'og:title', content: 'BitcoinPay - Crypto to Everyday Payments' },
        {
          property: 'og:description',
          content: 'Virtual credit card powered by USDC/USDT. Use crypto for everyday payments.',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/og-image.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        // DNSプリフェッチ（外部リソースへの接続を高速化）
        { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      ],
    },
  },

  // ルートレンダリング最適化
  routeRules: {
    // 静的ページはプリレンダリング
    // 注意: strategy: 'prefix_except_default' では、デフォルトロケール(en)は '/' でアクセス
    // '/en' は存在しないため、プリレンダリング対象から除外
    '/': { prerender: true },
    '/ja': { prerender: true },
  },

  colorMode: {
    preference: 'dark',
    fallback: 'dark',
  },

  runtimeConfig: {
    public: {
      appName: 'BitcoinPay',
    },
  },

  nitro: {
    externals: {
      inline: ['@supabase/supabase-js'],
    },
    // 圧縮を有効化
    compressPublicAssets: true,
    // 静的アセットのキャッシュ設定
    routeRules: {
      '/_nuxt/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
      '/images/**': { headers: { 'cache-control': 'public, max-age=86400' } },
      '/*.svg': { headers: { 'cache-control': 'public, max-age=86400' } },
    },
  },
});
