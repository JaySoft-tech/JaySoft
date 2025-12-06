<template>
    <div class="min-h-screen flex flex-col overflow-hidden">
        <Header />

        <main class="flex-grow relative">
            <slot />

            <!-- background robot image -->
            <img
                class="absolute left-[-500px] top-[100px] h-[4490px] w-[3040px] object-contain opacity-[0.06] -z-10"
                src="/images/img_2.png"
                alt="Робот"
            />
        </main>

        <Footer />
    </div>
</template>

<script setup lang="ts">
import Header from '~/features/layout/ui/Header.vue';
import Footer from '~/features/layout/ui/Footer.vue';
</script>
