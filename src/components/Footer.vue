<template>
  <footer class="bg-charcoal text-bone pt-32 lg:pt-48 pb-12 overflow-hidden relative">
    <div class="container mx-auto px-6 lg:px-12 relative z-10">
      
      <!-- Top CTA -->
      <div class="flex flex-col items-center text-center border-b border-white/10 pb-32 mb-24">
        <span class="font-mono text-xs tracking-widest text-concrete uppercase mb-8">Got a project?</span>
        
        <h2 class="font-serif italic text-[clamp(4rem,15vw,12rem)] font-medium tracking-tight leading-[0.85] mb-12 text-bone">
          LET'S<br/>BUILD
        </h2>
        
        <button class="magnetic-btn w-32 h-32 md:w-48 md:h-48 rounded-full bg-bone text-charcoal flex items-center justify-center mb-24 transition-transform duration-300 hover:scale-110">
          <span class="font-mono text-xs md:text-sm tracking-widest uppercase font-bold">Contact Us</span>
        </button>

        <div class="lg:col-span-2 flex flex-col justify-between">
          <p class="font-sans text-neutral-500 max-w-sm">
            SuperBuild Construction Pvt. Ltd.<br>
            Building the foundations for a better tomorrow since 1998.
          </p>
        </div>
      </div>

      <div class="mt-24 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-neutral-600">
        <p class="font-sans">© 2024 SuperBuild. All rights reserved.</p>
        <span class="font-mono text-[10px] uppercase tracking-widest">Mumbai, India</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { MapPin, Phone, Mail } from 'lucide-vue-next';
</script>
