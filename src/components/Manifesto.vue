<template>
  <section ref="sectionRef" class="relative bg-charcoal text-bone z-30">
    <!-- Parallax Background Element -->
    <div class="absolute inset-0 opacity-10 pointer-events-none">
       <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
    </div>

    <div class="container mx-auto px-6 lg:px-12 relative z-10 h-screen flex items-center justify-center">
      <div class="grid lg:grid-cols-12 gap-16 items-center w-full">
        <!-- Static Label -->
        <div class="lg:col-span-2 hidden lg:block self-start pt-4">
          <div class="flex items-center gap-3">
            <div class="w-1.5 h-1.5 bg-copper rounded-full"></div>
            <span class="font-mono text-xs tracking-widest text-concrete uppercase">Philosophy</span>
          </div>
        </div>
        
        <!-- Pinned Text Area -->
        <div class="lg:col-span-10">
          <p ref="textRef" class="manifesto-text font-serif text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight text-neutral-700">
            We don’t just build structures.<br>
            We engineer <span class="text-copper italic">permanence</span> — drafted with obsession, crafted with discipline, and built to define the skyline.
          </p>
          
          <div ref="detailsRef" class="grid md:grid-cols-2 gap-12 border-t border-white/10 pt-12 mt-24 opacity-0 translate-y-8">
            <div>
              <h3 class="font-mono text-xs tracking-widest uppercase text-concrete mb-4">Precision</h3>
              <p class="font-sans text-lg text-neutral-400 leading-relaxed">
                Obsessive attention to detail in every beam, bolt, and blueprint.
              </p>
            </div>
            <div>
              <h3 class="font-mono text-xs tracking-widest uppercase text-concrete mb-4">Discipline</h3>
              <p class="font-sans text-lg text-neutral-400 leading-relaxed">
                Adhering to strict timelines and uncompromising quality standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const sectionRef = ref(null);
const textRef = ref(null);
const detailsRef = ref(null);

onMounted(() => {
  // Wait for fonts to ensure correct splitting
  document.fonts.ready.then(() => {
    // Split text into words (or chars for finer control)
    const split = new SplitType(textRef.value, { types: 'words, chars' });
    
    gsap.from(text.words, {
      opacity: 0.1,
      duration: 1,
      stagger: 0.02,
      scrollTrigger: {
        trigger: '.manifesto-text',
        start: 'top 80%',
        end: 'bottom 50%',
        scrub: true,
      }
    });
  });
});
</script>
