<template>
    <div>
        <!-- heading text -->
        <h2
            class="max-w-[1240px] mx-auto text-section-heading sm:text-section-heading-lg font-unbounded text-center sm:text-start"
        >
            ПРО НАС
        </h2>

        <!-- main content -->
        <div
            class="mt-[40px] bg-[#00B09026] min-h-[670px] relative flex flex-row gap-[75px] overflow-hidden rounded-b items-end"
        >
            <!-- image -->
            <img
                class="object-contain bottom-0 flex-shrink-0 max-h-[668px] h-full hidden sm:block"
                src="/images/img_2.png"
                alt="Робот"
            />

            <!-- background shadow image -->
            <img
                class="absolute bottom-[-80px] left-[-20px] object-contain h-[836px] w-[575px] opacity-10 -z-10 hidden sm:block"
                src="/images/img_2.png"
                alt="Робот"
            />

            <!-- text content -->
            <div
                class="flex flex-wrap gap-[60px] max-w-[1200px] py-[40px] px-[20px]"
            >
                <div
                    v-for="(feature, index) in features"
                    class="min-h-[180px] sm:min-w-[460px] flex flex-row items-end justify-between"
                >
                    <div class="flex flex-col gap-[10px] font-unbounded h-full">
                        <p
                            class="font-semibold text-[61px]/[100%] text-primary"
                        >
                            0{{ index + 1 }}
                        </p>

                        <p class="font-medium text-[22px]/[100%]">
                            {{ feature.title }}
                        </p>

                        <p
                            class="font-light text-[16px]/[100%] text-black"
                            v-html="feature.descriptionHtml"
                        ></p>
                    </div>

                    <img
                        v-if="index === 0 || index === 2"
                        class="w-[60px] h-[60px] sm:block hidden"
                        src="/images/grave.png"
                        alt="Хрест"
                    />
                </div>
            </div>
        </div>
    </div>
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
        title: "ЗВОРОТНІЙ ЗВ'ЯЗОК",
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
        descriptionHtml: 'Максимальне заглиблення в суть <br /> проекту',
    },
];
</script>

<style scoped></style>
