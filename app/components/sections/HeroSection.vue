<script setup lang="ts">
const { t, locale } = useI18n();
const { setupScrollAnimation } = useScrollAnimation();
const { tiltStyle, handleMouseMove, handleMouseEnter, handleMouseLeave } = useCardTilt();
const { parallaxOffset } = useParallax();

const heroContent = ref<HTMLElement | null>(null);
const cardContainer = ref<HTMLElement | null>(null);

const { isVisible: isHeroVisible } = setupScrollAnimation(heroContent, { threshold: 0.2 });
const { isVisible: isCardVisible } = setupScrollAnimation(cardContainer, { threshold: 0.2 });

const onCardMouseMove = (event: MouseEvent) => {
  if (cardContainer.value) {
    handleMouseMove(event, cardContainer.value);
  }
};

const scrollToWaitlist = () => {
  const element = document.querySelector('#waitlist');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const isJapanese = computed(() => locale.value === 'ja');
const headlineClasses = computed(() => {
  if (isJapanese.value) {
    // 日本語の場合、モバイル版で1行表示できるようにサイズを調整
    // 2行にならない限界まで大きくする（tracking-tightで文字間を詰めているため、より大きくできる）
    return 'text-[1.75rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 lg:mb-6 leading-tight tracking-tight';
  }
  return 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 lg:mb-6 leading-tight';
});

// SVGインライン埋め込み用
const grayCardSvg = ref<string>('');
const whiteCardSvg = ref<string>('');

// SVGのIDをユニーク化し、最適化する関数
const makeUniqueIds = (svgContent: string, prefix: string): string => {
  const uniqueId = `${prefix}-${Math.random().toString(36).substring(2, 9)}`;
  const idMap = new Map<string, string>();
  
  // まず、すべてのIDを収集してマッピングを作成
  svgContent.replace(/id="([^"]+)"/g, (match, id) => {
    if (!idMap.has(id)) {
      idMap.set(id, `${id}_${uniqueId}`);
    }
    return match;
  });
  
  // ID属性を置き換え
  let result = svgContent.replace(/id="([^"]+)"/g, (match, id) => {
    return `id="${idMap.get(id) || id}"`;
  });
  
  // url(#id)パターンを置き換え
  idMap.forEach((newId, oldId) => {
    result = result.replace(new RegExp(`url\\(#${oldId}\\)`, 'g'), `url(#${newId})`);
    result = result.replace(new RegExp(`xlink:href="#${oldId}"`, 'g'), `xlink:href="#${newId}"`);
    result = result.replace(new RegExp(`href="#${oldId}"`, 'g'), `href="#${newId}"`);
    result = result.replace(new RegExp(`#${oldId}([^a-zA-Z0-9_-])`, 'g'), `#${newId}$1`);
  });
  
  // SVG要素に最適化設定を追加
  result = result.replace(
    /<svg([^>]*)>/,
    (match, attrs) => {
      // preserveAspectRatioが既にある場合はそのまま、ない場合は追加
      if (!attrs.includes('preserveAspectRatio')) {
        attrs += ' preserveAspectRatio="xMidYMid meet"';
      }
      // shape-renderingを追加
      if (!attrs.includes('shape-rendering')) {
        attrs += ' shape-rendering="geometricPrecision"';
      }
      // width/heightを100%に設定（レスポンシブ対応）
      attrs = attrs.replace(/width="[^"]*"/, 'width="100%"');
      attrs = attrs.replace(/height="[^"]*"/, 'height="100%"');
      return `<svg${attrs} style="width: 100%; height: auto; display: block;">`;
    }
  );
  
  return result;
};

onMounted(async () => {
  try {
    // SVGファイルを読み込む
    const [graySvgResponse, whiteSvgResponse] = await Promise.all([
      $fetch('/Full_ver.svg', { responseType: 'text' }),
      $fetch('/Full_white_ver.svg', { responseType: 'text' })
    ]);

    // IDをユニーク化
    grayCardSvg.value = makeUniqueIds(graySvgResponse, 'gray-card');
    whiteCardSvg.value = makeUniqueIds(whiteSvgResponse, 'white-card');
  } catch (error) {
    console.error('Failed to load SVG files:', error);
  }
});
</script>

<template>
  <section class="relative min-h-screen flex items-center pt-20 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />

    <!-- Parallax Background -->
    <div
      class="absolute inset-0 overflow-hidden parallax-bg"
      :style="{ transform: `translateY(${parallaxOffset}px)` }"
    >
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-float" />
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-float" style="animation-delay: 1.5s;" />
    </div>

    <div class="container-custom relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div
          ref="heroContent"
          class="text-center lg:text-left animate-on-scroll-left"
          :class="{ 'is-visible': isHeroVisible }"
        >
          <UBadge color="primary" variant="subtle" size="lg" class="mb-4 lg:mb-6">
            {{ t('hero.comingSoon') }}
          </UBadge>

          <h1 :class="headlineClasses">
            <span class="gradient-text">{{ t('hero.title') }}</span>
          </h1>

          <!-- Mobile Card Section - Only visible on mobile -->
          <div class="lg:hidden mb-4">
            <div class="relative flex justify-center">
              <div class="relative w-64 sm:w-72 pb-8">
                <!-- Glow effect -->
                <div class="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-teal-500/15 rounded-2xl blur-2xl" />

                <!-- Stacked cards with SVG -->
                <div class="relative mb-4">
                  <!-- White card (back) -->
                  <div
                    class="absolute top-3 left-3 w-full transform rotate-4 opacity-60"
                    v-if="whiteCardSvg"
                    v-html="whiteCardSvg"
                  />

                  <!-- Gray card (front) -->
                  <div class="relative w-full z-10" v-if="grayCardSvg" v-html="grayCardSvg" />
                </div>

                <!-- Balance info below cards -->
                <div class="mt-6 bg-gray-800/50 backdrop-blur-sm rounded-xl p-3 border border-gray-700">
                  <div class="flex justify-between items-center">
                    <div>
                      <p class="text-gray-500 text-xs">{{ t('hero.balance') }}</p>
                      <p class="text-white font-bold text-lg">$2,450.00</p>
                    </div>
                    <div class="flex gap-1.5">
                      <UBadge color="success" variant="subtle" size="xs">USDC</UBadge>
                      <UBadge color="info" variant="subtle" size="xs">USDT</UBadge>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Mobile CTA Button -->
            <div class="mt-4 flex justify-center">
              <UButton
                size="lg"
                color="primary"
                class="font-semibold animate-pulse-glow"
                @click="scrollToWaitlist"
              >
                {{ t('hero.cta') }}
                <UIcon name="i-heroicons-arrow-right" class="w-4 h-4 ml-1" />
              </UButton>
            </div>
          </div>

          <p class="text-xl md:text-2xl text-gray-300 mb-4">
            {{ t('hero.subtitle') }}
          </p>

          <p class="text-gray-400 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
            {{ t('hero.description') }}
          </p>

          <!-- Desktop CTA Buttons - Hidden on mobile since we show above -->
          <div class="hidden lg:flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <UButton
              size="xl"
              color="primary"
              class="font-semibold animate-pulse-glow"
              @click="scrollToWaitlist"
            >
              {{ t('hero.cta') }}
              <UIcon name="i-heroicons-arrow-right" class="w-5 h-5 ml-2" />
            </UButton>

            <div class="flex items-center justify-center gap-3">
              <UButton
                color="neutral"
                variant="ghost"
                size="xl"
                disabled
              >
                <UIcon name="i-simple-icons-apple" class="w-6 h-6" />
              </UButton>
              <UButton
                color="neutral"
                variant="ghost"
                size="xl"
                disabled
              >
                <UIcon name="i-simple-icons-googleplay" class="w-6 h-6" />
              </UButton>
            </div>
          </div>

          <!-- Mobile App Store Buttons -->
          <div class="flex lg:hidden items-center justify-center gap-3 mb-6">
            <UButton
              color="neutral"
              variant="ghost"
              size="lg"
              disabled
            >
              <UIcon name="i-simple-icons-apple" class="w-5 h-5" />
            </UButton>
            <UButton
              color="neutral"
              variant="ghost"
              size="lg"
              disabled
            >
              <UIcon name="i-simple-icons-googleplay" class="w-5 h-5" />
            </UButton>
          </div>

          <div class="mt-6 lg:mt-8 flex items-center gap-4 lg:gap-6 justify-center lg:justify-start flex-wrap">
            <div class="flex items-center gap-2">
              <UIcon name="i-heroicons-shield-check" class="w-4 h-4 lg:w-5 lg:h-5 text-teal-400" />
              <span class="text-xs lg:text-sm text-gray-400">{{ t('hero.badges.selfCustody') }}</span>
            </div>
            <div class="flex items-center gap-2">
              <UIcon name="i-heroicons-bolt" class="w-4 h-4 lg:w-5 lg:h-5 text-amber-400" />
              <span class="text-xs lg:text-sm text-gray-400">{{ t('hero.badges.instant') }}</span>
            </div>
            <div class="flex items-center gap-2">
              <UIcon name="i-heroicons-globe-alt" class="w-4 h-4 lg:w-5 lg:h-5 text-blue-400" />
              <span class="text-xs lg:text-sm text-gray-400">{{ t('hero.badges.global') }}</span>
            </div>
          </div>
        </div>

        <!-- Desktop Card Section - Hidden on mobile -->
        <div
          ref="cardContainer"
          class="relative hidden lg:flex justify-center lg:justify-end card-3d-container animate-on-scroll-right"
          :class="{ 'is-visible': isCardVisible }"
          @mousemove="onCardMouseMove"
          @mouseenter="handleMouseEnter"
          @mouseleave="handleMouseLeave"
        >
          <div
            class="relative w-80 sm:w-96 md:w-[420px] card-3d"
            :style="tiltStyle"
          >
            <!-- Glow effect -->
            <div class="absolute inset-0 bg-gradient-to-br from-amber-500/30 to-teal-500/20 rounded-3xl blur-3xl" />

            <!-- Stacked cards with SVG -->
            <div class="relative mb-8">
              <!-- White card (back) -->
              <div
                class="absolute top-6 left-6 w-full transform rotate-6 opacity-70"
                v-if="whiteCardSvg"
                v-html="whiteCardSvg"
              />

              <!-- Gray card (front) -->
              <div class="relative w-full z-10 transition-transform duration-300" v-if="grayCardSvg" v-html="grayCardSvg" />
            </div>

            <!-- Balance info below cards -->
            <div class="mt-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-700">
              <div class="flex justify-between items-center">
                <div>
                  <p class="text-gray-500 text-xs">{{ t('hero.balance') }}</p>
                  <p class="text-white font-bold text-xl">$2,450.00</p>
                </div>
                <div class="flex gap-2">
                  <UBadge color="success" variant="subtle" size="sm">USDC</UBadge>
                  <UBadge color="info" variant="subtle" size="sm">USDT</UBadge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <UIcon name="i-heroicons-chevron-down" class="w-6 h-6 text-gray-500" />
    </div>
  </section>
</template>

<style scoped>
/* インラインSVGの高品質レンダリング */
:deep(svg) {
  width: 100%;
  height: auto;
  display: block;
  shape-rendering: geometricPrecision;
  text-rendering: optimizeLegibility;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  will-change: transform;
  backface-visibility: hidden;
  transform: translateZ(0);
  /* GPUアクセラレーションを有効化 */
  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -o-transform: translateZ(0);
}
</style>
