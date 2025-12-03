<script setup lang="ts">
const { t } = useI18n();

useHead({
  title: () => t('meta.title'),
  meta: [
    { name: 'description', content: () => t('meta.description') },
  ],
});
</script>

<template>
  <div>
    <SectionsHeroSection />
    <SectionsAboutSection />
    <SectionsFeaturesSection />
    <SectionsCurrenciesSection />
    <SectionsHowItWorksSection />
    <SectionsFaqSection />
    <SectionsWaitlistSection />
    <SectionsContactSection />
  </div>
</template>
