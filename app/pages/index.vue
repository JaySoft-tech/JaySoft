<template>
    <div
        class="bg-wgite flex flex-col gap-[60px] sm:gap-[100px] mb-[60px] sm:mb-[100px]"
    >
        <HeroSection />

        <AboutSection />

        <ProjectSection />

        <ServicesSection />

        <ContactForm />
    </div>
</template>

<script setup lang="ts">
import HeroSection from '~/features/home/ui/HeroSection.vue';
import AboutSection from '~/features/home/ui/AboutSection.vue';
import ContactForm from '~/features/contact-form/ui/ContactForm.vue';
import ServicesSection from '~/features/home/ui/ServicesSection.vue';
import ProjectSection from '~/features/home/ui/ProjectSection.vue';

const handleClick = () => {
    console.log('Кнопка натиснута!');
};

const handleCardButtonClick = () => {
    console.log('Кнопка картки натиснута!');
};

const activeFilter = ref('landing');

const filters = [
    { id: 'landing', label: 'Лендінг' },
    { id: 'multipage', label: 'Багатосторінковий' },
    { id: 'ecommerce', label: 'Інтернет-магазин' },
];

const setFilter = (filterId: string) => {
    activeFilter.value = filterId;
    console.log('Активний фільтр:', filterId);
};
</script>

<style scoped></style>
