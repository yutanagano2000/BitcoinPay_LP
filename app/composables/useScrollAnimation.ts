import { useIntersectionObserver } from '@vueuse/core';

export function useScrollAnimation() {
  const setupScrollAnimation = (
    target: Ref<HTMLElement | null>,
    options: {
      threshold?: number;
      rootMargin?: string;
      once?: boolean;
    } = {}
  ) => {
    const { threshold = 0.1, rootMargin = '0px', once = true } = options;
    const isVisible = ref(false);

    const { stop } = useIntersectionObserver(
      target,
      ([{ isIntersecting }]) => {
        if (isIntersecting) {
          isVisible.value = true;
          if (once) {
            stop();
          }
        } else if (!once) {
          isVisible.value = false;
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    return { isVisible, stop };
  };

  return { setupScrollAnimation };
}

export function useCardTilt() {
  const tiltStyle = ref({ transform: 'rotateY(0deg) rotateX(0deg)' });
  const isHovering = ref(false);

  const handleMouseMove = (event: MouseEvent, element: HTMLElement) => {
    if (!isHovering.value) return;

    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    tiltStyle.value = {
      transform: `rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.02)`,
    };
  };

  const handleMouseEnter = () => {
    isHovering.value = true;
  };

  const handleMouseLeave = () => {
    isHovering.value = false;
    tiltStyle.value = { transform: 'rotateY(0deg) rotateX(0deg) scale(1)' };
  };

  return {
    tiltStyle,
    isHovering,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
  };
}

export function useParallax() {
  const parallaxOffset = ref(0);

  const handleScroll = () => {
    if (import.meta.client) {
      parallaxOffset.value = window.scrollY * 0.3;
    }
  };

  onMounted(() => {
    if (import.meta.client) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }
  });

  onUnmounted(() => {
    if (import.meta.client) {
      window.removeEventListener('scroll', handleScroll);
    }
  });

  return { parallaxOffset };
}
