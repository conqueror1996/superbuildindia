<template>
  <div class="bg-black/50 backdrop-blur-sm p-8 md:p-12 border border-[#FF4D00]/20 hover:border-[#FF4D00] transition-colors duration-500 relative overflow-hidden group">
    <!-- Animated corner accents -->
    <div class="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#FF4D00] opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <div class="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#FF4D00] opacity-0 group-hover:opacity-100 transition-opacity"></div>
    
    <h3 class="font-syne text-3xl font-bold mb-2 text-white">INITIATE PROJECT</h3>
    <p class="font-mono text-xs text-gray-400 mb-8 uppercase tracking-wider">// Secure Transmission Protocol</p>
    
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Name Field -->
        <div class="relative">
          <input
            v-model="formData.name"
            type="text"
            required
            placeholder="Full Name *"
            class="w-full bg-white/5 border border-white/10 px-4 py-3 font-mono text-sm text-white placeholder-gray-500 focus:border-[#FF4D00] focus:outline-none transition-colors"
            :class="{ 'border-red-500': errors.name }"
          />
          <span v-if="errors.name" class="text-red-500 text-xs font-mono mt-1 block">{{ errors.name }}</span>
        </div>
        
        <!-- Email Field -->
        <div class="relative">
          <input
            v-model="formData.email"
            type="email"
            required
            placeholder="Email Address *"
            class="w-full bg-white/5 border border-white/10 px-4 py-3 font-mono text-sm text-white placeholder-gray-500 focus:border-[#FF4D00] focus:outline-none transition-colors"
            :class="{ 'border-red-500': errors.email }"
          />
          <span v-if="errors.email" class="text-red-500 text-xs font-mono mt-1 block">{{ errors.email }}</span>
        </div>
      </div>
      
      <!-- Phone Field -->
      <div class="relative">
        <input
          v-model="formData.phone"
          type="tel"
          placeholder="Phone Number"
          class="w-full bg-white/5 border border-white/10 px-4 py-3 font-mono text-sm text-white placeholder-gray-500 focus:border-[#FF4D00] focus:outline-none transition-colors"
        />
      </div>
      
      <!-- Project Type -->
      <div class="relative">
        <select
          v-model="formData.projectType"
          required
          class="w-full bg-white/5 border border-white/10 px-4 py-3 font-mono text-sm text-white focus:border-[#FF4D00] focus:outline-none transition-colors cursor-pointer"
        >
          <option value="" disabled>Select Project Type *</option>
          <option value="megaproject">MEGAPROJECT</option>
          <option value="hyper-structure">HYPER-STRUCTURE</option>
          <option value="atomic-interior">ATOMIC INTERIOR</option>
          <option value="other">OTHER</option>
        </select>
      </div>
      
      <!-- Budget Range -->
      <div class="relative">
        <select
          v-model="formData.budget"
          required
          class="w-full bg-white/5 border border-white/10 px-4 py-3 font-mono text-sm text-white focus:border-[#FF4D00] focus:outline-none transition-colors cursor-pointer"
        >
          <option value="" disabled>Budget Range *</option>
          <option value="50-100m">$50M - $100M</option>
          <option value="100-500m">$100M - $500M</option>
          <option value="500m-1b">$500M - $1B</option>
          <option value="1b+">$1B+</option>
        </select>
      </div>
      
      <!-- Message Field -->
      <div class="relative">
        <textarea
          v-model="formData.message"
          required
          rows="5"
          placeholder="Project Details *"
          class="w-full bg-white/5 border border-white/10 px-4 py-3 font-mono text-sm text-white placeholder-gray-500 focus:border-[#FF4D00] focus:outline-none transition-colors resize-none"
          :class="{ 'border-red-500': errors.message }"
        ></textarea>
        <span v-if="errors.message" class="text-red-500 text-xs font-mono mt-1 block">{{ errors.message }}</span>
      </div>
      
      <!-- Submit Button -->
      <button
        type="submit"
        :disabled="isSubmitting"
        class="w-full bg-[#FF4D00] text-black px-8 py-4 font-mono font-bold hover:bg-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group/btn"
      >
        <span class="relative z-10">
          {{ isSubmitting ? 'TRANSMITTING...' : submitSuccess ? 'TRANSMITTED ✓' : 'INITIATE TENDER' }}
        </span>
        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
      </button>
      
      <p class="font-mono text-xs text-gray-500 text-center">
        Your data is encrypted and transmitted securely. Response time: &lt; 24hrs
      </p>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const formData = reactive({
  name: '',
  email: '',
  phone: '',
  projectType: '',
  budget: '',
  message: ''
});

const errors = reactive({});
const isSubmitting = ref(false);
const submitSuccess = ref(false);

const validateForm = () => {
  const newErrors = {};
  
  if (!formData.name || formData.name.length < 2) {
    newErrors.name = 'Name must be at least 2 characters';
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email || !emailRegex.test(formData.email)) {
    newErrors.email = 'Invalid email address';
  }
  
  if (!formData.message || formData.message.length < 10) {
    newErrors.message = 'Message must be at least 10 characters';
  }
  
  Object.assign(errors, newErrors);
  return Object.keys(newErrors).length === 0;
};

const handleSubmit = async () => {
  Object.keys(errors).forEach(key => delete errors[key]);
  
  if (!validateForm()) {
    return;
  }
  
  isSubmitting.value = true;
  
  try {
    // Simulate API call - replace with your actual endpoint
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    
    submitSuccess.value = true;
    
    // Reset form after 3 seconds
    setTimeout(() => {
      Object.keys(formData).forEach(key => formData[key] = '');
      submitSuccess.value = false;
    }, 3000);
    
  } catch (error) {
    console.error('Submission error:', error);
    errors.submit = 'Transmission failed. Please try again.';
  } finally {
    isSubmitting.value = false;
  }
};
</script>
