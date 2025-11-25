<script setup lang="ts">
import Button from '~/components/ui/Button.vue';
// import Card from '~/components/ui/Card.vue';
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

<template>
    <div class="p-8 bg-gray-50 min-h-screen">
        <!-- Секція з шрифтом -->
        <h1 class="font-unbounded text-hero lg:text-hero-lg">
            СТУДІЯ РОЗРОБКИ ВЕБ САЙТІВ
        </h1>

        <p class="font-unbounded text-hero-desc lg:text-hero-desc-lg">
            Розробляємо функціональні сайти для бізнесу та брендів
        </p>

        <div class="font-unbounded text-stats-number">10+</div>

        <p class="font-unbounded text-stats-desc lg:text-stats-desc-lg">
            Проєктів, якими ми пишаємося!
        </p>

        <h2
            class="font-unbounded text-section-heading lg:text-section-heading-lg"
        >
            ПРО НАС
        </h2>

        <div class="font-unbounded text-brand hidden lg:block">JAY SOFT</div>

        <!-- Секція з кнопками -->
        <section class="mb-12">
            <h2
                class="font-unbounded text-section-heading lg:text-section-heading-lg"
            >
                Кнопки
            </h2>
            <div class="flex flex-wrap gap-4 mb-8">
                <Button
                    label="Обговорити проєкт"
                    variant="primary"
                    icon="arrow"
                    @click="handleClick"
                />
                <Button
                    label="Безкоштовна консультація"
                    variant="primary"
                    icon="arrow"
                    @click="handleClick"
                />
                <Button
                    label="Закрити"
                    variant="primary"
                    icon="close"
                    @click="handleClick"
                />
                <Button
                    label="Надіслати"
                    variant="primary"
                    icon="send"
                    @click="handleClick"
                />
                <Button
                    label="Замовити"
                    variant="lime"
                    size="small"
                    icon="arrow"
                    @click="handleClick"
                />
            </div>

            <!-- Filter кнопки -->
            <div class="hidden md:flex flex-wrap gap-4">
                <Button
                    v-for="filter in filters"
                    :key="filter.id"
                    variant="filter"
                    :label="filter.label"
                    :active="activeFilter === filter.id"
                    @click="setFilter(filter.id)"
                />
            </div>
        </section>

        <!-- Секція з картками -->
        <section>
            <h2
                class="font-unbounded text-section-heading lg:text-section-heading-lg"
            >
                ПОСЛУГИ
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card
                    title="Landing page"
                    description="Представляємо переваги Вашого бізнесу на односторінковому сайті для швидкого залучення клієнтів"
                    price="від 250$"
                    @button-click="handleCardButtonClick"
                />

                <Card
                    title="Корпоративний сайт"
                    description="Знаходимо найоптимальніше рішення для ознайомлення користувачів з Вашою компанією та послугами"
                    price="від 600$"
                    @button-click="handleCardButtonClick"
                />

                <Card
                    title="WOW - Сайт"
                    description="Перетворюємо ідеї в мову анімацій, додаємо інтерактиву та створюємо унікальний продукт"
                    price="від 2000$"
                    @button-click="handleCardButtonClick"
                />

                <Card
                    title="Інтернет магазин"
                    description="Створюємо зручні платформи для швидкого продажу Вашої продукції чи товарів онлайн"
                    price="від 800$"
                    @button-click="handleCardButtonClick"
                />
            </div>
        </section>

        <div class="my-[1000px]">
            <ContactForm />
        </div>
    </div>
    <ServicesSection />
</template>
