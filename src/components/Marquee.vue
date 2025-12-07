<template>
  <div class="relative flex overflow-x-hidden py-4 bg-[#FF4D00] text-black border-y-2 border-black transform -skew-y-1">
    <div :class="`animate-marquee whitespace-nowrap flex gap-8 ${direction === 'right' ? 'direction-reverse' : ''}`">
      <span v-for="i in 10" :key="i" class="font-mono text-xl font-black tracking-widest uppercase flex items-center gap-4">
        {{ text }} <Hexagon :size="16" fill="black" />
      </span>
    </div>
    <div :class="`absolute top-0 animate-marquee2 whitespace-nowrap flex gap-8 ${direction === 'right' ? 'direction-reverse' : ''} py-4`">
      <span v-for="i in 10" :key="i" class="font-mono text-xl font-black tracking-widest uppercase flex items-center gap-4">
        {{ text }} <Hexagon :size="16" fill="black" />
      </span>
    </div>
  </div>
</template>

<script setup>
import { Hexagon } from 'lucide-vue-next';

defineProps({
  text: {
    type: String,
    required: true
  },
  direction: {
    type: String,
    default: 'left'
  }
});
</script>
