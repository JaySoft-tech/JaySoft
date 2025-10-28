<template>
    <div>
        <Footer />

        <main>
            <slot />
        </main>

        <Header />
    </div>
</template>

<script setup lang="ts">
import Header from '~/features/layout/ui/Header.vue';
import Footer from '~/features/layout/ui/Footer.vue';
</script>

<style scoped></style>
