<template>
    <div class="p-8 bg-gray-50 min-h-screen">
        <ServicesSection />

        <div>
            <ContactForm />
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from '~/components/ui/Button.vue';
import ContactForm from '~/features/contact-form/ui/ContactForm.vue';
import ServicesSection from '~/features/home/ui/ServicesSection.vue';

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
