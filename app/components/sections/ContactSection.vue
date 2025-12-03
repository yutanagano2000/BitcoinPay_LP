<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();
const { setupScrollAnimation } = useScrollAnimation();

const titleRef = ref<HTMLElement | null>(null);
const cardsRef = ref<HTMLElement | null>(null);

const { isVisible: isTitleVisible } = setupScrollAnimation(titleRef);
const { isVisible: isCardsVisible } = setupScrollAnimation(cardsRef);
</script>

<template>
  <section id="contact" class="section-padding bg-gray-900/50">
    <div class="container-custom">
      <div
        ref="titleRef"
        class="text-center mb-16 animate-on-scroll"
        :class="{ 'is-visible': isTitleVisible }"
      >
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          {{ t('contact.title') }}
        </h2>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">
          {{ t('contact.subtitle') }}
        </p>
      </div>

      <div ref="cardsRef" class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <NuxtLink
          :to="localePath('/contact/personal')"
          class="group bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-teal-500/50 transition-all duration-300 animate-on-scroll-left"
          :class="{ 'is-visible': isCardsVisible }"
        >
          <div class="w-14 h-14 bg-teal-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <UIcon name="i-heroicons-user" class="w-7 h-7 text-teal-400" />
          </div>
          <h3 class="text-xl font-semibold text-white mb-2">
            {{ t('contact.personal.title') }}
          </h3>
          <p class="text-gray-400 mb-6">
            {{ t('contact.personal.description') }}
          </p>
          <span class="inline-flex items-center gap-2 text-teal-400 font-medium group-hover:gap-3 transition-all">
            {{ t('contact.personal.button') }}
            <UIcon name="i-heroicons-arrow-right" class="w-5 h-5" />
          </span>
        </NuxtLink>

        <NuxtLink
          :to="localePath('/contact/business')"
          class="group bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-amber-500/50 transition-all duration-300 animate-on-scroll-right stagger-1"
          :class="{ 'is-visible': isCardsVisible }"
        >
          <div class="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <UIcon name="i-heroicons-building-office" class="w-7 h-7 text-amber-400" />
          </div>
          <h3 class="text-xl font-semibold text-white mb-2">
            {{ t('contact.business.title') }}
          </h3>
          <p class="text-gray-400 mb-6">
            {{ t('contact.business.description') }}
          </p>
          <span class="inline-flex items-center gap-2 text-amber-400 font-medium group-hover:gap-3 transition-all">
            {{ t('contact.business.button') }}
            <UIcon name="i-heroicons-arrow-right" class="w-5 h-5" />
          </span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
