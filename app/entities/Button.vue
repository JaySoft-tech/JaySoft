<script setup lang="ts">
interface Props {
  label: string;
  variant?: 'primary' | 'secondary' | 'outline';
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
  if (!props.disabled) {
    emit('click');
  }
};

const variantClasses = {
  primary: 'bg-[#00B090]',
  secondary: 'bg-white text-[#00B090]',
  outline: 'bg-transparent text-[#00B090] border-2 border-[#00B090]',
};

const sizeClasses = {
  small: 'h-[35px] text-[12px] rounded-[18px]',
  medium: 'h-[43px] text-[14px] rounded-[23px]',
  large: 'h-[52px] text-[16px] rounded-[26px]',
};

const widthClasses = {
  small: 'w-[180px]',
  medium: 'w-[213px]',
  large: 'w-[250px]',
};

const circleSizeClasses = {
  small: 'w-[28px] h-[28px]',
  medium: 'w-[36px] h-[36px]',
  large: 'w-[44px] h-[44px]',
};

const buttonClasses = computed(() => [
  variantClasses[props.variant],
  sizeClasses[props.size],
  props.fullWidth ? 'w-full' : widthClasses[props.size],
  'inline-flex items-center',
  'font-medium',
  'focus:outline-none focus:ring-2 focus:ring-[#00B090] focus:ring-offset-2',
  props.disabled && 'opacity-50 cursor-not-allowed',
]);
</script>

<template>
  <button
    :class="buttonClasses"
    @click="handleClick"
    class="jaysoft-button"
    style="font-family: 'Unbounded', sans-serif"
  >
    <span class="button-text">{{ label }}</span>

    <span :class="['icon-wrapper', circleSizeClasses[size]]">
      <span class="expanding-bg" />

      <!-- Arrow Icon -->
      <svg
        v-if="icon === 'arrow'"
        class="icon-arrow"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M7 17 17 7" />
        <path d="M7 7h10v10" />
      </svg>

      <!-- Close Icon -->
      <svg
        v-if="icon === 'close'"
        class="icon-close"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M18 6L6 18" />
        <path d="M6 6L18 18" />
      </svg>

      <!-- Send Icon -->
      <svg
        v-if="icon === 'send'"
        class="icon-send"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
      >
        <path
          d="M19.7773,4.42984 C20.8652,3.97177 22.0315,4.8917 21.8394,6.05639 L19.5705,19.8131 C19.3517,21.1395 17.8949,21.9006 16.678,21.2396 C15.6597,20.6865 14.1489,19.8352 12.7873,18.9455 C12.1074,18.5012 10.0255,17.0766 10.2814,16.0625 C10.5002,15.1954 14.0001,11.9375 16.0001,10 C16.7857,9.23893 16.4279,8.79926 15.5001,9.5 C13.1985,11.2383 9.50332,13.8812 8.28136,14.625 C7.20323,15.2812 6.64031,15.3932 5.96886,15.2812 C4.74273,15.0769 3.60596,14.7605 2.67788,14.3758 C1.42351,13.8558 1.48461,12.132 2.67703,11.63 L19.7773,4.42984 Z "
        />
      </svg>
    </span>
  </button>
</template>

<style scoped>
.jaysoft-button {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  padding-left: 30px;
  padding-right: 8px;
  transition: color 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
}

.button-text {
  position: relative;
  z-index: 20;
  transition: color 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  text-align: left;
  flex-grow: 1;
}

.jaysoft-button.bg-\[\#00B090\] .button-text {
  color: white;
}

.jaysoft-button.bg-\[\#00B090\]:not(:disabled):hover .button-text {
  color: #00b090;
}

.icon-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: white;
  flex-shrink: 0;
  z-index: 10;
}

.expanding-bg {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background-color: white;
  transition: transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  z-index: 1;
}

.jaysoft-button:not(:disabled):hover .expanding-bg {
  transform: scale(15);
}

.icon-arrow,
.icon-close,
.icon-send {
  position: relative;
  z-index: 2;
  width: 16px;
  height: 16px;
  stroke: #00b090;
  transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  flex-shrink: 0;
}

.icon-send {
  fill: #1e96c8;
  stroke: none;
}

.icon-arrow {
  transform: rotate(0deg);
}

.jaysoft-button:not(:disabled):hover .icon-arrow {
  width: 20px;
  height: 20px;
  transform: rotate(45deg);
}

.jaysoft-button:not(:disabled):hover .icon-close,
.jaysoft-button:not(:disabled):hover .icon-send {
  width: 20px;
  height: 20px;
}
</style>
