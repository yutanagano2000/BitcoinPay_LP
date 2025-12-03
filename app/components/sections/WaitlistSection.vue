<script setup lang="ts">
const { t } = useI18n();
const { setupScrollAnimation } = useScrollAnimation();

const contentRef = ref<HTMLElement | null>(null);
const { isVisible } = setupScrollAnimation(contentRef);

const email = ref('');
const isLoading = ref(false);
const status = ref<'idle' | 'success' | 'error'>('idle');

const handleSubmit = async () => {
  if (!email.value) return;

  isLoading.value = true;
  status.value = 'idle';

  try {
    await $fetch('/api/waitlist', {
      method: 'POST',
      body: { email: email.value },
    });
    status.value = 'success';
    email.value = '';
  } catch {
    status.value = 'error';
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <section id="waitlist" class="section-padding relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />

    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl" />
    </div>

    <div class="container-custom relative z-10">
      <div
        ref="contentRef"
        class="max-w-2xl mx-auto text-center animate-on-scroll-scale"
        :class="{ 'is-visible': isVisible }"
      >
        <div class="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-2 mb-8">
          <UIcon name="i-heroicons-bell" class="w-5 h-5 text-amber-400" />
          <span class="text-amber-400 text-sm font-medium">{{ t('common.comingSoon') }}</span>
        </div>

        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          {{ t('waitlist.title') }}
        </h2>
        <p class="text-xl text-gray-400 mb-8">
          {{ t('waitlist.subtitle') }}
        </p>

        <form class="max-w-md mx-auto" @submit.prevent="handleSubmit">
          <div class="flex flex-col sm:flex-row gap-3">
            <UInput
              v-model="email"
              type="email"
              :placeholder="t('waitlist.placeholder')"
              size="xl"
              class="flex-1"
              :disabled="isLoading || status === 'success'"
              required
            />
            <UButton
              type="submit"
              color="primary"
              size="xl"
              :loading="isLoading"
              :disabled="status === 'success'"
            >
              {{ t('waitlist.button') }}
            </UButton>
          </div>

          <Transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="opacity-0 translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
          >
            <div v-if="status === 'success'" class="mt-4 flex items-center justify-center gap-2 text-teal-400">
              <UIcon name="i-heroicons-check-circle" class="w-5 h-5" />
              <span>{{ t('waitlist.success') }}</span>
            </div>
            <div v-else-if="status === 'error'" class="mt-4 flex items-center justify-center gap-2 text-red-400">
              <UIcon name="i-heroicons-exclamation-circle" class="w-5 h-5" />
              <span>{{ t('waitlist.error') }}</span>
            </div>
          </Transition>
        </form>

        <div class="mt-12 flex justify-center gap-6">
          <UButton
            color="neutral"
            variant="outline"
            size="lg"
            disabled
          >
            <UIcon name="i-simple-icons-apple" class="w-6 h-6" />
            <div class="text-left ml-2">
              <p class="text-xs text-gray-400">{{ t('common.downloadOn') }}</p>
              <p class="font-semibold">{{ t('footer.appStore') }}</p>
            </div>
          </UButton>
          <UButton
            color="neutral"
            variant="outline"
            size="lg"
            disabled
          >
            <UIcon name="i-simple-icons-googleplay" class="w-6 h-6" />
            <div class="text-left ml-2">
              <p class="text-xs text-gray-400">{{ t('common.getItOn') }}</p>
              <p class="font-semibold">{{ t('footer.googlePlay') }}</p>
            </div>
          </UButton>
        </div>
      </div>
    </div>
  </section>
</template>
