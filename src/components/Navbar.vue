<template>
  <nav class="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-start mix-blend-difference text-white">
    <div class="flex flex-col group cursor-pointer cursor-hover">
      <span class="font-syne text-3xl font-bold leading-none group-hover:text-[#FF4D00] transition-colors duration-500">SUPERBUILD</span>
      <span class="font-mono text-[9px] tracking-[0.3em] uppercase opacity-60 group-hover:opacity-100">The God Particle</span>
    </div>

    <button 
      @click="toggleMenu" 
      class="flex items-center gap-2 font-mono text-xs hover:text-[#FF4D00] transition-colors cursor-hover group"
    >
      <span class="group-hover:tracking-widest transition-all">[ MENU ]</span>
    </button>

    <!-- Full Screen Menu -->
    <div :class="`fixed inset-0 bg-[#050505] z-[40] transition-transform duration-700 ease-expo ${isOpen ? 'translate-y-0' : '-translate-y-full'}`">
      <div class="h-full flex flex-col justify-center items-center relative gap-4">
        <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
        <button @click="toggleMenu" class="absolute top-8 right-8 text-[#FF4D00] cursor-hover hover:rotate-90 transition-transform duration-500">
          <X :size="40" />
        </button>
        <a 
          v-for="(item, i) in menuItems" 
          :key="i" 
          :href="`#${item.toLowerCase()}`" 
          @click="toggleMenu" 
          class="font-syne text-6xl md:text-8xl font-black text-transparent stroke-text hover:text-[#FF4D00] transition-all duration-300 hover:tracking-widest cursor-hover relative group"
        >
          {{ item }}
          <span class="absolute -left-12 top-1/2 -translate-y-1/2 text-xs font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity">
            0{{ i + 1 }}
          </span>
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { X } from 'lucide-vue-next';

const isOpen = ref(false);
const menuItems = ['GENESIS', 'CAPABILITIES', 'MONUMENTS', 'CONTACT'];

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>
