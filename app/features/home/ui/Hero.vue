<template>
    <div
        class="min-h-[770px] bg-gradient-to-r from-white via-white to-[#00B090D9] rounded-b-[30px] relative"
    >
        <!-- container -->
        <div class="max-w-[1320px] min-h-[770px] h-full mx-auto relative">
            <!-- heading text -->
            <div class="max-w-[1240px] w-full mx-auto mt-[146px]">
                <h1
                    class="text-[59px]/[75px] font-unbounded font-medium max-w-[520px]"
                >
                    СТУДІЯ РОЗРОБКИ ВЕБ САЙТІВ
                </h1>

                <h2
                    class="mt-[30px] max-w-[420px] font-unbounded font-light text-[22px]/[100%]"
                >
                    Розробляємо функціональні сайти для бізнесу та брендів
                </h2>

                <Button
                    class="mt-[40px]"
                    label="Безкоштовна консультація"
                    variant="primary"
                    icon="arrow"
                />
            </div>

            <!-- logo JAYSOFT -->
            <p
                class="mt-[25px] font-unbounded font-medium text-[179px]/[100%] tracking-[50px]"
            >
                <span class="text-[#00B090]">JAY</span
                ><span class="text-[#000000]">SOFT</span>
            </p>

            <img
                class="absolute right-[0px] bottom-0 max-h-[770px]"
                src="/images/img_1.png"
                alt="Робот"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from '~/components/ui/Button.vue';
</script>

<style scoped></style>
