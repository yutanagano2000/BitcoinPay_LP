<script setup lang="ts">
const { t } = useI18n();

const isVisible = ref(true);
const isDismissed = ref(false);

const dismiss = () => {
  isDismissed.value = true;
  isVisible.value = false;
};

// Show banner after a slight delay for better UX
onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 1000);
});
</script>

<template>
  <Transition
    enter-active-class="transform transition-all duration-500 ease-out"
    enter-from-class="translate-y-full opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transform transition-all duration-300 ease-in"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-full opacity-0"
  >
    <div
      v-if="isVisible && !isDismissed"
      class="fixed bottom-0 left-0 right-0 z-50 safe-area-bottom"
    >
      <!-- Gradient border top -->
      <div class="h-[2px] bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400" />
      
      <!-- Banner content -->
      <div class="bg-gray-900 backdrop-blur-xl border-t border-gray-800 shadow-2xl">
        <div class="container mx-auto px-4 py-3">
          <div class="flex items-center justify-between gap-4">
            <!-- Close button -->
            <button
              @click="dismiss"
              class="flex-shrink-0 p-1.5 rounded-full hover:bg-gray-800 transition-colors"
              aria-label="Close banner"
            >
              <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <!-- App info -->
            <div class="flex items-center gap-3 flex-1 min-w-0">
              <!-- App icon -->
              <img src="/images/App_Logo_Radius.png" alt="BitcoinPay" class="flex-shrink-0 w-11 h-11 object-contain" />
              
              <!-- Text content -->
              <div class="min-w-0 flex-1">
                <h3 class="text-white font-bold text-sm truncate">BitcoinPay</h3>
                <p class="text-gray-400 text-xs truncate">{{ t('downloadBanner.tagline') }}</p>
              </div>
            </div>

            <!-- Waitlist button -->
            <button
              class="flex-shrink-0 px-5 py-2.5 bg-green-500 hover:bg-green-600 text-gray-900 font-semibold text-sm rounded-lg shadow-lg shadow-green-500/25 transition-all duration-200 hover:shadow-xl hover:shadow-green-500/30 active:scale-95 flex items-center gap-1"
            >
              {{ t('downloadBanner.cta') }}
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.safe-area-bottom {
  padding-bottom: env(safe-area-inset-bottom, 0);
}
</style>

