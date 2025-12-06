<template>
  <section id="about" class="relative py-20 lg:py-32 overflow-hidden">
    <div class="absolute inset-0 z-0 mt-[268px]">
      <NuxtImg
        src="/images/about_background.png"
        alt="About Background"
        class="absolute inset-0 w-full h-[669px] object-cover"
        loading="lazy"
      />
    </div>

    <div class="relative z-10 w-full px-4 sm:px-6 lg:px-8">
      
      <h2 class="text-6xl lg:text-6xl font-unbounded font-bold text-black text-left mb-16 lg:mb-20 ml-[100px]">
        ПРО НАС
      </h2>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-16 items-center">
        
        <div class="relative order-2 lg:order-1 w-full h-[668px] 
                     col-span-1 -ml-4 sm:-ml-6 lg:-ml-8">
          <div class="absolute w-full h-[668px] top-0 left-0 -z-10">
            <NuxtImg
              src="/images/img_2.png"
              alt="AI Robot"
              class="w-full h-[668px] object-contain object-left"
              @error="imageExists = false"
              loading="lazy"
            />
          </div>
        </div>

        <div class="order-1 lg:order-2 col-span-1 lg:col-span-2">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 xl:gap-12">
            <div
              v-for="(feature, index) in features"
              :key="index"
              class="relative"
            >
              <div class="text-6xl font-unbounded font-extrabold text-primary leading-none mb-3">
                {{ String(index + 1).padStart(2, '0') }}
              </div>
              
              <h3 class="text-xl font-unbounded font-medium text-black mb-2 leading-tight">
                {{ feature.title }}
              </h3>
              
              <p class="text-base font-light text-black font-unbounded leading-relaxed whitespace-pre-line">
                {{ feature.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const imageExists = ref(true)

const features = [
  {
    title: 'ПРОЗОРІ УМОВИ РОБОТИ',
    // Оновлено перенос рядка
    description: 'Договір з гарантіями і\nзобов\'язаннями'
  },
  {
    title: 'ГНУЧКА СИСТЕМА ОПЛАТИ',
    description: '33/33/33, 50/50 за етап'
  },
  {
    title: 'ЗВОРОТНІЙ ЗВ\'ЯЗОК',
    // Оновлено перенос рядка
    description: 'В зручних для вас каналах\nкомунікації'
  },
  {
    title: 'ДОСВІДЧЕНА КОМАНДА',
    // Оновлено перенос рядка
    description: 'Реальний досвід для різних\nгалузей'
  },
  {
    title: 'ПОВНИЙ ЦИКЛ РОЗРОБКИ',
    description: 'Від ідеї та дизайну до запуску'
  },
  {
    title: 'ІНДИВІДУАЛЬНИЙ ПІДХІД',
    // Оновлено перенос рядка
    description: 'Максимальне заглиблення в суть\nпроекту'
  }
]

onMounted(() => {
  // Check if image exists (залишив для повноти)
  const img = new Image()
  img.onload = () => {
    imageExists.value = true
  }
  img.onerror = () => {
    imageExists.value = false
  }
  img.src = '/images/img_2.png'
})
</script>