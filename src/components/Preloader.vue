<template>
  <div 
    class="preloader fixed inset-0 z-[10000] flex items-center justify-center bg-neutral-900 text-white overflow-hidden"
    v-if="!isComplete"
  >
    <div class="flex flex-col items-center gap-4">
      <div class="overflow-hidden">
        <h1 class="preloader-text font-sans text-9xl font-bold tracking-tighter translate-y-full">
          SUPERBUILD
        </h1>
      </div>
      <div class="w-64 h-px bg-neutral-800 relative overflow-hidden">
        <div class="preloader-bar absolute top-0 left-0 h-full bg-white w-full -translate-x-full"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';

const isComplete = ref(false);

onMounted(() => {
  const tl = gsap.timeline({
    onComplete: () => {
      // Don't remove immediately to allow exit animation
      gsap.to('.preloader', {
        yPercent: -100,
        duration: 0.8,
        ease: 'power4.inOut',
        onComplete: () => {
          isComplete.value = true;
        }
      });
    }
  });

  tl.to('.preloader-text', {
    y: 0,
    duration: 1,
    ease: 'power4.out',
  })
  .to('.preloader-bar', {
    x: 0,
    duration: 1.5,
    ease: 'power2.inOut',
  }, '-=0.5')
  .to('.preloader-text', {
    y: '-100%',
    duration: 0.8,
    ease: 'power3.in',
    delay: 0.2
  });
});
</script>
