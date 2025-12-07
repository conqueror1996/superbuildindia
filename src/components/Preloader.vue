<template>
  <div class="fixed inset-0 bg-black z-[9999] flex flex-col justify-between p-8 text-[#FF4D00] font-mono select-none">
    <div class="flex justify-between uppercase text-xs tracking-widest opacity-50">
      <span>System_Boot_Sequence</span>
      <span>ID: {{ hex }}</span>
    </div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
      <div class="text-[15vw] font-black leading-none opacity-20 blur-sm animate-pulse">
        {{ progress }}%
      </div>
      <div class="text-4xl font-bold mt-[-2vw] relative z-10 mix-blend-overlay text-white">
        LOADING REALITY
      </div>
    </div>
    <div class="w-full bg-[#111] h-[2px]">
      <div 
        class="h-full bg-[#FF4D00] shadow-[0_0_15px_#FF4D00]"
        :style="{ width: `${progress}%`, transition: 'width 0.1s linear' }"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const emit = defineEmits(['complete']);

const progress = ref(0);
const hex = ref('000000');
let interval = null;

onMounted(() => {
  interval = setInterval(() => {
    if (progress.value >= 100) {
      clearInterval(interval);
      setTimeout(() => emit('complete'), 800);
      return;
    }
    hex.value = Math.floor(Math.random() * 16777215).toString(16);
    progress.value += Math.floor(Math.random() * 5) + 1;
  }, 100);
});

onUnmounted(() => {
  if (interval) clearInterval(interval);
});
</script>
