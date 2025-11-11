<script setup lang="ts">
import Button from '~/components/ui/Button.vue';
import Card from '~/components/ui/Card.vue';

const handleClick = () => {
  console.log('Кнопка натиснута!');
};

const handleCardButtonClick = () => {
  console.log('Кнопка картки натиснута!');
};
</script>

<template>
  <div class="p-8 bg-gray-50 min-h-screen">
    <!-- Секція з кнопками -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-6">Кнопки</h2>
      <div class="flex flex-wrap gap-4">
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
    </section>

    <!-- Секція з картками -->
    <section>
      <h2 class="text-2xl font-bold mb-6">Картки</h2>
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
  </div>
</template>
