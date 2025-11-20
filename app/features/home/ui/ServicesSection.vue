<script setup lang="ts">
import Button from '~/components/ui/Button.vue';

interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
  icon: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Landing page',
    description:
      'Представляємо переваги Вашого бізнесу на односторінковому сайті для швидкого залучення клієнтів',
    price: 'від 250$',
    icon: 'abstract1',
  },
  {
    id: 2,
    title: 'Корпоративний сайт',
    description:
      'Знаходимо найоптимальніше рішення для ознайомлення користувачів з Вашою компанією та послугами',
    price: 'від 600$',
    icon: 'abstract2',
  },
  {
    id: 3,
    title: 'WOW - Сайт',
    description:
      'Перетворюємо ідеї в мову анімацій, додаємо інтерактиву та створюємо унікальний продукт',
    price: 'від 2000$',
    icon: 'abstract3',
  },
  {
    id: 4,
    title: 'Інтернет магазин',
    description:
      'Створюємо зручні платформи для швидкого продажу Вашої продукції чи товарів онлайн',
    price: 'від 800$',
    icon: 'abstract4',
  },
];

const handleCardClick = (serviceId: number) => {
  console.log('Service clicked:', serviceId);
};
</script>

<template>
  <section
    class="w-full max-w-[1239px] mx-auto px-4 lg:px-0"
    style="font-family: 'Unbounded', sans-serif"
  >
    <h2
      class="font-unbounded text-section-heading lg:text-section-heading-lg mb-8 lg:mb-12"
    >
      ПОСЛУГИ
    </h2>

    <div
      class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-x-[20px] lg:gap-y-[25px]"
    >
      <div
        v-for="service in services"
        :key="service.id"
        class="relative w-full rounded-[14px] p-6 lg:p-8 overflow-hidden"
        style="background-color: rgba(0, 176, 144, 0.15)"
      >
        <div class="absolute inset-0 z-0 rounded-[14px]"></div>

        <div
          class="absolute top-5 right-4 lg:top-8 lg:right-12 z-10 w-[62px] h-[62px] lg:w-[108px] lg:h-[108px]"
        >
          <img
            :src="`/images/${service.icon}.svg`"
            :alt="`${service.title} icon`"
            class="w-full h-full object-contain"
          />
        </div>

        <div class="relative z-20">
          <h3
            class="text-[20px] lg:text-[32px] font-light leading-normal text-black mb-4 lg:mb-6"
          >
            {{ service.title }}
          </h3>

          <p
            class="text-[12px] lg:text-[16px] font-normal leading-[1.3] text-gray-light mb-6 lg:mb-8 max-w-[304px]"
            style="font-family: 'Manrope', sans-serif"
          >
            {{ service.description }}
          </p>

          <div class="flex items-center justify-between">
            <Button
              label="Замовити"
              variant="lime"
              size="small"
              icon="arrow"
              @click="handleCardClick(service.id)"
            />

            <div
              class="text-[14px] lg:text-[18px] font-normal leading-normal text-black"
            >
              {{ service.price }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
