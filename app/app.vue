<script setup lang="ts">
const { locale } = useI18n();

useHead({
  htmlAttrs: {
    lang: () => locale.value,
  },
});
</script>

<template>
  <div class="min-h-screen bg-gray-950 text-white">
    <LayoutAppHeader />
    <main>
      <NuxtPage />
    </main>
    <LayoutAppFooter />
    <!-- Mobile Download Banner -->
    <LayoutDownloadBanner class="lg:hidden" />
  </div>
</template>
