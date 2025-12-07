<template>
  <div class="py-24 bg-charcoal border-y border-white/5 relative z-20">
    <div class="container mx-auto px-6 lg:px-12">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
        <div 
          v-for="(item, i) in items" 
          :key="i"
          class="group bg-charcoal p-8 lg:p-12 min-h-[300px] flex flex-col justify-between hover:bg-neutral-900 transition-colors duration-500 cursor-pointer border-r border-b border-white/5"
        >
          <!-- Icon Top -->
          <div class="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-bone group-hover:bg-copper group-hover:border-copper group-hover:text-white transition-all duration-300">
            <component :is="item.icon" class="w-5 h-5" />
          </div>
          
          <!-- Content Bottom -->
          <div>
            <h3 class="font-serif text-2xl text-bone mb-4">{{ item.title }}</h3>
            <p class="font-sans text-sm text-neutral-500 leading-relaxed opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75">
              {{ item.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Ruler, Anchor,  Zap, Layers } from 'lucide-vue-next';

const items = [
  { 
    title: 'Construction', 
    desc: 'High-grade execution for commercial and residential landmarks.',
    icon: Layers
  },
  { 
    title: 'Architecture', 
    desc: 'Design-first approach integrating aesthetics with structural integrity.',
    icon: Ruler
  },
  { 
    title: 'Engineering', 
    desc: 'Complex structural solutions for challenging environments.',
    icon: Zap
  },
  { 
    title: 'Development', 
    desc: 'End-to-end project lifecycle management from land to handover.',
    icon: Anchor
  }
];
</script>
<style scoped>
.text-stroke-white {
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
}

.animate-marquee {
  animation: marquee 30s linear infinite;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}
</style>
