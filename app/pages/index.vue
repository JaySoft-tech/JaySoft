<template>
    <div
        class="bg-wgite flex flex-col gap-[60px] sm:gap-[100px] mb-[60px] sm:mb-[100px]"
    >
        <HeroSection />

        <AboutSection />
    </div>
</template>

<script setup lang="ts">
import HeroSection from '~/features/home/ui/HeroSection.vue';
import AboutSection from '~/features/home/ui/AboutSection.vue';
</script>

<style scoped></style>
