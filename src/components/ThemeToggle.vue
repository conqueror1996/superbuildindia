<template>
  <button
    @click="toggleTheme"
    class="fixed bottom-8 left-8 z-40 w-14 h-14 rounded-full bg-[#FF4D00] flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(255,77,0,0.5)] group cursor-hover"
    :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
  >
    <Sun v-if="isDark" :size="24" class="text-black group-hover:rotate-180 transition-transform duration-500" />
    <Moon v-else :size="24" class="text-black group-hover:rotate-180 transition-transform duration-500" />
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Sun, Moon } from 'lucide-vue-next';

const isDark = ref(true);

const toggleTheme = () => {
  isDark.value = !isDark.value;
  applyTheme();
};

const applyTheme = () => {
  const root = document.documentElement;
  
  if (isDark.value) {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
  
  // Save preference
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
};

onMounted(() => {
  // Check saved preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    isDark.value = savedTheme === 'dark';
  } else {
    // Check system preference
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  applyTheme();
});
</script>
