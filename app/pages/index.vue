<template>
    <div
        class="bg-wgite flex flex-col gap-[60px] sm:gap-[100px] mb-[60px] sm:mb-[100px]"
    >
        <Hero />

        <About />

        <ProjectSection />

        <ServicesSection />

        <ContactForm />
    </div>
</template>

<script setup lang="ts">
import Hero from '~/features/home/ui/Hero.vue';
import About from '~/features/home/ui/About.vue';
import ProjectSection from '~/features/home/ui/ProjectSection.vue';
import ServicesSection from '~/features/home/ui/ServicesSection.vue';
import ContactForm from '~/features/contact-form/ui/ContactForm.vue';
</script>

<style scoped></style>
