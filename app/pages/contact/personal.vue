<script setup lang="ts">
import { z } from 'zod';

const { t } = useI18n();
const localePath = useLocalePath();

useHead({
  title: () => `${t('contactForm.personal.title')} - BitcoinPay`,
});

const schema = z.object({
  name: z.string().optional(),
  email: z.string().email(),
  subject: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const form = reactive<FormData>({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const isLoading = ref(false);
const status = ref<'idle' | 'success' | 'error'>('idle');

// Email validation state
const emailTouched = ref(false);
const emailError = computed(() => {
  if (!emailTouched.value) return '';
  if (!form.email) return t('contactForm.validation.emailRequired');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(form.email)) return t('contactForm.validation.emailInvalid');
  return '';
});

const onEmailBlur = () => {
  emailTouched.value = true;
};


const handleSubmit = async () => {
  // Trigger validation on submit
  emailTouched.value = true;

  const result = schema.safeParse(form);
  if (!result.success) return;

  isLoading.value = true;
  status.value = 'idle';

  try {
    await $fetch('/api/contact/personal', {
      method: 'POST',
      body: form,
    });
    status.value = 'success';
    Object.assign(form, { name: '', email: '', subject: '', message: '' });
    emailTouched.value = false;
  } catch {
    status.value = 'error';
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div class="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-xl lg:max-w-2xl mx-auto">
      <NuxtLink
        :to="localePath('/')"
        class="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 sm:mb-8"
      >
        <UIcon name="i-heroicons-arrow-left" class="w-5 h-5" />
        {{ t('common.backToHome') }}
      </NuxtLink>

      <div class="bg-gray-800/50 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border border-gray-700">
        <div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div class="w-12 h-12 sm:w-14 sm:h-14 bg-teal-500/10 rounded-xl flex items-center justify-center shrink-0">
            <UIcon name="i-heroicons-user" class="w-6 h-6 sm:w-7 sm:h-7 text-teal-400" />
          </div>
          <div>
            <h1 class="text-xl sm:text-2xl font-bold">{{ t('contactForm.personal.title') }}</h1>
            <p class="text-sm sm:text-base text-gray-400 mt-1">{{ t('contact.personal.description') }}</p>
          </div>
        </div>

        <form class="space-y-4 sm:space-y-5" @submit.prevent="handleSubmit">
          <UFormField :label="t('contactForm.personal.name')">
            <UInput
              v-model="form.name"
              size="lg"
              class="w-full"
            />
          </UFormField>

          <UFormField :label="t('contactForm.personal.email')" required>
            <UInput
              v-model="form.email"
              type="email"
              size="lg"
              required
              class="w-full"
              :class="{ 'ring-2 ring-red-500': emailError }"
              @blur="onEmailBlur"
            />
            <p v-if="emailError" class="mt-1 text-sm text-red-500">
              {{ emailError }}
            </p>
          </UFormField>

          <UFormField :label="t('contactForm.personal.subject')">
            <UInput
              v-model="form.subject"
              size="lg"
              class="w-full"
            />
          </UFormField>

          <UFormField :label="t('contactForm.personal.message')">
            <UTextarea
              v-model="form.message"
              :rows="5"
              size="lg"
              class="w-full"
            />
          </UFormField>

          <div class="pt-2">
            <UButton
              type="submit"
              color="primary"
              size="lg"
              :loading="isLoading"
              :disabled="status === 'success'"
              class="w-full justify-center"
            >
              {{ t('contactForm.personal.submit') }}
            </UButton>
          </div>

          <Transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="opacity-0 translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
          >
            <div v-if="status === 'success'" class="flex items-center justify-center gap-2 text-teal-400 text-sm sm:text-base">
              <UIcon name="i-heroicons-check-circle" class="w-5 h-5" />
              <span>{{ t('contactForm.success') }}</span>
            </div>
            <div v-else-if="status === 'error'" class="flex items-center justify-center gap-2 text-red-400 text-sm sm:text-base">
              <UIcon name="i-heroicons-exclamation-circle" class="w-5 h-5" />
              <span>{{ t('contactForm.error') }}</span>
            </div>
          </Transition>
        </form>
      </div>
    </div>
  </div>
</template>
