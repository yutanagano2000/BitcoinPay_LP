<script setup lang="ts">
const { locale, locales, setLocale } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const router = useRouter();

const availableLocales = computed(() => {
  return locales.value.map((l) => ({
    code: typeof l === 'string' ? l : l.code,
    name: typeof l === 'string' ? l : l.name,
  }));
});

const currentLocale = computed(() => {
  return availableLocales.value.find((l) => l.code === locale.value);
});

const items = computed(() => {
  return [
    availableLocales.value.map((l) => ({
      label: l.name,
      onSelect: () => {
        const path = switchLocalePath(l.code);
        router.push(path);
      },
    })),
  ];
});
</script>

<template>
  <UDropdownMenu :items="items">
    <UButton
      color="neutral"
      variant="ghost"
      class="gap-1"
      trailing-icon="i-heroicons-chevron-down-20-solid"
    >
      <UIcon name="i-heroicons-globe-alt" class="w-[22.4px] h-[22.4px]" />
      <span class="hidden sm:inline">{{ currentLocale?.name }}</span>
    </UButton>
  </UDropdownMenu>
</template>
