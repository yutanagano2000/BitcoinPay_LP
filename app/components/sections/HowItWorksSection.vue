<script setup lang="ts">
const { t } = useI18n();
const { setupScrollAnimation } = useScrollAnimation();

const titleRef = ref<HTMLElement | null>(null);
const stepsRef = ref<HTMLElement | null>(null);
const screenshotsRef = ref<HTMLElement | null>(null);

const { isVisible: isTitleVisible } = setupScrollAnimation(titleRef);
const { isVisible: isStepsVisible } = setupScrollAnimation(stepsRef);
const { isVisible: isScreenshotsVisible } = setupScrollAnimation(screenshotsRef);

const steps = computed(() => [
  { key: 'download', icon: 'i-heroicons-arrow-down-tray', color: 'from-blue-500 to-cyan-500' },
  { key: 'verify', icon: 'i-heroicons-identification', color: 'from-amber-500 to-orange-500' },
  { key: 'issue', icon: 'i-heroicons-credit-card', color: 'from-teal-500 to-green-500' },
  { key: 'addWallet', icon: 'i-heroicons-device-phone-mobile', color: 'from-purple-500 to-pink-500' },
  { key: 'spend', icon: 'i-heroicons-shopping-bag', color: 'from-rose-500 to-red-500' },
]);
</script>

<template>
  <section class="section-padding">
    <div class="container-custom">
      <div
        ref="titleRef"
        class="text-center mb-16 animate-on-scroll"
        :class="{ 'is-visible': isTitleVisible }"
      >
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          {{ t('howItWorks.title') }}
        </h2>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">
          {{ t('howItWorks.subtitle') }}
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
        <!-- Steps -->
        <div ref="stepsRef" class="space-y-6">
          <div
            v-for="(step, index) in steps"
            :key="step.key"
            class="flex items-start gap-4 group animate-on-scroll-left"
            :class="[{ 'is-visible': isStepsVisible }, `stagger-${index + 1}`]"
          >
            <div class="relative flex-shrink-0">
              <div
                class="w-14 h-14 rounded-xl flex items-center justify-center"
                :class="`bg-gradient-to-br ${step.color}`"
              >
                <UIcon :name="step.icon" class="w-7 h-7 text-white" />
              </div>
              <div
                class="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gray-800 border-2 border-gray-700 flex items-center justify-center text-xs font-bold text-white"
              >
                {{ index + 1 }}
              </div>
            </div>

            <div class="pt-1">
              <h3 class="text-lg font-semibold text-white mb-1">
                {{ t(`howItWorks.steps.${step.key}.title`) }}
              </h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                {{ t(`howItWorks.steps.${step.key}.description`) }}
              </p>
            </div>
          </div>
        </div>

        <!-- App Screenshots -->
        <div
          ref="screenshotsRef"
          class="relative flex justify-center lg:justify-end animate-on-scroll-right"
          :class="{ 'is-visible': isScreenshotsVisible }"
        >
          <div class="relative w-full max-w-md">
            <!-- Glow effect -->
            <div class="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-teal-500/20 rounded-3xl blur-3xl" />

            <!-- Screenshots stack -->
            <div class="relative flex justify-center gap-4">
              <!-- App main screen -->
              <div class="relative w-40 sm:w-48 animate-float">
                <img
                  src="/images/screenshots/app-main.png"
                  alt="BitcoinPay App Main Screen"
                  class="w-full rounded-2xl shadow-2xl border border-gray-700"
                />
              </div>

              <!-- Card management screen -->
              <div class="relative w-40 sm:w-48 mt-8 animate-float" style="animation-delay: 0.5s;">
                <img
                  src="/images/screenshots/card-management.png"
                  alt="BitcoinPay Card Management"
                  class="w-full rounded-2xl shadow-2xl border border-gray-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
