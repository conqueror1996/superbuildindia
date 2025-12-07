<template>
  <section id="monuments" class="py-32 bg-[#050505] text-white overflow-hidden">
    <Marquee text="BUILDING THE IMPOSSIBLE" />
    <Marquee text="DEFINING THE SKYLINE" direction="right" />
    
    <div class="container mx-auto px-6 mt-40">
      <div class="flex flex-col md:flex-row gap-8 h-auto md:h-[600px]">
        <div 
          v-for="(proj, i) in projects" 
          :key="i" 
          class="flex-1 group relative h-[400px] md:h-full border border-white/10 bg-[#0a0a0a] overflow-hidden hover:flex-[2] transition-all duration-700 ease-in-out cursor-hover"
        >
          <!-- Real Background Image -->
          <img 
            :src="proj.img" 
            :alt="proj.name"
            class="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
            loading="lazy"
          />
          
          <!-- Technical Overlay -->
          <div class="absolute top-4 left-4 font-mono text-[10px] text-[#FF4D00] z-20 opacity-70 group-hover:opacity-100 bg-black/50 px-2 py-1">
            COORD: {{ Math.random().toFixed(4) }}N, {{ Math.random().toFixed(4) }}E
          </div>
          
          <!-- Year Badge -->
          <div class="absolute top-4 right-4 font-mono text-xs text-white z-20 bg-[#FF4D00] px-3 py-1 font-bold">
            {{ proj.year }}
          </div>
          
          <!-- Image Overlay with Gradient -->
          <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black z-10"></div>
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FF4D00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

          <!-- Content -->
          <div class="absolute bottom-0 left-0 w-full p-8 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <div class="overflow-hidden mb-2">
              <h3 class="font-syne text-4xl font-bold leading-none transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100">
                {{ proj.name }}
              </h3>
            </div>
            <div class="flex justify-between items-end border-t border-white/20 pt-4 opacity-0 group-hover:opacity-100 transition-opacity delay-200">
              <div>
                <span class="block font-mono text-xs text-gray-400">{{ proj.loc }}</span>
                <span class="block font-mono text-xl text-[#FF4D00] font-bold">{{ proj.val }}</span>
              </div>
              <div class="bg-white text-black p-3 hover:bg-[#FF4D00] transition-colors">
                <ArrowRight :size="20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Box, ArrowRight } from 'lucide-vue-next';
import Marquee from './Marquee.vue';
import { PROJECTS } from '../data.js';

const projects = PROJECTS;
</script>
