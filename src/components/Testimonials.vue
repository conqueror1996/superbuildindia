<template>
  <section class="bg-[#050505] py-32 relative overflow-hidden border-t border-white/10">
    <!-- Background Elements -->
    <div class="absolute top-1/2 left-0 w-96 h-96 bg-[#FF4D00]/5 rounded-full blur-3xl -translate-y-1/2"></div>
    <div class="absolute top-1/2 right-0 w-96 h-96 bg-[#FF4D00]/5 rounded-full blur-3xl -translate-y-1/2"></div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-16">
        <span class="font-mono text-[#FF4D00] text-sm block mb-4">/// CLIENT_TESTIMONIALS</span>
        <h2 class="font-syne text-5xl md:text-7xl font-bold uppercase text-white">
          What Gods <br class="md:hidden"/> Say About Us
        </h2>
      </div>
      
      <div class="relative max-w-5xl mx-auto">
        <!-- Testimonial Card -->
        <div class="bg-[#0a0a0a] border border-white/10 p-8 md:p-12 relative overflow-hidden group hover:border-[#FF4D00]/50 transition-colors duration-500">
          <div class="absolute top-0 right-0 text-[20vw] font-syne font-black text-white/5 leading-none select-none pointer-events-none">"</div>
          
          <div class="relative z-10">
            <div class="flex items-center gap-4 mb-8">
              <div class="w-16 h-16 bg-gradient-to-br from-[#FF4D00] to-[#FF8800] rounded-full flex items-center justify-center font-syne font-bold text-2xl text-black">
                {{ testimonials[currentIndex].name.charAt(0) }}
              </div>
              <div>
                <h4 class="font-syne text-xl font-bold text-white">{{ testimonials[currentIndex].name }}</h4>
                <p class="font-mono text-xs text-gray-400 uppercase">{{ testimonials[currentIndex].position }}</p>
                <p class="font-mono text-xs text-[#FF4D00]">{{ testimonials[currentIndex].company }}</p>
              </div>
            </div>
            
            <blockquote class="font-mono text-lg text-gray-300 leading-relaxed mb-8 italic">
              "{{ testimonials[currentIndex].quote }}"
            </blockquote>
            
            <div class="flex items-center gap-2 mb-4">
              <div v-for="n in 5" :key="n" class="text-[#FF4D00]">★</div>
            </div>
            
            <div class="font-mono text-xs text-gray-500 uppercase">
              {{ testimonials[currentIndex].project }}
            </div>
          </div>
        </div>
        
        <!-- Navigation -->
        <div class="flex justify-center items-center gap-8 mt-12">
          <button 
            @click="prevTestimonial"
            class="w-12 h-12 border border-white/20 flex items-center justify-center hover:border-[#FF4D00] hover:bg-[#FF4D00] transition-all duration-300 group"
          >
            <span class="font-mono text-white group-hover:text-black">‹</span>
          </button>
          
          <div class="flex gap-2">
            <button
              v-for="(_, index) in testimonials"
              :key="index"
              @click="currentIndex = index"
              :class="[
                'h-2 transition-all duration-300',
                currentIndex === index ? 'w-12 bg-[#FF4D00]' : 'w-2 bg-white/20 hover:bg-white/40'
              ]"
            ></button>
          </div>
          
          <button 
            @click="nextTestimonial"
            class="w-12 h-12 border border-white/20 flex items-center justify-center hover:border-[#FF4D00] hover:bg-[#FF4D00] transition-all duration-300 group"
          >
            <span class="font-mono text-white group-hover:text-black">›</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    position: 'CEO & Founder',
    company: 'TITAN REAL ESTATE',
    quote: 'SuperBuild transformed our vision into reality. The TITANIC HQ stands as a testament to their engineering supremacy. Unmatched precision and execution.',
    project: 'PROJECT: TITANIC HQ | MUMBAI',
  },
  {
    name: 'Priya Sharma',
    position: 'Director of Infrastructure',
    company: 'AERO DEVELOPMENTS',
    quote: 'Working with SuperBuild was like watching gods create. Their attention to detail and ability to handle massive scale is simply extraordinary.',
    project: 'PROJECT: AERO CITY | DELHI',
  },
  {
    name: 'Vikram Mehta',
    position: 'Chief Architect',
    company: 'SKYLINE INNOVATIONS',
    quote: 'They don\'t just build structures; they engineer the future. THE SPIRE project showcases their mastery over vertical architecture.',
    project: 'PROJECT: THE SPIRE | BANGALORE',
  }
];

const currentIndex = ref(0);
let autoPlayInterval = null;

const nextTestimonial = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length;
};

const prevTestimonial = () => {
  currentIndex.value = (currentIndex.value - 1 + testimonials.length) % testimonials.length;
};

onMounted(() => {
  // Auto-play every 5 seconds
  autoPlayInterval = setInterval(() => {
    nextTestimonial();
  }, 5000);
});

onUnmounted(() => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval);
  }
});
</script>
