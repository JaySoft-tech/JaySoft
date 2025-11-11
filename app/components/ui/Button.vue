<script setup lang="ts">
interface Props {
  label: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'lime';
  size?: 'small' | 'medium' | 'large';
  icon?: 'arrow' | 'close' | 'send';
  fullWidth?: boolean;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'medium',
  icon: 'arrow',
  fullWidth: false,
  disabled: false,
});

const emit = defineEmits<{
  click: [];
}>();

const handleClick = () => {
  if (!props.disabled) emit('click');
};

const variantClasses: Record<string, string> = {
  primary: 'bg-primary text-white hover:text-primary group',
  secondary:
    'bg-white text-primary border border-primary hover:bg-primary hover:text-white group',
  outline:
    'bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white group',
  lime: 'bg-lime text-black hover:text-white group',
};

const sizeClasses: Record<string, string> = {
  small: 'h-[28px] text-[12px] rounded-[18px] pl-[14px] pr-[2px]',
  medium: 'h-[43px] text-[14px] rounded-[23px] pl-[30px] pr-[8px]',
  large: 'h-[52px] text-[16px] rounded-[26px] pl-[30px] pr-[8px]',
};

const widthClasses: Record<string, string> = {
  small: 'w-[128px]',
  medium: 'w-[213px]',
  large: 'w-[250px]',
};

const circleSizeClasses: Record<string, string> = {
  small: 'w-[20px] h-[20px]',
  medium: 'w-[36px] h-[36px]',
  large: 'w-[44px] h-[44px]',
};

const buttonClasses = computed(() => [
  variantClasses[props.variant],
  sizeClasses[props.size],
  props.fullWidth ? 'w-full' : widthClasses[props.size],
  'inline-flex items-center justify-start font-medium relative overflow-hidden isolation-isolate transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
  props.disabled && 'opacity-50 cursor-not-allowed',
]);
</script>

<template>
  <button
    :class="buttonClasses"
    @click="handleClick"
    :disabled="disabled"
    style="font-family: 'Unbounded', sans-serif"
  >
    <span
      class="relative z-20 flex-grow text-left transition-colors duration-300"
    >
      {{ label }}
    </span>

    <span
      class="relative z-10 flex items-center justify-center rounded-full flex-shrink-0 transition-transform duration-300 ease-in-out"
      :class="[
        circleSizeClasses[size],
        variant === 'lime' ? 'bg-primary' : 'bg-white',
      ]"
    >
      <span
        class="absolute inset-0 rounded-full transform scale-100 transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[15] z-[1]"
        :class="variant === 'lime' ? 'bg-primary' : 'bg-white'"
      ></span>

      <!-- Arrow Icon -->
      <svg
        v-if="icon === 'arrow'"
        class="relative z-[2] w-4 h-4 transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:w-5 group-hover:h-5 group-hover:rotate-45"
        :class="variant === 'lime' ? 'stroke-white' : 'stroke-primary'"
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M7 17 17 7" />
        <path d="M7 7h10v10" />
      </svg>

      <!-- Close Icon -->
      <svg
        v-else-if="icon === 'close'"
        class="relative z-[2] w-4 h-4 stroke-primary transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:w-5 group-hover:h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M18 6L6 18" />
        <path d="M6 6L18 18" />
      </svg>

      <!-- Send Icon -->
      <svg
        v-else-if="icon === 'send'"
        class="relative z-[2] w-4 h-4 fill-sky-500 transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:w-5 group-hover:h-5"
        viewBox="0 0 24 24"
      >
        <path
          d="M19.7773,4.42984 C20.8652,3.97177 22.0315,4.8917 21.8394,6.05639 L19.5705,19.8131 C19.3517,21.1395 17.8949,21.9006 16.678,21.2396 C15.6597,20.6865 14.1489,19.8352 12.7873,18.9455 C12.1074,18.5012 10.0255,17.0766 10.2814,16.0625 C10.5002,15.1954 14.0001,11.9375 16.0001,10 C16.7857,9.23893 16.4279,8.79926 15.5001,9.5 C13.1985,11.2383 9.50332,13.8812 8.28136,14.625 C7.20323,15.2812 6.64031,15.3932 5.96886,15.2812 C4.74273,15.0769 3.60596,14.7605 2.67788,14.3758 C1.42351,13.8558 1.48461,12.132 2.67703,11.63 L19.7773,4.42984 Z"
        />
      </svg>
    </span>
  </button>
</template>
