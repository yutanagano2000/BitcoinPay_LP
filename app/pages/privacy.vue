<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

useHead({
  title: () => `${t('footer.links.privacy')} - BitcoinPay`,
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

        <h1 class="text-3xl md:text-4xl font-bold mb-8">{{ t('footer.links.privacy') }}</h1>

        <div class="space-y-6">
          <p class="text-gray-400">{{ t('privacy.lastUpdated') }}</p>

          <div>
            <h2 class="text-xl font-semibold text-white mt-8 mb-4">{{ t('privacy.sections.collection.title') }}</h2>
            <p class="text-gray-300 mb-4 leading-relaxed">{{ t('privacy.sections.collection.content') }}</p>
            <ul class="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li v-for="(item, index) in (t('privacy.sections.collection.items') as unknown as string[])" :key="index">
                {{ item }}
              </li>
            </ul>
          </div>

          <div>
            <h2 class="text-xl font-semibold text-white mt-8 mb-4">{{ t('privacy.sections.usage.title') }}</h2>
            <p class="text-gray-300 mb-4 leading-relaxed">{{ t('privacy.sections.usage.content') }}</p>
            <ul class="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li v-for="(item, index) in (t('privacy.sections.usage.items') as unknown as string[])" :key="index">
                {{ item }}
              </li>
            </ul>
          </div>

          <div>
            <h2 class="text-xl font-semibold text-white mt-8 mb-4">{{ t('privacy.sections.sharing.title') }}</h2>
            <p class="text-gray-300 mb-4 leading-relaxed">{{ t('privacy.sections.sharing.content') }}</p>
            <ul class="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li v-for="(item, index) in (t('privacy.sections.sharing.items') as unknown as string[])" :key="index">
                {{ item }}
              </li>
            </ul>
          </div>

          <div>
            <h2 class="text-xl font-semibold text-white mt-8 mb-4">{{ t('privacy.sections.security.title') }}</h2>
            <p class="text-gray-300 mb-4 leading-relaxed">
              {{ t('privacy.sections.security.content') }}
            </p>
          </div>

          <div>
            <h2 class="text-xl font-semibold text-white mt-8 mb-4">{{ t('privacy.sections.rights.title') }}</h2>
            <p class="text-gray-300 mb-4 leading-relaxed">{{ t('privacy.sections.rights.content') }}</p>
            <ul class="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li v-for="(item, index) in (t('privacy.sections.rights.items') as unknown as string[])" :key="index">
                {{ item }}
              </li>
            </ul>
          </div>

          <div>
            <h2 class="text-xl font-semibold text-white mt-8 mb-4">{{ t('privacy.sections.retention.title') }}</h2>
            <p class="text-gray-300 mb-4 leading-relaxed">
              {{ t('privacy.sections.retention.content') }}
            </p>
          </div>

          <div>
            <h2 class="text-xl font-semibold text-white mt-8 mb-4">{{ t('privacy.sections.cookies.title') }}</h2>
            <p class="text-gray-300 mb-4 leading-relaxed">
              {{ t('privacy.sections.cookies.content') }}
            </p>
          </div>

          <div>
            <h2 class="text-xl font-semibold text-white mt-8 mb-4">{{ t('privacy.sections.policyChanges.title') }}</h2>
            <p class="text-gray-300 mb-4 leading-relaxed">
              {{ t('privacy.sections.policyChanges.content') }}
            </p>
          </div>

          <div>
            <h2 class="text-xl font-semibold text-white mt-8 mb-4">{{ t('privacy.sections.contact.title') }}</h2>
            <p class="text-gray-300 mb-4 leading-relaxed">
              {{ t('privacy.sections.contact.content') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
