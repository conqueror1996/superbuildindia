<template>
  <div class="bg-white min-h-screen text-neutral-900 selection:bg-neutral-900 selection:text-white overflow-x-hidden">
    <div class="fixed inset-0 pointer-events-none z-[50] opacity-[0.03] mix-blend-overlay" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E');"></div>
    <GridOverlay />
    <Preloader />
    <CustomCursor />
    <SEO />
    <Navbar />
    <Hero />
    <Marquee />
    <Manifesto />
    <ProjectGallery />
    <ServicesSection />
    <Testimonials />
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import SEO from './components/SEO.vue';
import CustomCursor from './components/CustomCursor.vue';
import Preloader from './components/Preloader.vue';
import GridOverlay from './components/GridOverlay.vue';
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import Marquee from './components/Marquee.vue';
import Manifesto from './components/Manifesto.vue';
import ServicesSection from './components/ServicesSection.vue';
import ProjectGallery from './components/ProjectGallery.vue';
import Testimonials from './components/Testimonials.vue';
import Footer from './components/Footer.vue';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  // Premium, Responsive Smooth Scroll
  const lenis = new Lenis({
    duration: 0.7, // Reduced from 1.2 for snappier feel
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  
  // Integrate Lenis with GSAP ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update);
  
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  
  gsap.ticker.lagSmoothing(0);
});
</script>

<style>
html.lenis {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-scrolling iframe {
  pointer-events: none;
}
</style>
