<template>
  <section id="genesis" class="relative min-h-screen bg-[#050505] text-white flex flex-col justify-center pt-20 overflow-hidden">
    <!-- Animated Grid Background -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] opacity-10 perspective-grid"></div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="flex items-center gap-4 mb-8 fade-in-up">
        <div class="w-2 h-2 bg-[#FF4D00] animate-ping"></div>
        <span class="font-mono text-[#FF4D00] text-xs tracking-widest">SYSTEM_ONLINE // V.2.0.25</span>
      </div>
      
      <div class="relative mb-12">
        <h1 class="font-syne font-black text-[13vw] leading-[0.8] tracking-tighter mix-blend-difference cursor-none group">
          <span class="block hover:text-[#FF4D00] transition-colors duration-300">WE BUILD</span>
          <span class="block text-transparent stroke-text hover:text-white transition-all duration-300 glitch-text" data-text="GODS">GODS</span>
        </h1>
      </div>

      <div class="flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-8 fade-in-up delay-200">
        <p class="font-mono text-gray-400 max-w-md text-sm leading-relaxed">
          We don't follow blueprints; we write the code for reality. 
          SuperBuild is the apex predator of the infrastructure world.
        </p>
        <div class="flex gap-4 mt-8 md:mt-0">
          <MagneticButton variant="primary" custom-class="skew-x-[-10deg]">
            <span class="skew-x-[10deg] inline-block">INITIATE PROJECT</span>
          </MagneticButton>
          <MagneticButton variant="secondary" custom-class="skew-x-[-10deg]">
            <span class="skew-x-[10deg] inline-block">OBSERVE PROTOCOL</span>
          </MagneticButton>
        </div>
      </div>
    </div>
    
    <!-- Floating Geometric Elements -->
    <Triangle class="absolute top-1/4 right-[10%] text-[#FF4D00] w-32 h-32 opacity-10 animate-float-slow pointer-events-none" />
    <Circle class="absolute bottom-1/4 left-[5%] text-white w-24 h-24 opacity-5 animate-float-delayed pointer-events-none" />
  </section>
</template>

<script setup>
import { Triangle, Circle } from 'lucide-vue-next';
import MagneticButton from './MagneticButton.vue';
</script>
