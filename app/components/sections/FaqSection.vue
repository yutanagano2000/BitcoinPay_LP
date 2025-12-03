<script setup lang="ts">
const { t } = useI18n();
const { setupScrollAnimation } = useScrollAnimation();

const titleRef = ref<HTMLElement | null>(null);
const faqRef = ref<HTMLElement | null>(null);

const { isVisible: isTitleVisible } = setupScrollAnimation(titleRef);
const { isVisible: isFaqVisible } = setupScrollAnimation(faqRef);

const faqItems = ['howToStart', 'cost', 'tax', 'currencies', 'security'];

const openItems = ref<string[]>([]);

const toggle = (key: string) => {
  const index = openItems.value.indexOf(key);
  if (index === -1) {
    openItems.value.push(key);
  } else {
    openItems.value.splice(index, 1);
  }
};

const isOpen = (key: string) => openItems.value.includes(key);
</script>

<template>
  <section id="faq" class="section-padding bg-gray-900/50">
    <div class="container-custom">
      <div
        ref="titleRef"
        class="text-center mb-16 animate-on-scroll"
        :class="{ 'is-visible': isTitleVisible }"
      >
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          {{ t('faq.title') }}
        </h2>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">
          {{ t('faq.subtitle') }}
        </p>
      </div>

      <div ref="faqRef" class="max-w-3xl mx-auto space-y-4">
        <div
          v-for="(item, index) in faqItems"
          :key="item"
          class="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden animate-on-scroll"
          :class="[{ 'is-visible': isFaqVisible }, `stagger-${index + 1}`]"
        >
          <button
            class="w-full px-6 py-5 flex items-center justify-between text-left"
            @click="toggle(item)"
          >
            <span class="text-white font-medium pr-4">
              {{ t(`faq.items.${item}.question`) }}
            </span>
            <UIcon
              name="i-heroicons-chevron-down"
              class="w-5 h-5 text-gray-400 transition-transform flex-shrink-0"
              :class="{ 'rotate-180': isOpen(item) }"
            />
          </button>
          <Transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-2"
          >
            <div v-if="isOpen(item)" class="px-6 pb-5">
              <p class="text-gray-400 leading-relaxed">
                {{ t(`faq.items.${item}.answer`) }}
              </p>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>
