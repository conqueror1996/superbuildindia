<template>
  <section id="capabilities" class="bg-[#080808] text-white py-32 border-t border-white/10 relative overflow-hidden">
    <!-- Background Image Reveal -->
    <div class="absolute inset-0 z-0 opacity-20 transition-all duration-700 ease-out pointer-events-none">
      <div 
        v-if="hoveredImage"
        class="absolute inset-0 bg-cover bg-center grayscale scale-105 transition-transform duration-[2s]"
        :style="{ backgroundImage: `url(${hoveredImage})` }"
      ></div>
      <div class="absolute inset-0 bg-[#080808]/80"></div>
    </div>

    <div class="absolute right-0 top-0 h-full w-[1px] bg-white/10"></div>
    <div class="absolute left-12 top-0 h-full w-[1px] bg-white/10 hidden md:block"></div>
    
    <div class="container mx-auto px-6 pl-0 md:pl-24 relative z-10">
      <div class="mb-20">
        <span class="font-mono text-[#FF4D00] text-sm block mb-4">/// CAPABILITIES_DB</span>
        <h2 class="font-syne text-6xl md:text-8xl font-bold uppercase">Engineering <br/> Supremacy</h2>
      </div>

      <div class="grid grid-cols-1 border-t border-white/10">
        <div 
          v-for="(service, index) in services" 
          :key="index" 
          class="group grid grid-cols-1 md:grid-cols-12 gap-8 py-16 border-b border-white/10 hover:bg-[#FF4D00] transition-colors duration-300 cursor-hover"
          @mouseenter="hoveredImage = service.img"
          @mouseleave="hoveredImage = null"
        >
          <div class="md:col-span-2 font-mono text-4xl text-gray-600 group-hover:text-black transition-colors">
            0{{ index + 1 }}
          </div>
          <div class="md:col-span-6">
            <h3 class="font-syne text-4xl md:text-5xl font-bold mb-4 group-hover:text-black transition-colors">
              {{ service.title }}
            </h3>
            <p class="font-mono text-gray-400 text-sm group-hover:text-black/80 max-w-md transition-colors">
              {{ service.desc }}
            </p>
          </div>
          <div class="md:col-span-4 flex flex-col justify-between items-end">
            <ArrowUpRight class="w-12 h-12 text-gray-600 group-hover:text-black group-hover:rotate-45 transition-transform duration-300" />
            <div class="flex gap-2 mt-8 md:mt-0">
              <span 
                v-for="(spec, i) in service.specs" 
                :key="i" 
                class="font-mono text-[9px] border border-gray-700 group-hover:border-black px-2 py-1 uppercase group-hover:text-black transition-colors"
              >
                {{ spec }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { ArrowUpRight } from 'lucide-vue-next';
import { SERVICES } from '../data.js';

const services = SERVICES;
const hoveredImage = ref(null);
</script>
