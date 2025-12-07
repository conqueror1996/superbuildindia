<template>
  <section class="py-32 lg:py-48 bg-bone overflow-hidden">
    <div class="container mx-auto px-6 lg:px-12 mb-24">
       <div class="flex items-center gap-3 mb-6">
          <div class="w-1.5 h-1.5 bg-charcoal rounded-full"></div>
          <span class="font-mono text-xs tracking-widest text-concrete uppercase">Client Stories</span>
       </div>
       <h2 class="font-serif text-5xl lg:text-7xl font-medium tracking-tight text-charcoal leading-[1.1]">
         Echoes of<br><span class="italic text-copper">Excellence.</span>
       </h2>
    </div>

    <!-- Horizontal Scroll Container -->
    <div class="flex overflow-x-auto gap-8 px-6 lg:px-12 pb-12 hide-scrollbar snap-x snap-mandatory">
      <div 
        v-for="(t, i) in testimonials" 
        :key="i"
        class="min-w-[85vw] md:min-w-[600px] snap-center bg-charcoal text-bone p-12 md:p-16 rounded-[2rem] flex flex-col md:flex-row gap-12 items-center relative overflow-hidden group"
      >
        <!-- Background Grain -->
        <div class="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E');"></div>

        <!-- Large Portrait -->
        <div class="w-32 h-32 md:w-48 md:h-48 flex-shrink-0 rounded-full overflow-hidden border-2 border-copper/20">
          <img :src="t.image" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
        </div>

        <!-- Content -->
        <div class="flex-grow text-center md:text-left relative z-10">
          <div class="text-copper text-4xl mb-6 font-serif">"</div>
          <p class="font-serif text-2xl md:text-3xl leading-relaxed mb-8 text-neutral-200">
             {{ t.quote }}
          </p>
          <div>
            <h4 class="font-sans font-bold text-lg text-white mb-1">{{ t.author }}</h4>
            <p class="font-mono text-xs text-concrete uppercase tracking-widest">{{ t.role }}</p>
          </div>
        </div>
      </div>
      
      <!-- Spacer for end of scroll -->
      <div class="w-12 flex-shrink-0"></div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    quote: "SuperBuild didn't simply construct our headquarters; they interpreted our corporate soul into glass and steel. The precision is unmatched in the industry.",
    author: "Rajesh Malhotra",
    role: "CEO, Malhotra Group",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    quote: "Deadlines were impossible, the terrain was hostile, yet they delivered a masterpiece. Their engineering capability is simply world-class.",
    author: "Priya Desai",
    role: "Director, Azure Estates",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop"
  },
  {
    quote: "A rare combination of aesthetic sensibility and brutal engineering efficiency. They built our legacy.",
    author: "Vikram Singh",
    role: "Founder, Singh & Sons",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop"
  }
];
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
