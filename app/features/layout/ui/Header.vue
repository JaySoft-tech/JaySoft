<template>
    <header
        class="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 **bg-transparent**"
    >
        <div class="mx-auto w-full max-w-[1720px] px-6">
            <div
                class="glass relative flex h-[72px] items-center justify-center rounded-full px-12 text-[14px] font-unbounded font-medium text-gray-900"
            >
                <nav class="absolute left-8 flex items-center gap-6">
                    <NuxtLink
                        v-for="link in navLinks"
                        :key="link.href"
                        :href="link.href"
                        class="transition-colors hover:text-primary"
                    >
                        {{ link.label }}
                    </NuxtLink>
                </nav>

                <NuxtLink
                    href="#hero"
                    class="flex items-center gap-3 text-base font-semibold text-gray-900"
                >
                    <NuxtImg
                        src="/images/logo.png"
                        width="36"
                        height="36"
                        alt="JaySoft logo"
                        class="h-9 w-9"
                    />
                    <span class="flex items-center text-gray-900">
                        <span>&lt;</span>
                        <span
                            ><span class="text-primary">Jay</span
                            ><span class="text-gray-900">Soft</span></span
                        >
                        <span>&gt;</span>
                    </span>
                </NuxtLink>

                <div class="absolute right-8 flex items-center gap-6">
                    <div
                        class="hidden items-center gap-2 text-[12px] font-medium uppercase tracking-wide text-gray-500 md:flex"
                    >
                        <span class="text-gray-900">Укр</span>
                        <span class="h-4 w-px rounded-full bg-gray-300"></span>
                        <span>Eng</span>
                    </div>

                    <NuxtLink
                        href="#contact"
                        class="group inline-flex h-[43px] w-[213px] items-center justify-between rounded-full bg-gradient-to-r from-primary to-[#02c9a8] px-5 text-[14px] font-medium text-white shadow-md transition duration-200 hover:shadow-lg"
                    >
                        <span class="leading-none text-left"
                            >Обговорити<br />проект</span
                        >
                        <span
                            class="ml-4 flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white text-primary transition-all duration-200 group-hover:w-[72px]"
                        >
                            <svg
                                class="h-[18px] w-[18px] -rotate-25 transition-transform duration-200 group-hover:translate-x-1.5"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2.2"
                            >
                                <path d="M8 12h8"></path>
                                <path d="M14 8l4 4-4 4"></path>
                            </svg>
                        </span>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
const navLinks = [
    { label: 'Проекти', href: '#projects' },
    { label: 'Послуги', href: '#services' },
    { label: 'Контакти', href: '#contact' },
];
</script>

<style scoped></style>
