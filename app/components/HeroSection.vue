<template>
  <section id="hero" class="relative bg-white min-h-screen overflow-hidden">
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-y-0 right-0 w-full lg:w-4/5">
        <img
          src="/images/background_1.png"
          alt="Background glow"
          class="absolute inset-0 w-full h-full object-cover object-right-top"
        />
      </div>
    </div>

    <div class="absolute inset-0 z-10 flex items-center justify-center pointer-events-none select-none mt-[500px]">
      <h2
        class="text-[200px] sm:text-[280px] font-unbounded font-medium leading-none tracking-tight text-center"
      >
        <span class="text-primary mr-[60px]">JAY</span>
        <span class="text-black">SOFT</span>
      </h2>
    </div>

    <div class="absolute inset-0 z-20 pointer-events-none">
      <div class="absolute inset-y-0 right-0 w-full lg:w-3/5">
        <img
          src="/images/img_1.png"
          alt="AI Robot"
          class="absolute inset-0 w-full h-full object-contain object-right-top"
        />
      </div>
    </div>

    <div
      class="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-44 pb-20"
    >
      <div class="grid grid-cols-1 lg:grid-cols-2">
        <div class="max-w-lg">
          <h1
            class="text-6xl font-unbounded font-medium text-black leading-none mb-6"
          >
            СТУДІЯ <br />
            РОЗРОБКИ <br />
            ВЕБ САЙТІВ
          </h1>

          <p class="text-2xl text-black mb-10 font-light font-unbounded">
            Розробляємо функціональні сайти для бізнесу та брендів
          </p>

          <NuxtLink
            href="https://t.me/CHEMPION_PO_KYNI_2025"
            class="group inline-flex items-center h-[46.8px] w-auto px-6 py-3 bg-primary text-white font-unbounded font-medium rounded-full shadow-lg transition duration-300
                     hover:shadow-xl hover:text-primary hover:bg-white
                     active:bg-white active:text-primary focus-visible:bg-white focus-visible:text-primary"
          >
            Безкоштовна <br /> консультація
            <span
              class="ml-4 flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white text-primary transition-all duration-200
                       group-hover:rotate-45"
            >
              <img
                class="h-[18px] w-[18px] transition-transform duration-300 active:scale-110 focus-visible:scale-110"
                src="/images/Arrows.png"
                alt="Arrow"
              />
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>

  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref="counterSection" class="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 lg:gap-x-16 text-center">
        <div>
          <div class="text-6xl font-unbounded font-bold text-black">
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
          <p class="mt-2 text-base text-black font-unbounded font-regular">
            Проєктів, якими ми пишаємося!
          </p>
        </div>

        <div>
          <div class="text-6xl font-unbounded font-bold text-black">
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
          <p class="mt-2 text-base text-black font-unbounded font-regular">
            Роки на ринку<br> інформаційних технологій
          </p>
        </div>

        <div>
          <div class="text-6xl font-unbounded font-bold text-black">
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
          <p class="mt-2 text-base text-black font-unbounded font-regular">
            Фахівців в нашій<br> команді!
          </p>
        </div>

        <div>
          <div class="text-6xl font-unbounded font-bold text-black">
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
          <p class="mt-2 text-base text-black font-unbounded font-regular">
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
        threshold: 0.3 // Запускає лічильник, коли 30% секції видно
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