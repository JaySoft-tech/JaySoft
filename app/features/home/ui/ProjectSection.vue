<template>
    <section id="projects" class="w-full max-w-[1240px] mx-auto px-4 lg:px-8">
        <!-- Title -->
        <h2
            class="font-unbounded text-section-heading lg:text-section-heading-lg mb-8 lg:mb-12 text-center lg:text-left"
        >
            ПРОЄКТИ
        </h2>

        <!-- Filters (only on desktop) -->
        <div class="hidden lg:flex items-center justify-center gap-4 mb-10 lg:mb-14">
            <button
                v-for="filter in filters"
                :key="filter.id"
                @click="setActiveFilter(filter.id)"
                :class="[
                    'px-6 py-3 rounded-full text-[14px] lg:text-[16px] font-medium font-unbounded transition-all duration-300',
                    activeFilter === filter.id
                        ? 'bg-primary text-white'
                        : 'bg-white text-black border border-primary hover:border-primary hover:text-primary',
                ]"
            >
                {{ filter.label }}
            </button>
        </div>

        <!-- Project cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center py-4">
            <div
                v-for="project in filteredProjects"
                :key="project.id"
                class="bg-white w-full max-w-[400px] h-[466px] rounded-[14px] overflow-hidden flex flex-col"
                style="box-shadow: 0 0 15px 5px rgba(83, 83, 83, 0.15)"
            >
                <!-- Project image -->
                <div class="relative w-full h-[200px] overflow-hidden flex-shrink-0">
                    <img
                        :src="project.image"
                        :alt="project.title"
                        class="w-full h-full object-cover object-top"
                    />
                </div>

                <!-- Сontent cards -->
                <div class="p-5 lg:p-6 flex flex-col h-full">
                    <!-- Project title -->
                    <h3
                        class="text-[16px] font-medium font-unbounded text-black mb-3 leading-[100%] tracking-[0%]"
                    >
                        {{ project.title }}
                    </h3>

                    <!-- Description -->
                    <p
                        class="text-[12px] font-light font-unbounded text-gray-light leading-[100%] tracking-[0%] line-clamp-4 flex-grow"
                    >
                        {{ project.description }}
                    </p>

                    <!-- Metadata -->
                    <div
                        class="flex items-center justify-between text-[12px] font-light font-unbounded text-black leading-[100%] tracking-[0%] mb-4 mt-4 pt-4"
                    >
                        <div class="flex items-center gap-4">
                            <!-- Days -->
                            <div class="flex items-center gap-1">
                                <svg
                                    class="w-4 h-4"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 6v6l4 2" />
                                </svg>
                                <span>{{ project.days }} днів</span>
                            </div>

                            <!-- Developers -->
                            <div class="flex items-center gap-1">
                                <svg
                                    class="w-4 h-4"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                                    />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                                <span>{{ project.developers }} розробників</span>
                            </div>
                        </div>

                        <!-- Rating -->
                        <div class="flex items-center gap-1">
                            <svg
                                class="w-4 h-4 text-yellow-400 fill-current"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                                />
                            </svg>
                            <span class="text-[10px] font-normal leading-[100%] tracking-[0%]">{{ project.rating }}/5</span>
                        </div>
                    </div>

                    <!-- Line -->
                    <div class="w-[360px] max-w-full mx-auto border-t border-[#53535359] mb-4"></div>

                    <!-- Button -->
                    <div class="flex justify-center">
                        <button
                            @click="openProject(project.id)"
                            class="group w-[40px] h-[40px] rounded-full  flex items-center justify-center "
                        >
                            <img
                                src="/images/arrow-projects.png"
                                alt="Arrow"
                                class="w-[30.77px] h-[30.6px] transition-transform duration-300 "
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useMediaQuery } from '@vueuse/core';

interface Filter {
    id: string;
    label: string;
}

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    days: number;
    developers: number;
    rating: number;
    category: string;
}

const filters: Filter[] = [
    { id: 'landing', label: 'Лендінг' },
    { id: 'multipage', label: 'Багатосторінковий' },
    { id: 'ecommerce', label: 'Інтернет-магазин' },
];

const activeFilter = ref<string>('landing');

const projects: Project[] = [
    // Lendings
    {
        id: 1,
        title: 'Розробка лендінгу для TouchSkill',
        description:
            'Лендінг для курсів масажу, розроблений для збільшення кількості заявок і продажу навчальних програм. У проєкті реалізовано структуру з акцентом на перевагах курсу, відгуках і закликах до дії. Додано окремий блок для продажу книги',
        image: '/images/projects/touchskill.png',
        days: 14,
        developers: 2,
        rating: 4.9,
        category: 'landing',
    },
    {
        id: 2,
        title: 'Розробка лендінгу для Notekeeper',
        description:
            'Лендінг, що презентує веб-додаток для ведення нотаток, з акцентом на функціональність, зручність і залучення користувачів',
        image: '/images/projects/notekeeper.png',
        days: 20,
        developers: 2,
        rating: 5,
        category: 'landing',
    },
    {
        id: 3,
        title: 'Розробка лендінгу для GRILLI',
        description:
            'Лендінг для ресторану (сайт-презентація кухні), створений, щоб залучити відвідувачів, стимулювати замовлення столиків і демонструвати меню та фірмові страви',
        image: '/images/projects/grilli.png',
        days: 14,
        developers: 2,
        rating: 5,
        category: 'landing',
    },
    // Multipage
    {
        id: 4,
        title: 'Розробка корпоративного сайту для connected',
        description:
            'Ціль такого сайту: показати професійність освітньої платформи, надати всю інформацію потенційним клієнтам / студентам, зняти бар\'єр недовіри через прозорість політик та структуру, мотивувати зареєструватись або записуватись на курси',
        image: '/images/projects/connected.png',
        days: 30,
        developers: 2,
        rating: 5,
        category: 'multipage',
    },
    {
        id: 5,
        title: 'Розробка лендінгу для GRILLI',
        description:
            'Лендінг для ресторану (сайт-презентація кухні), створений, щоб залучити відвідувачів, стимулювати замовлення столиків і демонструвати меню та фірмові страви',
        image: '/images/projects/grilli.png',
        days: 14,
        developers: 2,
        rating: 5,
        category: 'multipage',
    },
    // Online stores
    {
        id: 6,
        title: 'Розробка інтернет-магазину SHOPPE',
        description:
            'Інтернет-магазин, створений для демонстрації асортименту товарів і стимулювання онлайн-продажів. Сайт має структуру класичного e-commerce рішення',
        image: '/images/projects/shoppe.png',
        days: 30,
        developers: 2,
        rating: 5,
        category: 'ecommerce',
    },
    {
        id: 7,
        title: 'Розробка інтернет-магазину VZUTTEVUY PROSPECT',
        description:
            'Інтернет-магазин взуття, розроблений для просування колекцій і онлайн-продажу моделей різних категорій',
        image: '/images/projects/vzuttevuy.png',
        days: 25,
        developers: 2,
        rating: 5,
        category: 'ecommerce',
    },
];


const isDesktop = useMediaQuery('(min-width: 1024px)');

const filteredProjects = computed(() => {
    if (isDesktop.value) {
        return projects.filter((project) => project.category === activeFilter.value);
    }
    return projects;
});

const setActiveFilter = (filterId: string) => {
    activeFilter.value = filterId;
};

const openProject = (projectId: number) => {
    console.log('Open project:', projectId);
};
</script>

