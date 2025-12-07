<template>
  <header 
    class="fixed top-0 left-0 w-full z-40 transition-transform duration-500 ease-in-out" 
    :class="{ '-translate-y-full': isHidden }"
  >
    <div class="absolute inset-0 bg-bone/80 backdrop-blur-md border-b border-neutral-200/50"></div>
    
    <div class="container mx-auto px-6 lg:px-12 h-20 md:h-24 flex items-center justify-between relative z-50">
      <!-- Logo -->
      <a href="#" class="group flex flex-col items-start gap-0.5">
        <span class="font-serif text-xl md:text-2xl font-bold tracking-tight text-charcoal leading-none">SUPERBUILD</span>
        <span class="font-mono text-[9px] tracking-widest text-copper uppercase opacity-80 group-hover:opacity-100 transition-opacity">Est. 1998</span>
      </a>

      <div class="flex items-center gap-6">
         <!-- Cherry on top CTA -->
         <a href="#contact" class="hidden md:flex items-center gap-2 group">
            <span class="font-mono text-xs uppercase tracking-widest text-neutral-900 group-hover:text-amber-700 transition-colors">Start a Project</span>
            <div class="w-8 h-8 rounded-full border border-neutral-900/20 flex items-center justify-center group-hover:border-amber-700 group-hover:bg-amber-700 group-hover:text-white transition-all duration-300">
               <ArrowUpRight class="w-4 h-4" />
            </div>
         </a>

         <!-- Menu Button -->
         <button 
           @click="isOpen = !isOpen"
           class="group flex items-center gap-3 px-6 py-3 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:pr-8"
         >
           <span class="font-mono text-xs uppercase tracking-widest">{{ isOpen ? 'Close' : 'Menu' }}</span>
           <div class="flex flex-col gap-1.5 w-5 items-end">
             <span class="w-full h-px bg-white transition-all duration-300" :class="{ 'rotate-45 translate-y-1': isOpen }"></span>
             <span class="w-3/4 h-px bg-white transition-all duration-300 group-hover:w-full" :class="{ '-rotate-45 -translate-y-0.5 w-full': isOpen }"></span>
           </div>
         </button>
      </div>
    </div>

    <!-- Full Screen Menu -->
    <transition
      enter-active-class="transition duration-500 ease-apple-ease"
      enter-from-class="opacity-0 translate-y-[-20px]"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-[-20px]"
    >
      <div v-if="isOpen" class="fixed inset-0 top-0 left-0 w-full h-screen bg-bone/90 backdrop-blur-xl z-[35] flex flex-col">
        <div class="container mx-auto px-6 lg:px-12 py-12 flex-grow flex flex-col justify-center relative z-20">
          <nav class="flex flex-col gap-6 md:gap-8">
            <a v-for="(item, i) in ['Home', 'Projects', 'Services', 'Studio', 'Contact']" 
               :key="item" 
               href="#" 
               class="font-serif text-4xl md:text-6xl text-charcoal hover:text-copper transition-colors duration-300 w-max"
               @click="isOpen = false"
            >
              <span class="font-mono text-xs text-concrete mr-4 align-top opacity-50">0{{ i + 1 }}</span>
              {{ item }}
            </a>
          </nav>
        </div>
        
        <div class="container mx-auto px-6 lg:px-12 py-8 border-t border-charcoal/10 flex justify-between items-center text-sm text-concrete font-mono uppercase tracking-widest relative z-20">
          <span>Mumbai, IN</span>
          <span>© 2024</span>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { ArrowUpRight } from 'lucide-vue-next';

const isOpen = ref(false);
const isHidden = ref(false);
let lastScrollY = 0;

const handleScroll = () => {
  const currentScrollY = window.scrollY;
  
  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    // Scrolling down & past header
    isHidden.value = true;
    isOpen.value = false; // Close menu on scroll down
  } else {
    // Scrolling up
    isHidden.value = false;
  }
  
  lastScrollY = currentScrollY;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
