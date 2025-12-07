<template>
  <div ref="cursor" class="fixed top-0 left-0 w-4 h-4 rounded-full bg-charcoal pointer-events-none z-[9999] mix-blend-exclusion transition-transform duration-300 ease-out" :class="{ 'scale-[3] bg-transparent border border-white': isHovering }"></div>
</template>

<script setup>
import { useMouse } from '@vueuse/core';
import { ref, onMounted, onUnmounted, watch } from 'vue';
import gsap from 'gsap';

const { x, y } = useMouse();
const cursor = ref(null);
const isHovering = ref(false);

const mouseX = ref(0);
const mouseY = ref(0);

// Smooth follow logic
onMounted(() => {
  document.body.style.cursor = 'none';

  // Use GSAP ticker for smooth 60fps update
  const xTo = gsap.quickTo(cursor.value, "x", { duration: 0.15, ease: "power3.out" });
  const yTo = gsap.quickTo(cursor.value, "y", { duration: 0.15, ease: "power3.out" });

  window.addEventListener('mousemove', (e) => {
    mouseX.value = e.clientX;
    mouseY.value = e.clientY;
    
    // Offset for center
    xTo(e.clientX - 8);
    yTo(e.clientY - 8);

    // Hover detection
    const target = e.target;
    if (target.closest('a, button, .cursor-pointer')) {
      isHovering.value = true;
    } else {
      isHovering.value = false;
    }

    // Magnetic Button Logic
    const magnet = target.closest('.magnetic-btn');
    if (magnet) {
      const rect = magnet.getBoundingClientRect();
      const moveX = e.clientX - (rect.left + rect.width / 2);
      const moveY = e.clientY - (rect.top + rect.height / 2);
      
      gsap.to(magnet, {
        x: moveX * 0.3,
        y: moveY * 0.3,
        duration: 0.3,
        ease: 'power2.out'
      });
    } else {
      gsap.to('.magnetic-btn', {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'elastic.out(1, 0.3)'
      });
    }
  });
});

onUnmounted(() => {
  document.body.style.cursor = 'auto';
});
</script>
