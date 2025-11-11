<script setup lang="ts">
import Button from '~/components/ui/Button.vue';

interface Props {
  title: string;
  description: string;
  price: string;
}
const props = defineProps<Props>();

const emit = defineEmits<{
  buttonClick: [];
}>();

const handleButtonClick = () => {
  emit('buttonClick');
};
</script>

<template>
  <div
    class="relative w-full rounded-[14px] p-8 overflow-hidden"
    style="font-family: 'Unbounded', sans-serif"
  >
    <div
      class="absolute inset-0 z-0 rounded-[14px]"
      style="background-color: rgba(0, 176, 144, 0.15)"
    ></div>
    <div
      class="absolute top-8 right-12 opacity-15 z-10 w-[108px] h-[107px] sm:w-[62px] sm:h-[82px] sm:top-[20px] sm:right-[15px]"
    >
      <svg
        class="w-full h-full"
        viewBox="0 0 108 107"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path d="M54 1L106.5 106H1.5L54 1Z" stroke="white" stroke-width="2" />
      </svg>
    </div>

    <div class="relative z-20">
      <h3
        class="text-[32px] sm:text-[20px] font-light leading-normal text-black mb-6"
      >
        {{ title }}
      </h3>

      <p
        class="text-[16px] sm:text-[12px] font-normal leading-[1.3] text-[#777777] mb-8 max-w-[304px]"
        style="font-family: 'Manrope', sans-serif"
      >
        {{ description }}
      </p>

      <div class="flex items-center justify-between">
        <slot name="button">
          <Button
            label="Замовити"
            variant="lime"
            size="small"
            icon="arrow"
            @click="handleButtonClick"
          />
        </slot>

        <div
          class="text-[18px] sm:text-[14px] font-normal leading-normal text-black"
        >
          {{ price }}
        </div>
      </div>
    </div>
  </div>
</template>
