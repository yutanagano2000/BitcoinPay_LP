# BitcoinPay LP 要件定義書

**Version:** 1.0.0
**Last Updated:** 2024-12-02
**Status:** Phase 1 MVP 完了 / Phase 2 準備中

---

## 1. プロジェクト概要

### 1.1 目的
- App Store / Google Play 審査用のランディングページ
- ウェイトリスト登録によるリード獲得
- ブランド認知とサービス理解促進

### 1.2 基本情報

| 項目 | 内容 |
|------|------|
| プロジェクト名 | BitcoinPay Landing Page |
| フレームワーク | Nuxt 4.2.1 (Vue 3.5) |
| UIライブラリ | Nuxt UI 4 (Tailwind CSS 4) |
| デプロイ先 | Vercel |
| ドメイン | 後日設定（Vercelサブドメイン使用） |

### 1.3 運営会社情報

| 項目 | 内容 |
|------|------|
| 会社名 | BitcoinPay株式会社 |
| 住所 | 〒103-0022 東京都中央区日本橋室町1丁目11番12号 日本橋水野ビル7階 |

---

## 2. 参考サイト分析

### 2.1 Slash Card (https://pre-card.slash.vision/)

| 要素 | 実装内容 |
|------|----------|
| テーマ | ダークモード、グラデーション背景 |
| カードビジュアル | 物理/バーチャルカードの比較表示 |
| CTA | 事前登録フォーム（ヘッダー・フッター） |
| 信頼性 | Discord/Twitter/Medium/Whitepaper |
| 対応チェーン | 7+ネットワーク表示 |
| リワード | 紹介プログラム、会員ティア |

### 2.2 KAST (https://www.kast.xyz/)

| 要素 | 実装内容 |
|------|----------|
| ソーシャルプルーフ | 500,000+ユーザー、8社メディア掲載 |
| カード階層 | Standard/Premium/Limited/Luxe (4階層) |
| アニメーション | WordPlay、Swiper、マーキー |
| 信頼性 | Military-level security、Bank-Grade |
| テスティモニアル | 8件のX(Twitter)投稿引用 |
| Analytics | gtag, Firebase, GTM統合 |

---

## 3. 機能要件

### 3.1 ページ構成

```
/                       # メインLP
/ja/                    # 日本語版
/[locale]/              # 他言語版（17言語）
/contact/personal       # 個人問い合わせ
/contact/business       # 法人問い合わせ
/terms                  # 利用規約
/privacy                # プライバシーポリシー
/waitlist/success       # 登録完了（未実装）
```

### 3.2 LP セクション構成

| # | セクション | 説明 | 状態 |
|---|-----------|------|------|
| 1 | Header | 固定ナビ、言語切替、CTA | ✅ |
| 2 | Hero | キャッチコピー、カードモックアップ | ✅ |
| 3 | About | サービス概要、4つの特徴 | ✅ |
| 4 | Features | 6つの主要機能 | ✅ |
| 5 | Currencies | 対応通貨、Coming Soon | ✅ |
| 6 | How It Works | 5ステップのフロー | ✅ |
| 7 | FAQ | アコーディオン形式 | ✅ |
| 8 | Waitlist | メール登録フォーム | ✅ |
| 9 | Contact | 個人/法人リンク | ✅ |
| 10 | Footer | 会社情報、リンク | ✅ |

### 3.3 多言語対応（i18n）

**対応言語（17言語）:**

| コード | 言語 | 翻訳状態 |
|--------|------|----------|
| en | English | ✅ 完了 |
| ja | 日本語 | ✅ 完了 |
| de | Deutsch | ⏳ 要翻訳 |
| es | Español | ⏳ 要翻訳 |
| fr | Français | ⏳ 要翻訳 |
| id | Bahasa Indonesia | ⏳ 要翻訳 |
| it | Italiano | ⏳ 要翻訳 |
| nl | Nederlands | ⏳ 要翻訳 |
| ru | Русский | ⏳ 要翻訳 |
| pt | Português | ⏳ 要翻訳 |
| th | ไทย | ⏳ 要翻訳 |
| uk | Українська | ⏳ 要翻訳 |
| tr | Türkçe | ⏳ 要翻訳 |
| ro | Română | ⏳ 要翻訳 |
| pl | Polski | ⏳ 要翻訳 |
| zh-CN | 简体中文 | ⏳ 要翻訳 |
| zh-TW | 繁體中文 | ⏳ 要翻訳 |

### 3.4 フォーム仕様

#### ウェイトリストフォーム
| フィールド | 型 | 必須 | バリデーション |
|-----------|-----|------|---------------|
| email | string | ✅ | email形式 |

#### 個人問い合わせフォーム
| フィールド | 型 | 必須 | バリデーション |
|-----------|-----|------|---------------|
| name | string | ✅ | min:2 |
| email | string | ✅ | email形式 |
| subject | select | ✅ | 4選択肢 |
| message | text | ✅ | min:10 |

#### 法人問い合わせフォーム
| フィールド | 型 | 必須 | バリデーション |
|-----------|-----|------|---------------|
| companyName | string | ✅ | min:1 |
| department | string | - | - |
| name | string | ✅ | min:2 |
| email | string | ✅ | email形式 |
| phone | string | - | - |
| inquiryType | select | ✅ | 4選択肢 |
| message | text | ✅ | min:10 |

---

## 4. 非機能要件

### 4.1 パフォーマンス

| 指標 | 目標値 |
|------|--------|
| LCP (Largest Contentful Paint) | < 2.5s |
| FID (First Input Delay) | < 100ms |
| CLS (Cumulative Layout Shift) | < 0.1 |
| Lighthouse Performance | > 90 |

### 4.2 レスポンシブ対応

| ブレークポイント | 幅 | 対応 |
|-----------------|-----|------|
| Mobile | < 640px | ✅ |
| Mobile Landscape | 640px+ | ✅ |
| Tablet | 768px+ | ✅ |
| Desktop Small | 1024px+ | ✅ |
| Desktop | 1280px+ | ✅ |
| Large | 1536px+ | ✅ |

**設計原則:** モバイルファースト（320px〜対応）

### 4.3 SEO

| 項目 | 実装 |
|------|------|
| メタタグ | title, description, og:*, twitter:* |
| OGP画像 | 1200×630px |
| 構造化データ | Organization, WebSite |
| sitemap.xml | 自動生成 |
| robots.txt | 設定済み |
| canonical | 自動設定 |

### 4.4 アクセシビリティ

| 項目 | 対応 |
|------|------|
| WCAG 2.1 Level AA | 目標 |
| キーボードナビ | ✅ |
| スクリーンリーダー | ARIA属性 |
| カラーコントラスト | 4.5:1以上 |
| フォーカスインジケータ | ✅ |

---

## 5. デザイン仕様

### 5.1 カラーパレット

```css
/* Primary Colors */
--color-primary: #F7931A;      /* Bitcoin Orange */
--color-primary-light: #FFAA33;
--color-primary-dark: #CC7A00;

/* Secondary Colors */
--color-secondary: #1E3A5F;    /* Navy */
--color-accent: #00D4AA;       /* Teal (USDC) */
--color-accent-alt: #26A17B;   /* USDT Green */

/* Neutral Colors */
--color-bg-primary: #0A0A0A;   /* Dark Background */
--color-bg-secondary: #1A1A1A; /* Surface */
--color-bg-tertiary: #2A2A2A;  /* Card */

/* Text Colors */
--color-text-primary: #FFFFFF;
--color-text-secondary: #CCCCCC;
--color-text-muted: #888888;

/* Status Colors */
--color-success: #22C55E;
--color-error: #EF4444;
--color-warning: #F59E0B;
--color-info: #3B82F6;
```

### 5.2 タイポグラフィ

| 要素 | サイズ (Mobile) | サイズ (Desktop) | Weight |
|------|----------------|-----------------|--------|
| H1 | 2.5rem (40px) | 4.5rem (72px) | 700 |
| H2 | 1.875rem (30px) | 3rem (48px) | 700 |
| H3 | 1.25rem (20px) | 1.5rem (24px) | 600 |
| Body | 1rem (16px) | 1.125rem (18px) | 400 |
| Small | 0.875rem (14px) | 0.875rem (14px) | 400 |

**フォント:** システムフォント (ui-sans-serif, system-ui)

### 5.3 コンポーネントスタイル

#### ボタン
```css
/* Primary Button */
.btn-primary {
  background: linear-gradient(135deg, #F7931A, #CC7A00);
  border-radius: 12px;
  padding: 12px 24px;
  font-weight: 600;
  transition: transform 0.2s, box-shadow 0.2s;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(247, 147, 26, 0.3);
}
```

#### カード
```css
.card {
  background: rgba(26, 26, 26, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  backdrop-filter: blur(10px);
}
.card:hover {
  border-color: rgba(255, 255, 255, 0.2);
}
```

---

## 6. 必要な素材リスト

### 6.1 画像素材

| # | 素材 | 形式 | サイズ | 状態 | 用途 |
|---|------|------|--------|------|------|
| 1 | ロゴ（標準） | SVG | - | ❌ 未作成 | ヘッダー、フッター |
| 2 | ロゴ（アイコン） | SVG/PNG | 512×512 | ❌ 未作成 | Favicon, App Icon |
| 3 | OGP画像 | PNG | 1200×630 | ❌ 未作成 | SNSシェア |
| 4 | カードモックアップ（正面） | WebP/PNG | 800×500 | ❌ 未作成 | Hero, Features |
| 5 | カードモックアップ（斜め） | WebP/PNG | 800×500 | ❌ 未作成 | Hero |
| 6 | 物理カードイメージ | WebP/PNG | 600×380 | ❌ 未作成 | Features |
| 7 | Apple Pay バッジ | SVG | - | ❌ 未作成 | Hero, Footer |
| 8 | Google Pay バッジ | SVG | - | ❌ 未作成 | Hero, Footer |
| 9 | App Store バッジ | SVG | - | ❌ 未作成 | Footer, Waitlist |
| 10 | Google Play バッジ | SVG | - | ❌ 未作成 | Footer, Waitlist |

### 6.2 アイコン素材

| # | アイコン | 用途 | 状態 |
|---|---------|------|------|
| 1 | USDC アイコン | Currencies | ⚠️ 要確認（ライセンス） |
| 2 | USDT アイコン | Currencies | ⚠️ 要確認（ライセンス） |
| 3 | Bitcoin SV アイコン | Currencies | ⚠️ 要確認（ライセンス） |
| 4 | Ethereum アイコン | Currencies | ⚠️ 要確認（ライセンス） |
| 5 | Solana アイコン | Currencies | ⚠️ 要確認（ライセンス） |
| 6 | Polygon アイコン | Currencies | ⚠️ 要確認（ライセンス） |
| 7 | BNB アイコン | Currencies | ⚠️ 要確認（ライセンス） |

### 6.3 追加コンテンツ素材

| # | 素材 | 説明 | 状態 |
|---|------|------|------|
| 1 | セキュリティバッジ | 「Bank-Level Security」等 | ❌ 未作成 |
| 2 | パートナーロゴ | 決済ネットワーク等 | ❌ 未取得 |
| 3 | メディア掲載ロゴ | 報道実績（将来） | ⏳ 今後取得 |
| 4 | ユーザーテスティモニアル | レビュー引用（将来） | ⏳ ローンチ後 |

---

## 7. 追加実装が必要な機能

### 7.1 Phase 2: デザイン強化

| # | 機能 | 説明 | 優先度 |
|---|------|------|--------|
| 1 | スクロールアニメーション | セクション表示時のフェードイン | 高 |
| 2 | マーキーアニメーション | 対応通貨のスクロール表示 | 中 |
| 3 | パララックス効果 | Hero背景の奥行き | 低 |
| 4 | 3Dカードアニメーション | ホバー時の傾き | 中 |
| 5 | 数値カウントアップ | ユーザー数など（将来） | 低 |

### 7.2 Phase 2: 機能強化

| # | 機能 | 説明 | 優先度 |
|---|------|------|--------|
| 1 | データ永続化 | Waitlist: Vercel KV / Supabase | 高 |
| 2 | メール通知 | Contact: Resend / SendGrid | 高 |
| 3 | Analytics | GA4 + GTM統合 | 高 |
| 4 | エラートラッキング | Sentry統合 | 中 |
| 5 | A/Bテスト | PostHog / LaunchDarkly | 低 |

### 7.3 Phase 3: コンバージョン最適化

| # | 機能 | 説明 | 優先度 |
|---|------|------|--------|
| 1 | Exit Intent Popup | 離脱時のウェイトリスト促進 | 中 |
| 2 | 紹介プログラムUI | Bybitリファラル連携 | 高 |
| 3 | カウントダウン | ローンチまでの残り時間 | 中 |
| 4 | ライブチャット | Intercom / Crisp | 低 |

---

## 8. 技術スタック詳細

### 8.1 フロントエンド

```json
{
  "framework": "Nuxt 4.2.1",
  "vue": "3.5.25",
  "ui": "@nuxt/ui 4.2.1",
  "i18n": "@nuxtjs/i18n 10.2.1",
  "validation": "@vee-validate/nuxt + zod",
  "utils": "@vueuse/nuxt 14.1.0",
  "images": "@nuxt/image 2.0.0"
}
```

### 8.2 バックエンド

```json
{
  "runtime": "Nitro 2.12.9",
  "validation": "zod 4.1.13",
  "database": "未定 (Vercel KV / Supabase)",
  "email": "未定 (Resend / SendGrid)"
}
```

### 8.3 インフラ

```json
{
  "hosting": "Vercel",
  "cdn": "Vercel Edge Network",
  "dns": "未定",
  "ssl": "Vercel自動発行"
}
```

---

## 9. ディレクトリ構造

```
BitCoinPay/
├── nuxt.config.ts
├── package.json
├── app/
│   ├── app.vue
│   ├── assets/
│   │   └── css/
│   │       └── main.css
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AppHeader.vue
│   │   │   ├── AppFooter.vue
│   │   │   └── LanguageSwitcher.vue
│   │   ├── sections/
│   │   │   ├── HeroSection.vue
│   │   │   ├── AboutSection.vue
│   │   │   ├── FeaturesSection.vue
│   │   │   ├── CurrenciesSection.vue
│   │   │   ├── HowItWorksSection.vue
│   │   │   ├── FaqSection.vue
│   │   │   ├── WaitlistSection.vue
│   │   │   └── ContactSection.vue
│   │   ├── ui/           # 未実装
│   │   └── forms/        # 未実装
│   ├── composables/      # 未実装
│   └── pages/
│       ├── index.vue
│       ├── terms.vue
│       ├── privacy.vue
│       └── contact/
│           ├── personal.vue
│           └── business.vue
├── i18n/
│   └── locales/
│       ├── en.json
│       ├── ja.json
│       └── ... (15 files)
├── server/
│   └── api/
│       ├── waitlist.post.ts
│       └── contact/
│           ├── personal.post.ts
│           └── business.post.ts
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   └── images/           # 未作成
└── docs/
    └── REQUIREMENTS.md
```

---

## 10. 開発フェーズ

### Phase 1: MVP（App Store審査用）✅ 完了

- [x] プロジェクトセットアップ (Nuxt 4)
- [x] UI基盤 (Nuxt UI 4)
- [x] 多言語基盤 (i18n 17言語)
- [x] 全セクション実装
- [x] ウェイトリストフォーム + API
- [x] 問い合わせフォーム + API
- [x] レスポンシブ対応
- [x] ダークモードUI

### Phase 2: デザイン・機能強化 ⏳ 準備中

- [ ] 高品質画像素材の作成・導入
- [ ] アニメーション追加
- [ ] 全17言語の翻訳完了
- [ ] データ永続化 (Vercel KV)
- [ ] メール通知 (Resend)
- [ ] Analytics (GA4 + GTM)
- [ ] Vercelデプロイ

### Phase 3: 最適化・拡張 📋 計画中

- [ ] パフォーマンス最適化
- [ ] SEO強化
- [ ] 紹介プログラムUI
- [ ] A/Bテスト基盤
- [ ] App Store / Google Playリンク差し替え

---

## 11. 参考サイトとの比較

### 足りない要素チェックリスト

| # | 要素 | Slash Card | KAST | BitcoinPay | 対応 |
|---|------|------------|------|------------|------|
| 1 | プロダクトの高品質画像 | ✅ | ✅ | ❌ | 要作成 |
| 2 | スクロールアニメーション | ✅ | ✅ | ❌ | Phase 2 |
| 3 | カルーセル/スライダー | ❌ | ✅ | ❌ | 検討中 |
| 4 | マーキーアニメーション | ❌ | ✅ | ❌ | Phase 2 |
| 5 | ユーザー数表示 | ❌ | ✅ | ❌ | ローンチ後 |
| 6 | メディア掲載ロゴ | ❌ | ✅ | ❌ | 実績取得後 |
| 7 | テスティモニアル | ❌ | ✅ | ❌ | ローンチ後 |
| 8 | セキュリティバッジ | ❌ | ✅ | ❌ | Phase 2 |
| 9 | 会員ティア表示 | ✅ | ✅ | ❌ | 対象外（v1） |
| 10 | SNSリンク | ✅ | ✅ | ❌ | Phase 2 |
| 11 | Whitepaper | ✅ | ❌ | ❌ | 検討中 |
| 12 | Analytics統合 | ✅ | ✅ | ❌ | Phase 2 |

---

## 12. 今後のアクションアイテム

### 即時対応（優先度: 高）

1. **素材作成依頼**
   - [ ] ロゴデザイン（SVG, PNG各サイズ）
   - [ ] カードモックアップ画像
   - [ ] OGP画像

2. **翻訳準備**
   - [ ] 翻訳対象テキストの抽出
   - [ ] 翻訳サービス/翻訳者の手配

3. **インフラ準備**
   - [ ] Vercelアカウント設定
   - [ ] GitHubリポジトリ連携
   - [ ] 環境変数設定

### 短期対応（1-2週間）

4. **機能実装**
   - [ ] Vercel KV接続（Waitlist保存）
   - [ ] Resend接続（問い合わせ通知）
   - [ ] GA4 + GTM設定

5. **デザイン改善**
   - [ ] アニメーション追加
   - [ ] 画像素材の組み込み

### 中期対応（2-4週間）

6. **翻訳完了**
   - [ ] 全17言語の翻訳レビュー
   - [ ] ネイティブチェック

7. **本番デプロイ**
   - [ ] ドメイン取得・設定
   - [ ] SSL証明書
   - [ ] 本番環境テスト

---

## Appendix A: API仕様

### POST /api/waitlist

**Request:**
```json
{
  "email": "user@example.com"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Successfully joined waitlist"
}
```

**Response (Error):**
```json
{
  "statusCode": 400,
  "statusMessage": "Invalid email address"
}
```

### POST /api/contact/personal

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "general",
  "message": "I have a question about..."
}
```

### POST /api/contact/business

**Request:**
```json
{
  "companyName": "Acme Corp",
  "department": "Engineering",
  "name": "Jane Smith",
  "email": "jane@acme.com",
  "phone": "+81-3-1234-5678",
  "inquiryType": "partnership",
  "message": "We are interested in..."
}
```

---

## Appendix B: 環境変数

```env
# App
NUXT_PUBLIC_APP_NAME=BitcoinPay

# Database (Phase 2)
KV_REST_API_URL=
KV_REST_API_TOKEN=

# Email (Phase 2)
RESEND_API_KEY=

# Analytics (Phase 2)
NUXT_PUBLIC_GA_ID=
NUXT_PUBLIC_GTM_ID=
```

---

**End of Requirements Document v1.0.0**
