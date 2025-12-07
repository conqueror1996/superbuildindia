<template>
  <div v-if="loading">
    <Preloader @complete="handleLoadComplete" />
  </div>
  <div v-else class="bg-[#050505] min-h-screen text-white selection:bg-[#FF4D00] selection:text-black cursor-none md:cursor-auto overflow-x-hidden">
    <SEO />
    <NoiseOverlay />
    <CustomCursor />
    <ScrollProgress />
    <ThemeToggle />
    <Navbar />
    <Hero />
    <StatsCounter />
    <ServicesSection />
    <ProjectGallery />
    <Testimonials />
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Preloader from './components/Preloader.vue';
import SEO from './components/SEO.vue';
import NoiseOverlay from './components/NoiseOverlay.vue';
import CustomCursor from './components/CustomCursor.vue';
import ScrollProgress from './components/ScrollProgress.vue';
import ThemeToggle from './components/ThemeToggle.vue';
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import StatsCounter from './components/StatsCounter.vue';
import ServicesSection from './components/ServicesSection.vue';
import ProjectGallery from './components/ProjectGallery.vue';
import Testimonials from './components/Testimonials.vue';
import Footer from './components/Footer.vue';

const loading = ref(true);

const handleLoadComplete = () => {
  loading.value = false;
};
</script>
