<template>
    <input
        ref="inputRef"
        type="text"
        :name="name"
        :placeholder="placeholder"
        v-model="model"
        :disabled="disabled"
        :class="[
            'bg-[#FFFFFF] h-full rounded-[14px] w-full py-[10px] md:py-[23px] px-[17px] md:px-[36px] text-[#777777] text-[11px]/[100%] md:text-[22px]/[100%] font-light outline-none font-unbounded',
            sizeClass,
        ]"
    />
</template>

<script setup lang="ts">
interface InputProps {
    name: string;
    placeholder?: string;
    disabled?: boolean;
    size: 'sm' | 'lg';
}

const props = defineProps<InputProps>();
const model = defineModel<string>();
const inputRef = ref<HTMLInputElement | null>(null);

const sizeClass = computed(() => {
    return props.size === 'lg'
        ? 'max-h-[100px] md:max-h-[146px]'
        : 'max-h-[40px] md:max-h-[73px]';
});
</script>

<style scoped></style>
