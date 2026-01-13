<template>
    <section class="rounded-b-[30px]">
        <!-- heading text -->
        <Motion
            is="h2"
            preset="slideVisibleLeft"
            class="max-w-[1240px] mx-auto text-section-heading sm:text-[48px]/[100%] xl:text-section-heading-lg font-unbounded text-center xl:text-start"
        >
            ПРО НАС
        </Motion>

        <!-- main content -->
        <div
            class="mt-[30px] sm:mt-[40px] bg-[#00B09026] 2xl:min-h-[670px] relative flex flex-row lg:gap-[75px] overflow-hidden rounded-b-[30px] items-center xl:items-end justify-between py-[30px] xl:justify-normal sm:py-0"
        >
            <!-- image desktop -->
            <img
                class="object-contain bottom-0 xl:flex-shrink-0 max-h-[550px] 2xl:max-h-[668px] h-full hidden xl:block"
                src="/images/img-about.png"
                alt="Робот"
            />

            <!-- background shadow image desktop -->
            <img
                class="absolute bottom-[0px] left-[-15px] object-contain h-[580px] 2xl:h-[670px] 2xl:w-[575px] opacity-10 -z-10 hidden xl:block"
                src="/images/img-about-shadow.png"
                alt="Робот"
            />

            <!-- text content -->
            <div
                preset="slideVisibleLeft"
                :duration="600"
                class="flex items-center justify-center flex-col sm:grid grid-cols-1 lg:grid-cols-2 grid-rows-6 lg:grid-rows-3 gap-x-[20px] 2xl:gap-x-[40px] gap-y-[20px] sm:gap-y-[30px] xl:gap-y-[6px] max-w-[1200px] px-[20px] place-items-center lg:place-items-stretch flex-grow lg:flex-grow-0 sm:shrink-0 lg:shrink"
            >
                <MotionGroup
                    preset="slideVisibleLeft"
                    :duration="600"
                    is="div"
                    v-for="(feature, index) in features"
                    class="sm:min-h-[145px] xl:min-h-[170px] 2xl:min-h-[200px] w-full min-w-0 sm:min-w-[360px] xl:min-w-[380px] 2xl:min-w-[420px] flex flex-row items-end justify-between"
                >
                    <div
                        class="flex flex-col gap-[6px] sm:gap-[10px] font-unbounded h-full w-full"
                    >
                        <p
                            class="font-semibold text-[32px]/[100%] sm:text-[48px]/[100%] xl:text-[50px]/[100%] 2xl:text-[61px]/[100%] text-primary text-center sm:text-start"
                        >
                            0{{ index + 1 }}
                        </p>

                        <p
                            class="font-medium text-[18px]/[100%] sm:text-[20px]/[100%] 2xl:text-[22px]/[100%]"
                        >
                            {{ feature.title }}
                        </p>

                        <p
                            class="font-light text-[14px]/[100%] sm:text-[16px]/[100%] text-black"
                            v-html="feature.descriptionHtml"
                        ></p>
                    </div>

                    <img
                        v-if="index === 0 || index === 2"
                        class="w-[50px] 2xl:w-[60px] h-[50px] 2xl:h-[60px] xl:block hidden"
                        src="/images/grave.png"
                        alt="Хрест"
                    />
                </MotionGroup>
            </div>

            <!-- image tablet -->
            <img
                class="object-contain xl:flex-shrink-0 max-w-[200px] sm:max-w-[344px] lg:max-h-[760px] h-full opacity-5 sm:opacity-100 right-[-70px] bottom-[-30px] absolute sm:static block xl:hidden"
                src="/images/img-about-tablet.png"
                alt="Робот"
            />
        </div>
    </section>
</template>

<script setup lang="ts">
const features = [
    {
        title: 'ПРОЗОРІ УМОВИ РОБОТИ',
        descriptionHtml: "Договір з гарантіями і <br /> зобов'язаннями",
    },
    {
        title: 'ГНУЧКА СИСТЕМА ОПЛАТИ',
        descriptionHtml: '33/33/33, 50/50 за етап',
    },
    {
        title: "ЗВОРОТНИЙ ЗВ'ЯЗОК",
        descriptionHtml: 'В зручних для вас каналах <br /> комунікації',
    },
    {
        title: 'ДОСВІДЧЕНА КОМАНДА',
        descriptionHtml: 'Реальний досвід для різних <br /> галузей',
    },
    {
        title: 'ПОВНИЙ ЦИКЛ РОЗРОБКИ',
        descriptionHtml: 'Від ідеї та дизайну до запуску',
    },
    {
        title: 'ІНДИВІДУАЛЬНИЙ ПІДХІД',
        descriptionHtml: 'Максимальне заглиблення в суть <br /> проєкту',
    },
];
</script>

<style scoped></style>
