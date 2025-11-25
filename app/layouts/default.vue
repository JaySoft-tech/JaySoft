<script setup lang="ts">
import Header from '~/features/layout/ui/Header.vue';
import Footer from '~/features/layout/ui/Footer.vue';
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header />

    <main class="flex-grow pt-[120px]">
      <slot />
    </main>

    <Footer />
  </div>
</template>
