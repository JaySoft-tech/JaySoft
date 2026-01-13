<template>
    <header class="fixed top-0 left-0 w-full z-50 pt-6 px-6">
        <div class="mx-auto w-full max-w-[1320px]">
            <!-- Desktop Navigation -->
            <div
                class="hidden lg:flex glass-card h-[72px] items-center justify-between px-8 rounded-full font-unbounded"
            >
                <nav class="flex items-center gap-[35px]">
                    <p
                        v-for="link in desktopNavLinks"
                        :key="link.href"
                        @click="scrollTo(link.href)"
                        class="text-[14px] font-medium leading-[100%] text-black transition-colors duration-300 hover:text-primary cursor-pointer"
                    >
                        {{ link.label }}
                    </p>
                </nav>

                <NuxtLink
                    @click="scrollTo('hero')"
                    class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3 cursor-pointer"
                >
                    <img
                        src="/images/logo.svg"
                        alt="JaySoft logo"
                        class="h-36 w-36"
                    />
                </NuxtLink>

                <div class="flex items-center gap-6">
                    <div
                        class="flex items-center gap-2 text-[14px] font-medium"
                    >
                        <template
                            v-for="(lang, index) in langs"
                            :key="lang.key"
                        >
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

            <!-- Mobile/Tablet Header -->
            <div
                class="lg:hidden flex items-center justify-between z-[999] relative"
            >
                <NuxtLink @click="scrollTo('hero')" class="cursor-pointer">
                    <img
                        src="/images/logo.svg"
                        alt="JaySoft logo"
                        class="h-42 w-42"
                    />
                </NuxtLink>

                <button
                    @click="toggleMenu"
                    class="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center"
                    aria-label="Toggle menu"
                >
                    <div
                        v-if="!isMenuOpen"
                        class="flex flex-col gap-1.5 w-6 md:w-7"
                    >
                        <span
                            class="w-full h-0.5 bg-black transition-all"
                        ></span>
                        <span
                            class="w-full h-0.5 bg-black transition-all"
                        ></span>
                        <span
                            class="w-full h-0.5 bg-black transition-all"
                        ></span>
                    </div>

                    <div v-else class="relative w-6 h-6 md:w-7 md:h-7">
                        <span
                            class="absolute top-1/2 left-0 w-full h-0.5 bg-black rotate-45 transform -translate-y-1/2"
                        ></span>
                        <span
                            class="absolute top-1/2 left-0 w-full h-0.5 bg-black -rotate-45 transform -translate-y-1/2"
                        ></span>
                    </div>
                </button>
            </div>
        </div>

        <Transition name="menu">
            <div
                v-if="isMenuOpen"
                class="lg:hidden fixed inset-0 bg-white z-[900] flex flex-col"
            >
                <div
                    class="absolute inset-0 pointer-events-none"
                    style="
                        background: linear-gradient(
                            to top,
                            #00b090d9 0%,
                            transparent 50%
                        );
                    "
                ></div>

                <nav
                    class="relative mt-[92px] md:mt-[147px] px-[18px] md:px-[30px]"
                >
                    <button
                        v-for="(link, index) in mobileNavLinks"
                        :key="link.href"
                        @click="handleNavClick(link.href)"
                        :class="[
                            'block w-full text-left font-unbounded font-medium text-black hover:text-primary transition-colors duration-300',
                            'text-[18px] md:text-[24px] leading-[100%]',
                            index > 0 && 'mt-[30px] md:mt-[40px]',
                        ]"
                    >
                        {{ link.label }}
                    </button>
                </nav>

                <div class="relative mt-auto mb-0">
                    <img
                        src="/images/hero-bg.png"
                        alt="Robot"
                        class="w-[348px] h-[349px] md:w-[447px] md:h-[448px] ml-[42px] md:ml-[297px] object-contain block"
                    />
                </div>
            </div>
        </Transition>
    </header>
</template>

<script setup lang="ts">
import Button from '~/components/ui/Button.vue';
import { scrollTo } from '#imports';

type LangKey = 'ukr' | 'eng';

const desktopNavLinks = [
    { label: 'Проєкти', href: 'projects' },
    { label: 'Послуги', href: 'services' },
    { label: 'Контакти', href: 'contacts' },
];

const mobileNavLinks = [
    { label: 'ПРО НАС', href: 'about' },
    { label: 'ПРОЄКТИ', href: 'projects' },
    { label: 'ПОСЛУГИ', href: 'services' },
    { label: 'КОНТАКТИ', href: 'contacts' },
];

const langs: { key: LangKey; label: string }[] = [
    { key: 'ukr', label: 'Укр' },
    { key: 'eng', label: 'Eng' },
];

const currentLang = ref<LangKey>('ukr');
const isMenuOpen = ref(false);

const handleContactClick = () => {
    console.log('Contact button clicked');
};

const switchLang = (lang: LangKey) => {
    currentLang.value = lang;
    console.log(`Switched to language: ${lang}`);
};

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
    document.body.style.overflow = isMenuOpen.value ? 'hidden' : '';
};

const handleNavClick = (href: string) => {
    scrollTo(href);
    toggleMenu();
};

const getLangButtonClasses = (langKey: LangKey) => {
    const isActive = currentLang.value === langKey;
    return [
        'w-[28px] h-[15px] flex items-center justify-center transition-all duration-300',
        isActive
            ? 'text-primary scale-110 border-b-2 border-primary'
            : 'text-black hover:text-primary hover:scale-105 hover:border-b-2 hover:border-primary/50',
    ];
};

onUnmounted(() => {
    document.body.style.overflow = '';
});
</script>

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

.menu-enter-active,
.menu-leave-active {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.menu-enter-from {
    opacity: 0;
    transform: translateY(-20px);
}

.menu-leave-to {
    opacity: 0;
    transform: translateY(-20px);
}

.menu-enter-to,
.menu-leave-from {
    opacity: 1;
    transform: translateY(0);
}
</style>
