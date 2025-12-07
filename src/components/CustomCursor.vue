<template>
  <div 
    class="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
    :style="{ 
      transform: `translate(${pos.x}px, ${pos.y}px)`,
      transition: 'transform 0.1s ease-out'
    }"
  >
    <div :class="`relative -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${active ? 'scale-150 rotate-45' : 'scale-100'}`">
      <Crosshair 
        :class="`w-12 h-12 transition-colors duration-300 ${active ? 'text-[#FF4D00]' : 'text-white'}`" 
        :stroke-width="active ? 2 : 1" 
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Crosshair } from 'lucide-vue-next';

const pos = ref({ x: 0, y: 0 });
const active = ref(false);

const handleMouseMove = (e) => {
  pos.value = { x: e.clientX, y: e.clientY };
};

const hoverStart = () => active.value = true;
const hoverEnd = () => active.value = false;

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove);
  
  const targets = document.querySelectorAll('a, button, .cursor-hover');
  targets.forEach(el => {
    el.addEventListener('mouseenter', hoverStart);
    el.addEventListener('mouseleave', hoverEnd);
  });
});

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove);
  
  const targets = document.querySelectorAll('a, button, .cursor-hover');
  targets.forEach(el => {
    el.removeEventListener('mouseenter', hoverStart);
    el.removeEventListener('mouseleave', hoverEnd);
  });
});
</script>
