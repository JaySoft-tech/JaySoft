<script setup lang="ts">
import Button from '~/components/ui/Button.vue';

const handleClick = () => {
  console.log('Кнопка натиснута!');
};
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <Button
      label="Обговорити проєкт"
      variant="primary"
      icon="arrow"
      @click="handleClick"
    />
    <Button
      label="Безкоштовна консультація"
      variant="primary"
      icon="arrow"
      @click="handleClick"
    />
    <Button
      label="Закрити"
      variant="primary"
      icon="close"
      @click="handleClick"
    />
    <Button
      label="Надіслати"
      variant="primary"
      icon="send"
      @click="handleClick"
    />
  </div>
</template>
