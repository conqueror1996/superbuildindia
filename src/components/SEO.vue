<template>
  <component :is="'head'">
    <title>{{ title }}</title>
    <meta name="description" :content="description" />
    <meta name="keywords" :content="keywords" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" :content="url" />
    <meta property="og:title" :content="title" />
    <meta property="og:description" :content="description" />
    <meta property="og:image" :content="image" />
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" :content="url" />
    <meta property="twitter:title" :content="title" />
    <meta property="twitter:description" :content="description" />
    <meta property="twitter:image" :content="image" />
    
    <!-- Additional SEO -->
    <meta name="robots" content="index, follow" />
    <meta name="author" content="SuperBuild Inc." />
    <link rel="canonical" :href="url" />
  </component>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'SUPERBUILD - The God Particle | Megaprojects, Hyper-Structures & Atomic Interiors'
  },
  description: {
    type: String,
    default: 'SuperBuild is the apex predator of infrastructure. We engineer megaprojects, hyper-structures, and atomic interiors. $50B+ in completed projects across 120+ cities.'
  },
  keywords: {
    type: String,
    default: 'construction, megaprojects, infrastructure, civil engineering, hyper-structures, commercial construction, EPC mode, real estate development'
  },
  url: {
    type: String,
    default: 'https://superbuild.com'
  },
  image: {
    type: String,
    default: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop'
  }
});
</script>
