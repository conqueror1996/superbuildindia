<template>
  <button
    ref="buttonRef"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
    :style="buttonStyle"
    :class="[
      baseClasses,
      'relative overflow-hidden transition-all duration-200 ease-out',
      customClass
    ]"
  >
    <span class="relative z-10 inline-flex items-center gap-2">
      <slot />
    </span>
    
    <!-- Ripple Effect -->
    <div 
      class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
      :style="rippleStyle"
    ></div>
  </button>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary', // 'primary' | 'secondary'
  },
  customClass: {
    type: String,
    default: ''
  },
  magneticStrength: {
    type: Number,
    default: 0.3
  }
});

const buttonRef = ref(null);
const mouseX = ref(0);
const mouseY = ref(0);
const isHovering = ref(false);

const baseClasses = computed(() => {
  if (props.variant === 'primary') {
    return 'bg-[#FF4D00] text-black px-8 py-4 font-mono font-bold hover:bg-white cursor-hover';
  }
  return 'border border-white/20 px-8 py-4 font-mono font-bold hover:bg-white hover:text-black cursor-hover';
});

const buttonStyle = computed(() => {
  if (!isHovering.value) {
    return {
      transform: 'translate(0, 0)'
    };
  }
  
  return {
    transform: `translate(${mouseX.value * props.magneticStrength}px, ${mouseY.value * props.magneticStrength}px)`
  };
});

const rippleStyle = computed(() => ({
  transform: `translateX(${mouseX.value / 2}px)`,
  transition: 'transform 0.3s ease-out'
}));

const handleMouseMove = (e) => {
  if (!buttonRef.value) return;
  
  const rect = buttonRef.value.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  
  mouseX.value = e.clientX - centerX;
  mouseY.value = e.clientY - centerY;
  isHovering.value = true;
};

const handleMouseLeave = () => {
  mouseX.value = 0;
  mouseY.value = 0;
  isHovering.value = false;
};
</script>
