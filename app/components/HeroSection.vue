<template>
  <section id="hero" class="relative bg-gradient-to-br from-white via-gray-50 to-teal-50 min-h-screen overflow-hidden">
    <!-- Background glow - Desktop -->
    <div class="absolute inset-0 z-0 hidden lg:block">
      <div class="absolute inset-y-0 right-0 w-full lg:w-4/5">
        <img
          src="/images/background_1.png"
          alt="Background glow"
          class="absolute inset-0 w-full h-full object-cover object-right-top"
        />
      </div>
    </div>

    <!-- Background glow - Mobile (flipped and bottom) -->
    <div class="absolute bottom-0 left-0 right-0 z-0 lg:hidden" style="height: 650px;">
      <img
        src="/images/hero_bg_mobile.png"
        alt="Background glow"
        class="absolute inset-0 w-full h-full object-cover object-bottom"
      />
    </div>

    <!-- Large text watermark (hidden on mobile) -->  
    <div class="absolute inset-0 z-10 hidden lg:flex items-center justify-center pointer-events-none select-none mt-[500px]">
      <h2
        class="text-[200px] xl:text-[280px] font-unbounded font-medium leading-none tracking-tight text-center"
      >
        <span class="text-primary mr-[60px]">JAY</span>
        <span class="text-black opacity-10">SOFT</span>
      </h2>
    </div>

    <!-- AI Robot Image - Desktop -->
    <div class="absolute inset-0 z-20 pointer-events-none hidden lg:block">
      <div class="absolute inset-y-0 right-0 w-3/5">
        <img
          src="/images/img_1.png"
          alt="AI Robot"
          class="absolute inset-0 w-full h-full object-contain object-right-top"
        />
      </div>
    </div>

    <!-- AI Robot Image - Mobile (bottom positioned) -->
    <div class="absolute bottom-0 right-0 z-20 pointer-events-none lg:hidden" style="width: 390px; height: 418px;">
      <img
        src="/images/img_1_mobile.png"
        alt="AI Robot"
        class="absolute bottom-0 right-0 w-full h-full object-contain object-bottom-right"
      />
    </div>

    <!-- Main Content -->
    <div class="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-44 pb-[480px] lg:pb-20">
      <div class="grid grid-cols-1 lg:grid-cols-2">
        <div class="max-w-lg">
          <!-- Heading -->
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-unbounded font-medium text-black leading-tight sm:leading-none mb-4 sm:mb-6">
            СТУДІЯ <br />
            РОЗРОБКИ <br />
            ВЕБ САЙТІВ
          </h1>

          <!-- Subheading -->
          <p class="text-lg sm:text-xl lg:text-2xl text-black mb-6 sm:mb-8 lg:mb-10 font-light font-unbounded">
            Розробляємо функціональні сайти для бізнесу та брендів
          </p>

          <!-- Floating keywords (mobile version) -->
          <div class="flex flex-wrap gap-3 mb-6 lg:hidden">
            <span class="px-3 py-1 text-teal-500 text-sm font-unbounded font-medium">design</span>
            <span class="px-3 py-1 text-teal-500 text-sm font-unbounded font-medium">unique</span>
            <span class="px-3 py-1 text-teal-500 text-sm font-unbounded font-medium">new</span>
            <span class="px-3 py-1 text-teal-500 text-sm font-unbounded font-medium">wow</span>
            <span class="px-3 py-1 text-teal-500 text-sm font-unbounded font-medium">creative</span>
            <span class="px-3 py-1 text-teal-500 text-sm font-unbounded font-medium">animated</span>
            <span class="px-3 py-1 text-teal-500 text-sm font-unbounded font-medium">effective</span>
          </div>

          <!-- CTA Button -->
          <NuxtLink
  href="https://t.me/CHEMPION_PO_KYNI_2025"
  class="
    group inline-flex h-[46px] w-[213px] items-center justify-between
    rounded-full bg-gradient-to-r from-primary to-[#02c9a8] px-5 text-[14px]
    font-medium text-white shadow-md transition duration-200 hover:shadow-lg
    active:bg-white active:from-white active:to-white
    focus-visible:bg-white focus-visible:from-white focus-visible:to-white

    relative top-[450px] bottom-0 left-[80px]   <!-- 📱 Мобілка -->

    md:static md:top-auto md:bottom-auto md:right-auto  <!-- 💻 ПК норм -->
  "
>
  <span class="leading-none text-left active:text-primary focus-visible:text-primary font-medium text-sm font-unbounded">
    Безкоштовна<br />консультація
  </span>

  <span
    class="ml-4 flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white
           text-primary transition-all duration-300 group-hover:w-[72px]"
  >
    <img
      class="h-[18px] w-[18px] transition-transform duration-300
             group-hover:rotate-45 group-hover:translate-x-2 active:scale-110 focus-visible:scale-110"
      src="/images/Arrows.png"
      alt=""
    >
  </span>
</NuxtLink>


        </div>
      </div>
    </div>

    <!-- Floating keywords (desktop version - positioned absolutely) -->
    <div class="hidden lg:block absolute inset-0 z-25 pointer-events-none">
      <span class="absolute top-[30%] left-[5%] text-teal-400 text-2xl font-unbounded font-medium">design</span>
      <span class="absolute top-[45%] right-[25%] text-teal-400 text-2xl font-unbounded font-medium">unique</span>
      <span class="absolute top-[60%] left-[8%] text-teal-400 text-2xl font-unbounded font-medium">new</span>
      <span class="absolute top-[50%] right-[15%] text-teal-400 text-2xl font-unbounded font-medium">wow</span>
      <span class="absolute top-[75%] right-[35%] text-teal-400 text-2xl font-unbounded font-medium">effective</span>
      <span class="absolute bottom-[25%] left-[12%] text-teal-400 text-2xl font-unbounded font-medium">creative</span>
      <span class="absolute bottom-[35%] right-[20%] text-teal-400 text-2xl font-unbounded font-medium">animated</span>
    </div>
  </section>

  <!-- Stats Section -->
  <section class="py-12 sm:py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref="counterSection" class="grid grid-cols-2 md:grid-cols-4 gap-y-8 sm:gap-y-12 gap-x-6 sm:gap-x-8 lg:gap-x-16 text-center">
        <div>
          <div class="text-4xl sm:text-5xl lg:text-6xl font-unbounded font-bold text-black">
            <Counter
              :from="0"
              :to="10"
              separator=""
              direction="up"
              :duration="1"
              :delay="0"
              :start-when="startCounter"
              class-name="count-up-text"
            />+
          </div>
          <p class="mt-2 text-sm sm:text-base text-black font-unbounded font-regular px-2">
            Проєктів, якими ми пишаємося!
          </p>
        </div>

        <div>
          <div class="text-4xl sm:text-5xl lg:text-6xl font-unbounded font-bold text-black">
            <Counter
              :from="0"
              :to="3"
              separator=""
              direction="up"
              :duration="1"
              :delay="0"
              :start-when="startCounter"
              class-name="count-up-text"
            />
          </div>
          <p class="mt-2 text-sm sm:text-base text-black font-unbounded font-regular px-2">
            Роки на ринку<br> інформаційних технологій
          </p>
        </div>

        <div>
          <div class="text-4xl sm:text-5xl lg:text-6xl font-unbounded font-bold text-black">
            <Counter
              :from="0"
              :to="8"
              separator=""
              direction="up"
              :duration="1"
              :delay="0"
              :start-when="startCounter"
              class-name="count-up-text"
            />
          </div>
          <p class="mt-2 text-sm sm:text-base text-black font-unbounded font-regular px-2">
            Фахівців в нашій<br> команді!
          </p>
        </div>

        <div>
          <div class="text-4xl sm:text-5xl lg:text-6xl font-unbounded font-bold text-black">
            <Counter
              :from="0"
              :to="100"
              separator=","
              direction="up"
              :duration="1"
              :delay="0"
              :start-when="startCounter"
              class-name="count-up-text"
            />
            %
          </div>
          <p class="mt-2 text-sm sm:text-base text-black font-unbounded font-regular px-2">
            Задоволених клієнтів!
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const counterSection = ref<HTMLElement | null>(null)
const startCounter = ref(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  if (counterSection.value) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startCounter.value) {
            startCounter.value = true
          }
        })
      },
      {
        threshold: 0.3
      }
    )

    observer.observe(counterSection.value)
  }
})

onUnmounted(() => {
  if (observer && counterSection.value) {
    observer.unobserve(counterSection.value)
  }
})
</script>