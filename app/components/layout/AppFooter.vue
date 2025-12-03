<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="bg-gray-900 border-t border-gray-800">
    <div class="container-custom py-12 md:py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        <div class="lg:col-span-2">
          <NuxtLink :to="localePath('/')" class="flex items-center mb-4">
            <img
              src="/images/logo/logo-full.svg"
              alt="BitcoinPay"
              class="h-10 w-auto"
            />
          </NuxtLink>
          <p class="text-gray-400 text-sm mb-4">
            {{ t('footer.company.name') }}
          </p>
          <p class="text-gray-500 text-xs">
            {{ t('footer.company.address') }}
          </p>
        </div>

        <div>
          <h4 class="text-white font-semibold mb-4">{{ t('footer.sections.links') }}</h4>
          <ul class="space-y-2">
            <li>
              <NuxtLink
                :to="localePath('/terms')"
                class="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {{ t('footer.links.terms') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                :to="localePath('/privacy')"
                class="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {{ t('footer.links.privacy') }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-semibold mb-4">{{ t('footer.sections.download') }}</h4>
          <div class="flex flex-col gap-3">
            <UButton
              color="neutral"
              variant="outline"
              class="justify-start"
              disabled
            >
              <UIcon name="i-simple-icons-apple" class="w-5 h-5" />
              <span class="ml-2">{{ t('footer.appStore') }}</span>
              <UBadge color="neutral" variant="subtle" size="xs" class="ml-auto">
                {{ t('common.comingSoon') }}
              </UBadge>
            </UButton>
            <UButton
              color="neutral"
              variant="outline"
              class="justify-start"
              disabled
            >
              <UIcon name="i-simple-icons-googleplay" class="w-5 h-5" />
              <span class="ml-2">{{ t('footer.googlePlay') }}</span>
              <UBadge color="neutral" variant="subtle" size="xs" class="ml-auto">
                {{ t('common.comingSoon') }}
              </UBadge>
            </UButton>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-gray-500 text-sm">
          &copy; {{ currentYear }} {{ t('footer.company.name') }} {{ t('footer.copyright') }}
        </p>
      </div>
    </div>
  </footer>
</template>
