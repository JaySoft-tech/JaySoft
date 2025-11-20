<script setup lang="ts">
import Button from '~/components/ui/Button.vue';
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

    <h2 class="font-unbounded text-section-heading lg:text-section-heading-lg">
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

    <ServicesSection />
  </div>
</template>
