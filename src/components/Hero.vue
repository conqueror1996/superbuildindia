<template>
  <section id="genesis" class="relative min-h-screen bg-white flex flex-col pt-32 lg:pt-48 overflow-hidden">
    <div class="container mx-auto px-6 lg:px-12 relative z-10 flex-grow flex flex-col">
      <!-- Minimal Header -->
      <div class="flex justify-between items-start mb-24 fade-in-element">
        <span class="font-mono text-xs tracking-widest text-concrete uppercase">Est. 1998</span>
        <span class="font-mono text-xs tracking-widest text-concrete uppercase text-right">Mumbai, India</span>
      </div>

      <!-- Main Copy -->
      <div class="max-w-4xl mx-auto text-center relative z-20">
        <h1 class="hero-title font-sans font-medium text-[clamp(3.5rem,7vw,7rem)] leading-[1.0] tracking-tight text-charcoal mb-8">
          Meet SuperBuild —<br>Engineering India’s<br>
          <span class="font-serif italic font-light text-copper">Future Landmarks</span>
        </h1>
        <p class="hero-desc font-sans text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto leading-relaxed translate-y-4">
          A 26-year legacy of precision, craftsmanship & architectural excellence.
        </p>
      </div>

      <!-- Dramatic Parallax Image -->
      <div class="relative w-full mt-24 flex-grow h-[60vh] overflow-hidden rounded-t-[2rem] image-reveal">
        <div class="parallax-bg absolute inset-0 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop');"></div>
        <div class="absolute inset-0 bg-black/10"></div>
      </div>

      <!-- Animated Scroll Indicator -->
      <div class="absolute bottom-8 left-6 lg:left-12 z-30 flex flex-col items-center justify-end gap-3 pointer-events-none fade-in-element">
         <span class="font-mono text-[9px] uppercase tracking-widest text-neutral-400 rotate-180 writing-vertical-rl">Scroll</span>
         <div class="w-px h-16 bg-neutral-200 overflow-hidden relative">
            <div class="absolute top-0 left-0 w-full h-1/2 bg-neutral-900 animate-scroll-down"></div>
         </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { ArrowRight } from 'lucide-vue-next';
import gsap from 'gsap';
import SplitType from 'split-type';

onMounted(() => {
  document.fonts.ready.then(() => {
    try {
      // Make elements visible for animation
      gsap.set(['.hero-title', '.hero-desc', '.image-reveal'], { autoAlpha: 1 });

      const text = new SplitType('.hero-title', { types: 'lines, words' });
      
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.to('.fade-in-element', { opacity: 1, duration: 1 })
        .from(text.words, {
          y: 40,
          opacity: 0,
          duration: 1.2,
          stagger: 0.04,
          ease: 'power3.out'
        }, '-=0.5')
        .from('.hero-desc', { opacity: 0, y: 20, duration: 1 }, '-=0.8')
        .from('.image-reveal', { opacity: 0, y: 100, duration: 1.5, ease: 'expo.out' }, '-=0.8');

      // Parallax
      gsap.to('.parallax-bg', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: '.image-reveal',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    } catch (e) {
      // Fallback if JS fails
      gsap.set(['.hero-title', '.hero-desc', '.image-reveal'], { autoAlpha: 1 });
      console.error('Animation error', e);
    }
  });
});
</script>

<style>
/* Essential for the split text reveal to work cleanly */
.hero-title .line {
  overflow: hidden;
  padding-bottom: 0.2em; /* Prevent descender clipping */
  margin-bottom: -0.2em;
}
</style>
