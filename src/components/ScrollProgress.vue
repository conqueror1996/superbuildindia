<template>
  <div class="fixed right-6 top-1/2 -translate-y-1/2 h-48 w-[1px] bg-white/10 z-40 hidden md:flex flex-col justify-between items-center mix-blend-difference">
    <div class="absolute top-0 -mt-6 font-mono text-[9px] text-[#FF4D00]">{{ Math.round(scroll * 100) }}%</div>
    <div 
      class="w-[2px] bg-[#FF4D00] transition-all duration-100 ease-linear shadow-[0_0_10px_#FF4D00]"
      :style="{ height: `${scroll * 100}%` }"
    ></div>
    <div class="absolute bottom-0 -mb-6 font-mono text-[9px] text-gray-500">END</div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const scroll = ref(0);

const handleScroll = () => {
  const totalScroll = document.documentElement.scrollTop;
  const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  scroll.value = totalScroll / windowHeight;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
