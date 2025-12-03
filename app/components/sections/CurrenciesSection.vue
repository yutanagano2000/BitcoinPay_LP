<script setup lang="ts">
const { t } = useI18n();
const { setupScrollAnimation } = useScrollAnimation();

const titleRef = ref<HTMLElement | null>(null);
const currentRef = ref<HTMLElement | null>(null);
const comingRef = ref<HTMLElement | null>(null);

const { isVisible: isTitleVisible } = setupScrollAnimation(titleRef);
const { isVisible: isCurrentVisible } = setupScrollAnimation(currentRef);
const { isVisible: isComingVisible } = setupScrollAnimation(comingRef);

const currentCurrencies = [
  { name: 'USDC', icon: 'i-cryptocurrency-color-usdc', bgColor: 'bg-blue-400/10' },
  { name: 'USDT', icon: 'i-cryptocurrency-color-usdt', bgColor: 'bg-green-400/10' },
];

const comingCurrencies = [
  { name: 'Bitcoin SV', shortName: 'BSV', icon: 'i-cryptocurrency-color-bsv', bgColor: 'bg-amber-400/10' },
  { name: 'Ethereum', shortName: 'ETH', icon: 'i-cryptocurrency-color-eth', bgColor: 'bg-purple-400/10' },
  { name: 'Solana', shortName: 'SOL', icon: 'i-cryptocurrency-color-sol', bgColor: 'bg-violet-400/10' },
  { name: 'Polygon', shortName: 'MATIC', icon: 'i-cryptocurrency-color-matic', bgColor: 'bg-indigo-400/10' },
  { name: 'BNB Chain', shortName: 'BNB', icon: 'i-cryptocurrency-color-bnb', bgColor: 'bg-yellow-400/10' },
];
</script>

<template>
  <section id="currencies" class="section-padding bg-gray-900/50">
    <div class="container-custom">
      <div
        ref="titleRef"
        class="text-center mb-16 animate-on-scroll"
        :class="{ 'is-visible': isTitleVisible }"
      >
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          {{ t('currencies.title') }}
        </h2>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">
          {{ t('currencies.subtitle') }}
        </p>
      </div>

      <div class="max-w-4xl mx-auto">
        <div ref="currentRef" class="mb-12">
          <h3 class="text-lg font-semibold text-teal-400 mb-6 flex items-center gap-2 animate-on-scroll" :class="{ 'is-visible': isCurrentVisible }">
            <UIcon name="i-heroicons-check-circle" class="w-5 h-5" />
            {{ t('currencies.current') }}
          </h3>
          <div class="grid grid-cols-2 gap-4">
            <div
              v-for="(currency, index) in currentCurrencies"
              :key="currency.name"
              class="bg-gray-800/50 rounded-xl p-6 border border-gray-700 flex items-center gap-4 animate-on-scroll-scale"
              :class="[{ 'is-visible': isCurrentVisible }, `stagger-${index + 1}`]"
            >
              <div :class="[currency.bgColor, 'w-14 h-14 rounded-full flex items-center justify-center']">
                <UIcon :name="currency.icon" class="w-10 h-10" />
              </div>
              <div>
                <p class="text-white font-semibold text-lg">{{ currency.name }}</p>
                <p class="text-gray-400 text-sm">{{ t('currencies.stablecoin') }}</p>
              </div>
            </div>
          </div>
        </div>

        <div ref="comingRef">
          <h3 class="text-lg font-semibold text-amber-400 mb-6 flex items-center gap-2 animate-on-scroll" :class="{ 'is-visible': isComingVisible }">
            <UIcon name="i-heroicons-clock" class="w-5 h-5" />
            {{ t('currencies.coming') }}
          </h3>
          <!-- Marquee container for coming currencies -->
          <div class="overflow-hidden">
            <div class="flex gap-4 animate-marquee" style="width: max-content;">
              <!-- First set -->
              <div
                v-for="currency in comingCurrencies"
                :key="currency.name"
                class="bg-gray-800/30 rounded-xl p-4 border border-gray-700/50 text-center group hover:border-gray-600 transition-all w-36 flex-shrink-0"
              >
                <div :class="[currency.bgColor, 'w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3']">
                  <UIcon :name="currency.icon" class="w-8 h-8" />
                </div>
                <p class="text-white font-medium text-sm">{{ currency.name }}</p>
                <UBadge color="neutral" variant="subtle" size="xs" class="mt-2">
                  {{ t('common.comingSoon') }}
                </UBadge>
              </div>
              <!-- Duplicate set for seamless loop -->
              <div
                v-for="currency in comingCurrencies"
                :key="`${currency.name}-dup`"
                class="bg-gray-800/30 rounded-xl p-4 border border-gray-700/50 text-center group hover:border-gray-600 transition-all w-36 flex-shrink-0"
              >
                <div :class="[currency.bgColor, 'w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3']">
                  <UIcon :name="currency.icon" class="w-8 h-8" />
                </div>
                <p class="text-white font-medium text-sm">{{ currency.name }}</p>
                <UBadge color="neutral" variant="subtle" size="xs" class="mt-2">
                  {{ t('common.comingSoon') }}
                </UBadge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
