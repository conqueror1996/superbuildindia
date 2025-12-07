<template>
  <section id="capabilities" class="py-32 lg:py-48 bg-bone relative z-20">
    <div class="container mx-auto px-6 lg:px-12">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
        <div class="max-w-xl">
          <div class="flex items-center gap-3 mb-6">
            <span class="w-1.5 h-1.5 bg-charcoal rounded-full"></span>
            <span class="font-mono text-xs tracking-widest text-concrete uppercase">Capabilities</span>
          </div>
          <h2 class="font-serif text-5xl lg:text-7xl font-medium tracking-tight text-charcoal leading-[1.1]">
            Our Expertise.
          </h2>
        </div>
        <div class="hidden md:block text-right">
          <span class="font-mono text-xs tracking-widest text-concrete uppercase">Strategic Services</span>
        </div>
      </div>

      <!-- Services List -->
      <div 
        ref="listRef" 
        class="flex flex-col border-t border-charcoal/20"
        @mouseenter="isListHovered = true"
        @mouseleave="isListHovered = false"
      >
        <div 
          v-for="(service, index) in services" 
          :key="index" 
          class="service-row group relative py-12 border-b border-charcoal/20 cursor-pointer transition-all duration-500 ease-apple-ease hover:px-8 hover:bg-white"
          :class="{ 'opacity-40': isListHovered && hoveredIndex !== index }"
          @mouseenter="hoveredIndex = index"
          @mouseleave="hoveredIndex = null"
        >
          <div class="flex flex-col md:flex-row md:items-baseline justify-between gap-6 z-10 relative">
            <div class="md:w-1/3">
              <span class="font-mono text-xs text-copper tracking-widest">0{{ index + 1 }}</span>
            </div>
            
            <div class="md:w-2/3 flex justify-between items-center">
              <h3 class="font-sans text-3xl lg:text-5xl font-medium text-charcoal tracking-tight transition-transform duration-500 group-hover:translate-x-4">
                {{ service.title }}
              </h3>
              
              <div class="w-12 h-12 rounded-full border border-charcoal/20 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                <ArrowRight class="w-5 h-5 text-charcoal -rotate-45" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowRight } from 'lucide-vue-next';
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const listRef = ref(null);
const isListHovered = ref(false);
const hoveredIndex = ref(null);

const services = [
  { title: 'Commercial Construction' },
  { title: 'Luxury Residential' },
  { title: 'Interior Execution' },
  { title: 'Project Management' },
  { title: 'Structural Planning' },
  { title: 'Restoration' }
];

onMounted(() => {
  const rows = listRef.value.querySelectorAll('.service-row');
  
  gsap.fromTo(rows, 
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: listRef.value,
        start: 'top 85%',
      }
    }
  );
});
</script>
