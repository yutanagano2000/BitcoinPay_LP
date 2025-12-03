<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

useHead({
  title: () => `${t('footer.links.terms')} - BitcoinPay`,
});
</script>

<template>
  <div class="min-h-screen pt-24 pb-16">
    <div class="container-custom">
      <div class="max-w-3xl mx-auto">
        <NuxtLink
          :to="localePath('/')"
          class="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <UIcon name="i-heroicons-arrow-left" class="w-5 h-5" />
          {{ t('common.backToHome') }}
        </NuxtLink>

        <h1 class="text-3xl md:text-4xl font-bold mb-8">{{ t('footer.links.terms') }}</h1>

        <div class="space-y-6">
          <p class="text-gray-400">{{ t('terms.lastUpdated') }}</p>

          <div>
            <h2 class="text-xl font-semibold text-white mt-8 mb-4">{{ t('terms.sections.acceptance.title') }}</h2>
            <p class="text-gray-300 mb-4 leading-relaxed">
              {{ t('terms.sections.acceptance.content') }}
            </p>
          </div>

          <div>
            <h2 class="text-xl font-semibold text-white mt-8 mb-4">{{ t('terms.sections.description.title') }}</h2>
            <p class="text-gray-300 mb-4 leading-relaxed">
              {{ t('terms.sections.description.content') }}
            </p>
          </div>

          <div>
            <h2 class="text-xl font-semibold text-white mt-8 mb-4">{{ t('terms.sections.eligibility.title') }}</h2>
            <p class="text-gray-300 mb-4 leading-relaxed">
              {{ t('terms.sections.eligibility.content') }}
            </p>
          </div>

          <div>
            <h2 class="text-xl font-semibold text-white mt-8 mb-4">{{ t('terms.sections.responsibilities.title') }}</h2>
            <ul class="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li v-for="(item, index) in (t('terms.sections.responsibilities.items') as unknown as string[])" :key="index">
                {{ item }}
              </li>
            </ul>
          </div>

          <div>
            <h2 class="text-xl font-semibold text-white mt-8 mb-4">{{ t('terms.sections.fees.title') }}</h2>
            <p class="text-gray-300 mb-4 leading-relaxed">
              {{ t('terms.sections.fees.content') }}
            </p>
          </div>

          <div>
            <h2 class="text-xl font-semibold text-white mt-8 mb-4">{{ t('terms.sections.liability.title') }}</h2>
            <p class="text-gray-300 mb-4 leading-relaxed">
              {{ t('terms.sections.liability.content') }}
            </p>
          </div>

          <div>
            <h2 class="text-xl font-semibold text-white mt-8 mb-4">{{ t('terms.sections.changes.title') }}</h2>
            <p class="text-gray-300 mb-4 leading-relaxed">
              {{ t('terms.sections.changes.content') }}
            </p>
          </div>

          <div>
            <h2 class="text-xl font-semibold text-white mt-8 mb-4">{{ t('terms.sections.contact.title') }}</h2>
            <p class="text-gray-300 mb-4 leading-relaxed">
              {{ t('terms.sections.contact.content') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
