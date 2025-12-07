<template>
  <section class="bg-[#0a0a0a] py-24 border-y border-white/10 relative overflow-hidden">
    <!-- Animated Background -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#FF4D00,transparent_50%)] animate-pulse"></div>
    </div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div 
          v-for="(stat, index) in stats" 
          :key="index"
          class="text-center group cursor-hover"
        >
          <div class="font-syne text-6xl md:text-7xl font-black text-[#FF4D00] mb-4 group-hover:scale-110 transition-transform duration-300">
            <span v-if="isVisible">{{ animatedValues[index] }}</span>
            <span v-else>0</span>
            <span class="text-4xl">{{ stat.suffix }}</span>
          </div>
          <div class="font-mono text-sm uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">
            {{ stat.label }}
          </div>
          <div class="h-[2px] w-0 group-hover:w-full bg-[#FF4D00] mx-auto mt-4 transition-all duration-500"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const stats = [
  { value: 487, suffix: '+', label: 'Projects Completed' },
  { value: 120, suffix: '+', label: 'Cities Covered' },
  { value: 50, suffix: 'B+', label: 'Total Value' },
  { value: 25, suffix: '+', label: 'Years Experience' }
];

const animatedValues = ref([0, 0, 0, 0]);
const isVisible = ref(false);
let observer = null;

const animateValue = (index, start, end, duration) => {
  const startTime = performance.now();
  const step = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function for smooth animation
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    animatedValues.value[index] = Math.floor(start + (end - start) * easeOutQuart);
    
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };
  requestAnimationFrame(step);
};

const startAnimation = () => {
  isVisible.value = true;
  stats.forEach((stat, index) => {
    animateValue(index, 0, stat.value, 2000 + index * 200);
  });
};

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isVisible.value) {
          startAnimation();
        }
      });
    },
    { threshold: 0.3 }
  );
  
  const section = document.querySelector('.bg-\\[\\#0a0a0a\\]');
  if (section) observer.observe(section);
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>
