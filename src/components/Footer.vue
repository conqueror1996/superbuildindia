<template>
  <footer id="contact" class="bg-[#FF4D00] text-black pt-32 pb-12 px-6 relative overflow-hidden">
    <!-- Giant Text Background -->
    <div class="absolute top-0 left-0 w-full overflow-hidden opacity-10 pointer-events-none select-none">
      <span class="font-syne text-[20vw] font-black leading-none whitespace-nowrap opacity-20">CONTACT</span>
    </div>

    <div class="container mx-auto relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-20 border-b border-black pb-20">
        <div>
          <h2 class="font-syne text-6xl md:text-8xl font-black mb-8 leading-[0.8] hover:skew-x-2 transition-transform duration-300 origin-left">
            LET'S PLAY <br/> GOD.
          </h2>
          <p class="font-mono text-lg font-bold max-w-md border-l-4 border-black pl-6 mb-8">
            We are currently accepting tenders for megastructures exceeding $50M in value.
          </p>
          
          <!-- Contact Info -->
          <div class="flex flex-col gap-4 font-mono text-sm font-bold">
            <a href="#" class="flex items-center gap-4 hover:translate-x-4 transition-transform cursor-hover group">
              <Globe class="group-hover:rotate-180 transition-transform duration-700" /> INITIATE_TENDER
            </a>
            <a href="#" class="flex items-center gap-4 hover:translate-x-4 transition-transform cursor-hover group">
              <Box class="group-hover:scale-110 transition-transform" /> VISIT_HQ_MUMBAI
            </a>
          </div>
        </div>
        
        <!-- Contact Form -->
        <ContactForm />
      </div>
      
      <div class="flex flex-col md:flex-row justify-between items-end pt-8 font-mono text-xs font-bold uppercase tracking-widest gap-4">
        <span>© 2025 SUPERBUILD INC.</span>
        <span class="flex items-center gap-2">
          <span class="w-2 h-2 bg-black rounded-full animate-pulse"></span>
          SYSTEM_STATUS: ONLINE
        </span>
        <button 
          @click="scrollToTop"
          class="flex items-center gap-2 hover:underline cursor-hover"
        >
          RETURN_TO_GENESIS <ChevronUp :size="14" />
        </button>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Globe, Box, ChevronUp } from 'lucide-vue-next';
import ContactForm from './ContactForm.vue';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>
