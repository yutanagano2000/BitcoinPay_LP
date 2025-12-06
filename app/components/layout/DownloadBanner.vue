<script setup lang="ts">
const { t } = useI18n();

const isDismissed = ref(false);
const isUserActive = ref(true);
const showBannerContent = ref(false);
let inactivityTimeout: ReturnType<typeof setTimeout> | null = null;

const dismiss = () => {
  isDismissed.value = true;
};

const scrollToWaitlist = () => {
  const element = document.querySelector('#waitlist');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const handleUserActivity = () => {
  isUserActive.value = true;
  
  if (inactivityTimeout) {
    clearTimeout(inactivityTimeout);
  }
  
  inactivityTimeout = setTimeout(() => {
    isUserActive.value = false;
  }, 1500);
};

onMounted(() => {
  // 初期状態では非表示、1.5秒後に表示
  inactivityTimeout = setTimeout(() => {
    isUserActive.value = false;
  }, 1500);
  
  // 各種ユーザー操作を監視
  window.addEventListener('scroll', handleUserActivity, { passive: true });
  window.addEventListener('mousedown', handleUserActivity, { passive: true });
  window.addEventListener('touchstart', handleUserActivity, { passive: true });
  window.addEventListener('keydown', handleUserActivity, { passive: true });
  window.addEventListener('mousemove', handleUserActivity, { passive: true });

  // バナー本体（中身）はアイドルタイムに遅延描画し、高さだけ先に確保する
  const show = () => {
    showBannerContent.value = true;
  };
  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    (window as any).requestIdleCallback(show);
  } else {
    setTimeout(show, 800);
  }
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleUserActivity);
  window.removeEventListener('mousedown', handleUserActivity);
  window.removeEventListener('touchstart', handleUserActivity);
  window.removeEventListener('keydown', handleUserActivity);
  window.removeEventListener('mousemove', handleUserActivity);
  if (inactivityTimeout) {
    clearTimeout(inactivityTimeout);
  }
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
      v-if="!isDismissed && !isUserActive"
      class="fixed bottom-0 left-0 right-0 z-50 bg-gray-900"
    >
      <!-- Banner content -->
      <div class="bg-gray-900 backdrop-blur-xl border-t border-gray-800 shadow-2xl">
        <!-- 高さは常に確保しつつ、中身は後から描画 -->
        <div
          class="container mx-auto px-4 banner-padding safe-area-padding flex items-center"
          style="min-height: calc(46px + env(safe-area-inset-bottom, 0));"
        >
          <div v-if="showBannerContent" class="flex items-center justify-between gap-4 w-full">
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
              <img src="/images/App_Logo_Radius.png" alt="BitcoinPay" class="flex-shrink-0 w-8 h-8 object-contain" />
              
              <!-- Text content -->
              <div class="min-w-0 flex-1">
                <h3 class="text-white font-bold text-sm truncate">BitcoinPay</h3>
                <p class="text-gray-400 text-xs truncate">{{ t('downloadBanner.tagline') }}</p>
              </div>
            </div>

            <!-- Waitlist button -->
            <button
              @click="scrollToWaitlist"
              class="flex-shrink-0 px-5 py-2.5 bg-green-500 hover:bg-green-600 text-gray-900 font-semibold text-sm rounded-lg shadow-lg shadow-green-500/25 transition-all duration-200 hover:shadow-xl hover:shadow-green-500/30 active:scale-95 flex items-center gap-1"
            >
              {{ t('downloadBanner.cta') }}
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
          <!-- プレースホルダー（スペースのみ確保） -->
          <div
            v-else
            class="w-full"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.banner-padding {
  padding-top: calc(0.516375rem + env(safe-area-inset-bottom, 0) / 2);
  padding-bottom: calc(0.516375rem + env(safe-area-inset-bottom, 0) / 2);
}

.safe-area-padding {
  /* Safe area is handled in banner-padding */
}
</style>

