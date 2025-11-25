<script setup lang="ts">
import Button from '~/components/ui/Button.vue';

type LangKey = 'ukr' | 'eng';

const navLinks = [
  { label: 'Проєкти', href: '#projects' },
  { label: 'Послуги', href: '#services' },
  { label: 'Контакти', href: '#contact' },
];

const langs: { key: LangKey; label: string }[] = [
  { key: 'ukr', label: 'Укр' },
  { key: 'eng', label: 'Eng' },
];

const currentLang = ref<LangKey>('ukr');

const handleContactClick = () => {
  console.log('Contact button clicked');
};

const switchLang = (lang: LangKey) => {
  currentLang.value = lang;
  console.log(`Switched to language: ${lang}`);
};

const getLangButtonClasses = (langKey: LangKey) => {
  const baseClasses =
    'w-[28px] h-[15px] flex items-center justify-center transition-all duration-300';
  const activeClasses = 'text-primary scale-110 border-b-2 border-primary';
  const inactiveClasses =
    'text-black hover:text-primary hover:scale-105 hover:border-b-2 hover:border-primary/50';

  return [
    baseClasses,
    currentLang.value === langKey ? activeClasses : inactiveClasses,
  ];
};
</script>

<template>
  <header class="fixed top-0 left-0 w-full z-50 pt-6 px-6">
    <div class="mx-auto w-full max-w-[1320px]">
      <div
        class="hidden lg:flex glass-card h-[72px] items-center justify-between px-8 rounded-full font-unbounded"
      >
        <nav class="flex items-center gap-[35px]">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-[14px] font-medium leading-[100%] text-black transition-colors duration-300 hover:text-primary"
          >
            {{ link.label }}
          </a>
        </nav>

        <NuxtLink
          href="#hero"
          class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3"
        >
          <img src="/images/logo.svg" alt="JaySoft logo" class="h-36 w-36" />
        </NuxtLink>

        <div class="flex items-center gap-6">
          <div class="flex items-center gap-2 text-[14px] font-medium">
            <template v-for="(lang, index) in langs" :key="lang.key">
              <button
                @click="switchLang(lang.key)"
                :class="getLangButtonClasses(lang.key)"
              >
                {{ lang.label }}
              </button>
              <span
                v-if="index < langs.length - 1"
                class="w-px h-4 bg-gray-300"
              ></span>
            </template>
          </div>

          <Button
            label="Обговорити проєкт"
            variant="primary"
            icon="arrow"
            @click="handleContactClick"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: 0.5px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.5),
    inset 0 -1px 0 rgba(255, 255, 255, 0.1),
    inset 0 0 2px 1px rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}

.glass-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.8),
    transparent
  );
}

.glass-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.8),
    transparent,
    rgba(255, 255, 255, 0.3)
  );
}
</style>
