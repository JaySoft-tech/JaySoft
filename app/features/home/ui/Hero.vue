<template>
    <div
        class="min-h-[650px] 2xl:min-h-[780px] h-fit bg-gradient-to-b sm:bg-gradient-to-r from-white via-white to-[#00B090D9] rounded-b-[30px] relative px-[20px] flex items-center justify-between flex-col"
    >
        <!-- container -->
        <div class="max-w-[1320px] w-full h-full mx-auto">
            <!-- heading text -->
            <div class="max-w-[1240px] w-full mx-auto mt-[74px] sm:mt-[166px]">
                <h1
                    class="text-[32px]/[100%] sm:text-[59px]/[75px] font-unbounded font-medium max-w-[240px] sm:max-w-[520px]"
                >
                    СТУДІЯ РОЗРОБКИ ВЕБ САЙТІВ
                </h1>

                <h2
                    class="mt-[10px] sm:mt-[30px] max-w-[420px] font-unbounded font-light text-[14px]/[100%] sm:text-[22px]/[100%] m"
                >
                    Розробляємо функціональні <br />
                    сайти для бізнесу та брендів
                </h2>

                <div class="sm:block hidden">
                    <Button
                        class="mt-[40px]"
                        label="Безкоштовна консультація"
                        variant="primary"
                        icon="arrow"
                    />
                </div>
            </div>

            <!-- logo JAYSOFT -->
            <p
                class="mt-[25px] font-unbounded font-medium text-center 2xl:text-start sm:text-[100px]/[100%] 2xl:text-[179px]/[100%] tracking-[50px] sm:block hidden"
            >
                <span class="text-primary">JAY</span
                ><span class="text-[#000000]">SOFT</span>
            </p>

            <div class="sm:relative w-full">
                <img
                    class="absolute left-[-20px] sm:left-[40%] 2xl:left-[38%] bottom-0 2xl:bottom-[-28px] max-h-[418px] sm:max-h-[500px] 2xl:max-h-[780px] object-contain shrink-0"
                    src="/images/hero-bg.png"
                    alt="Робот"
                />
            </div>
        </div>

        <Button
            class="sm:hidden block mb-[20px]"
            label="Обговорити проєкт"
            variant="primary"
            icon="arrow"
        />

        <!-- Random words -->
        <div
            class="absolute max-sm:left-0 max-w-[390px] sm:max-w-[1320px] w-full"
        >
            <div class="relative sm:mx-auto z-50">
                <div
                    class="text-primary font-medium font-unbounded text-[12px]/[100%] sm:text-[22px]/[100%] absolute top-[271px] sm:top-[16.04vh] 2xl:top-[19.04vh] left-[5.33%] sm:left-[50.33%] 2xl:left-[39.33%] float float--slow"
                >
                    design
                </div>

                <div
                    class="text-primary font-medium font-unbounded text-[16px]/[100%] sm:text-[22px]/[100%] absolute top-[382px] sm:top-[30.48vh] 2xl:top-[30.48vh] left-[2.18%] sm:left-[43.18%] 2xl:left-[43.18%] float float--fast float--delay-1"
                >
                    new
                </div>

                <div
                    class="text-primary font-medium font-unbounded text-[16px]/[100%] sm:text-[22px]/[100%] absolute top-[518px] sm:top-[57.55vh] 2xl:top-[53.55vh] left-[10.75%] sm:left-[43.75%] 2xl:left-[50.75%] float float--rev float--delay-2"
                >
                    creative
                </div>

                <div
                    class="text-primary font-medium font-unbounded text-[16px]/[100%] sm:text-[22px]/[100%] absolute top-[546px] sm:top-[59.06vh] 2xl:top-[59.06vh] right-auto left-[45%] sm:left-[59%] 2xl:left-auto 2xl:right-[20.36%] float float--slow float--delay-3"
                >
                    animated
                </div>

                <div
                    class="text-primary font-medium font-unbounded text-[14px]/[100%] sm:text-[22px]/[100%] absolute top-[493px] sm:top-[48.56vh] 2xl:top-[45.56vh] right-[8%] sm:right-[10%] xl:right-[18.15%] 2xl:right-[3.15%] float float--fast"
                >
                    effective
                </div>

                <div
                    class="text-primary font-medium font-unbounded text-[16px]/[100%] sm:text-[22px]/[100%] absolute top-[424px] sm:top-[29.31vh] 2xl:top-[29.31vh] right-[5%] sm:right-[10%] xl:right-[15.96%] 2xl:right-[1.96%] float float--slow float--delay-2"
                >
                    WOW
                </div>

                <div
                    class="text-primary font-medium font-unbounded text-[12px]/[100%] sm:text-[22px]/[100%] absolute top-[325px] sm:top-[16.04vh] 2xl:top-[16.04vh] right-[0%] sm:right-[20.94%] 2xl:right-[1.94%] float float--rev float--delay-1"
                >
                    unique
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from '~/components/ui/Button.vue';
</script>

<style scoped>
.float {
    will-change: transform;
    animation-name: float;
    animation-duration: 7s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: normal;
}

.float--fast {
    animation-duration: 6.6s;
}
.float--slow {
    animation-duration: 8.8s;
}
.float--rev {
    animation-direction: reverse;
}
.float--delay-1 {
    animation-delay: 0.35s;
}
.float--delay-2 {
    animation-delay: 0.6s;
}
.float--delay-3 {
    animation-delay: 0.85s;
}

@keyframes float {
    0% {
        transform: translate3d(0, 0, 0);
    }
    25% {
        transform: translate3d(10px, -7px, 0);
    }
    50% {
        transform: translate3d(0, 10px, 0);
    }
    75% {
        transform: translate3d(-10px, -4px, 0);
    }
    100% {
        transform: translate3d(0, 0, 0);
    }
}
</style>
