<script setup lang="ts">
const { t } = useI18n();
const { setupScrollAnimation } = useScrollAnimation();

const titleRef = ref<HTMLElement | null>(null);
const cardsRef = ref<HTMLElement | null>(null);

const { isVisible: isTitleVisible } = setupScrollAnimation(titleRef);
const { isVisible: isCardsVisible } = setupScrollAnimation(cardsRef);

const features = computed(() => [
  {
    key: 'instant',
    icon: 'i-heroicons-bolt',
    color: 'text-amber-400',
    bgColor: 'bg-amber-400/10',
  },
  {
    key: 'wallet',
    icon: 'i-heroicons-device-phone-mobile',
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/10',
  },
  {
    key: 'custody',
    icon: 'i-heroicons-shield-check',
    color: 'text-teal-400',
    bgColor: 'bg-teal-400/10',
  },
  {
    key: 'noBank',
    icon: 'i-heroicons-building-library',
    color: 'text-purple-400',
    bgColor: 'bg-purple-400/10',
  },
]);
</script>

<template>
  <section id="about" class="section-padding bg-gray-900/50">
    <div class="container-custom">
      <div
        ref="titleRef"
        class="text-center mb-16 animate-on-scroll"
        :class="{ 'is-visible': isTitleVisible }"
      >
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          {{ t('about.title') }}
        </h2>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">
          {{ t('about.subtitle') }}
        </p>
      </div>

      <div class="max-w-3xl mx-auto mb-16 animate-on-scroll stagger-1" :class="{ 'is-visible': isTitleVisible }">
        <p class="text-lg text-gray-300 text-center">
          {{ t('about.description') }}
        </p>
      </div>

      <div ref="cardsRef" class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(feature, index) in features"
          :key="feature.key"
          class="group bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 animate-on-scroll-scale"
          :class="[{ 'is-visible': isCardsVisible }, `stagger-${index + 1}`]"
        >
          <div
            :class="[feature.bgColor, 'w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform']"
          >
            <UIcon :name="feature.icon" :class="[feature.color, 'w-7 h-7']" />
          </div>
          <h3 class="text-lg font-semibold text-white mb-2">
            {{ t(`about.features.${feature.key}.title`) }}
          </h3>
          <p class="text-gray-400 text-sm">
            {{ t(`about.features.${feature.key}.description`) }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
