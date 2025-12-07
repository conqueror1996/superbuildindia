<template>
  <section id="monuments" class="py-32 lg:py-48 bg-bone relative z-20">
    <div class="container mx-auto px-6 lg:px-12">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
        <div class="max-w-xl">
          <div class="flex items-center gap-3 mb-6">
            <span class="w-1.5 h-1.5 bg-charcoal rounded-full"></span>
            <span class="font-mono text-xs tracking-widest text-concrete uppercase">Selected Works</span>
          </div>
          <h2 class="font-serif text-5xl lg:text-7xl font-medium tracking-tight text-charcoal leading-[1.1]">
            Our Landmarks.
          </h2>
        </div>
        
         <div class="hidden md:flex gap-4">
           <!-- Mock Filters -->
           <button class="px-4 py-2 rounded-full border border-charcoal/20 text-xs font-mono uppercase tracking-widest hover:bg-charcoal hover:text-white transition-colors">All</button>
           <button class="px-4 py-2 rounded-full border border-charcoal/20 text-xs font-mono uppercase tracking-widest hover:bg-charcoal hover:text-white transition-colors">Commercial</button>
           <button class="px-4 py-2 rounded-full border border-charcoal/20 text-xs font-mono uppercase tracking-widest hover:bg-charcoal hover:text-white transition-colors">Residential</button>
         </div>
      </div>

      <!-- Masonry Grid -->
      <div class="grid md:grid-cols-2 gap-8 lg:gap-16">
        <div 
          v-for="(project, index) in projects" 
          :key="index"
          class="project-card group cursor-pointer"
          :class="{ 'md:mt-24': index % 2 !== 0 }"
        >
          <!-- Image Container -->
          <div class="relative overflow-hidden aspect-[4/5] bg-neutral-200 mb-6">
            <div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img 
              :src="project.image" 
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            <!-- Hover Overlay Details -->
            <div class="absolute inset-0 z-20 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
               <div class="bg-white/10 backdrop-blur-md p-6 border border-white/20 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                 <div class="flex justify-between items-start mb-2">
                   <span class="font-sans text-xl font-medium">{{ project.title }}</span>
                   <ArrowRight class="w-5 h-5 -rotate-45" />
                 </div>
                 <div class="flex gap-3 text-xs font-mono uppercase tracking-widest opacity-80">
                   <span>{{ project.location }}</span>
                   <span>—</span>
                   <span>{{ project.year }}</span>
                 </div>
               </div>
            </div>
          </div>
          
          <!-- Default Labels (Visible when not hovered, or always below) -->
          <div class="flex justify-between items-baseline border-b border-charcoal/20 pb-4 group-hover:border-charcoal transition-colors duration-300">
            <div>
              <h3 class="font-serif text-2xl text-charcoal mb-1">{{ project.title }}</h3>
              <span class="font-mono text-xs text-concrete uppercase tracking-widest">{{ project.tags.join(' / ') }}</span>
            </div>
            <span class="font-mono text-xs text-charcoal">0{{ index + 1 }}</span>
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

const projects = [
  {
    title: 'The Vertex Tower',
    location: 'Mumbai',
    tags: ['Commercial', 'High-Rise'],
    year: '2024',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop'
  },
  {
    title: 'Azure Heights',
    location: 'Bangalore',
    tags: ['Residential', 'Luxury'],
    year: '2023',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2670&auto=format&fit=crop'
  },
  {
    title: 'Nexus Hub',
    location: 'Hyderabad',
    tags: ['Mixed Use', 'Retail'],
    year: '2023',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop'
  },
  {
    title: 'Serene Villa',
    location: 'Goa',
    tags: ['Private Residence'],
    year: '2022',
    image: 'https://images.unsplash.com/photo-1600596542815-2a4d04797552?q=80&w=2675&auto=format&fit=crop'
  }
];

onMounted(() => {
  // Shutter Reveal Animation
  const cards = document.querySelectorAll('.project-card');
  
  cards.forEach((card, i) => {
    // Target the image container
    const imgContainer = card.querySelector('.relative.overflow-hidden');
    
    // Set initial state
    gsap.set(imgContainer, { 
      clipPath: 'inset(100% 0 0 0)',
      scale: 1.1 
    });
    
    gsap.to(imgContainer, {
      clipPath: 'inset(0% 0 0 0)',
      scale: 1,
      duration: 1.5,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 80%',
        end: 'top 20%',
        toggleActions: 'play none none reverse'
      }
    });
    
    // Animate text elements with a delay
    const textElements = card.querySelectorAll('h3, span');
    gsap.from(textElements, {
      opacity: 0,
      y: 20,
      duration: 1,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 75%'
      }
    });
  });
});
</script>
