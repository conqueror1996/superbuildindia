<template>
  <section class="py-20 bg-white border-y border-neutral-100">
    <div class="container mx-auto px-6 lg:px-12">
      <div ref="statsGrid" class="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        <div v-for="(stat, index) in stats" :key="index" class="relative group">
          <!-- Separator Line (Mobile) -->
          <div v-if="index % 2 !== 0" class="absolute left-0 top-0 bottom-0 w-px bg-neutral-100 lg:hidden"></div>
          <!-- Separator Line (Desktop) -->
          <div v-if="index !== 0" class="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-neutral-100"></div>

          <div class="stat-item pl-6 lg:pl-8 text-center lg:text-left transition-transform duration-300 hover:-translate-y-1">
            <h3 class="stat-value font-sans text-4xl lg:text-6xl font-medium text-neutral-900 mb-2 tabular-nums tracking-tighter" :data-target="stat.rawValue" :data-suffix="stat.suffix">
              0{{ stat.suffix }}
            </h3>
            <p class="font-mono text-xs text-neutral-400 uppercase tracking-widest">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';

const statsGrid = ref(null);

const stats = [
  { value: '25+', rawValue: 25, suffix: '+', label: 'Years Experience' },
  { value: '500+', rawValue: 500, suffix: '+', label: 'Projects Completed' },
  { value: '50+', rawValue: 50, suffix: '+', label: 'Expert Architects' },
  { value: '12', rawValue: 12, suffix: '', label: 'National Awards' }
];

onMounted(() => {
  const items = statsGrid.value.querySelectorAll('.stat-item');
  
  items.forEach(item => {
    const valueEl = item.querySelector('.stat-value');
    const target = parseFloat(valueEl.dataset.target);
    const suffix = valueEl.dataset.suffix || '';
    
    gsap.to(valueEl, {
      innerText: target,
      duration: 2,
      snap: { innerText: 1 },
      scrollTrigger: {
        trigger: item,
        start: 'top 85%',
        once: true,
      },
      onUpdate: function() {
        valueEl.innerText = Math.ceil(this.targets()[0].innerText) + suffix;
      }
    });
  });
});
</script>
