<script setup lang="ts">
const { t } = useI18n();
const { setupScrollAnimation } = useScrollAnimation();

const titleRef = ref<HTMLElement | null>(null);
const cardsRef = ref<HTMLElement | null>(null);

const { isVisible: isTitleVisible } = setupScrollAnimation(titleRef);
const { isVisible: isCardsVisible } = setupScrollAnimation(cardsRef);

const features = computed(() => [
  {
    key: 'virtualCard',
    icon: 'i-heroicons-credit-card',
    color: 'from-amber-500 to-orange-600',
  },
  {
    key: 'physicalCard',
    icon: 'i-heroicons-identification',
    color: 'from-gray-500 to-gray-600',
    comingSoon: true,
  },
  {
    key: 'multiCurrency',
    icon: 'i-heroicons-currency-dollar',
    color: 'from-teal-500 to-cyan-600',
  },
  {
    key: 'globalPayments',
    icon: 'i-heroicons-globe-alt',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    key: 'lowFees',
    icon: 'i-heroicons-tag',
    color: 'from-green-500 to-emerald-600',
  },
  {
    key: 'security',
    icon: 'i-heroicons-shield-check',
    color: 'from-purple-500 to-violet-600',
  },
]);
</script>

<template>
  <section id="features" class="section-padding">
    <div class="container-custom">
      <div
        ref="titleRef"
        class="text-center mb-16 animate-on-scroll"
        :class="{ 'is-visible': isTitleVisible }"
      >
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          {{ t('features.title') }}
        </h2>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">
          {{ t('features.subtitle') }}
        </p>
      </div>

      <div ref="cardsRef" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(feature, index) in features"
          :key="feature.key"
          class="group relative bg-gray-800/30 rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 overflow-hidden animate-on-scroll-scale"
          :class="[{ 'is-visible': isCardsVisible }, `stagger-${(index % 3) + 1}`]"
        >
          <div
            class="absolute top-0 right-0 w-32 h-32 opacity-10 blur-2xl transition-opacity group-hover:opacity-20"
            :class="`bg-gradient-to-br ${feature.color}`"
          />

          <div class="relative">
            <div
              class="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
              :class="`bg-gradient-to-br ${feature.color}`"
            >
              <UIcon :name="feature.icon" class="w-6 h-6 text-white" />
            </div>

            <div class="flex items-center gap-2 mb-2">
              <h3 class="text-lg font-semibold text-white">
                {{ t(`features.list.${feature.key}.title`) }}
              </h3>
              <UBadge v-if="feature.comingSoon" color="neutral" variant="subtle" size="xs">
                {{ t('common.comingSoon') }}
              </UBadge>
            </div>

            <p class="text-gray-400 text-sm">
              {{ t(`features.list.${feature.key}.description`) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
