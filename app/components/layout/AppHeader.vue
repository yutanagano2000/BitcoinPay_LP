<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();
const route = useRoute();
const router = useRouter();

const isMenuOpen = ref(false);

const navItems = computed(() => [
  { key: 'about', href: '#about' },
  { key: 'features', href: '#features' },
  { key: 'currencies', href: '#currencies' },
  { key: 'faq', href: '#faq' },
  { key: 'contact', href: '#contact' },
]);

const isHomePage = computed(() => {
  const path = route.path;
  return path === '/' || path === localePath('/') || /^\/[a-z]{2}(-[A-Z]{2})?\/?$/.test(path);
});

const scrollToSection = async (href: string) => {
  isMenuOpen.value = false;

  if (isHomePage.value) {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  } else {
    await router.push(localePath('/') + href);
    await nextTick();
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }
};
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-lg border-b border-gray-800">
    <div class="container-custom">
      <div class="flex items-center justify-between h-16 md:h-20">
        <NuxtLink :to="localePath('/')" class="flex items-center">
          <img
            src="/logo-full.svg"
            alt="BitcoinPay"
            class="h-8 md:h-10 w-auto"
          />
        </NuxtLink>

        <nav class="hidden lg:flex items-center gap-8">
          <button
            v-for="item in navItems"
            :key="item.key"
            class="text-gray-300 hover:text-white transition-colors"
            @click="scrollToSection(item.href)"
          >
            {{ t(`nav.${item.key}`) }}
          </button>
        </nav>

        <div class="flex items-center gap-4">
          <LayoutLanguageSwitcher />

          <UButton
            class="hidden md:flex"
            color="primary"
            variant="solid"
            @click="scrollToSection('#waitlist')"
          >
            {{ t('hero.cta') }}
          </UButton>

          <button
            class="lg:hidden p-2"
            aria-label="Toggle menu"
            @click="isMenuOpen = !isMenuOpen"
          >
            <UIcon :name="isMenuOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'" class="w-6 h-6" />
          </button>
        </div>
      </div>

      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <nav v-if="isMenuOpen" class="lg:hidden py-4 border-t border-gray-800">
          <div class="flex flex-col gap-4">
            <button
              v-for="item in navItems"
              :key="item.key"
              class="text-gray-300 hover:text-white transition-colors text-left py-2"
              @click="scrollToSection(item.href)"
            >
              {{ t(`nav.${item.key}`) }}
            </button>
            <UButton
              color="primary"
              variant="solid"
              class="w-full justify-center mt-2"
              @click="scrollToSection('#waitlist')"
            >
              {{ t('hero.cta') }}
            </UButton>
          </div>
        </nav>
      </Transition>
    </div>
  </header>
</template>
