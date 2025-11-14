<template>
    <section class="relative bg-white min-h-screen overflow-hidden">
        <div
            class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-44 pb-20"
        >
            <div class="grid grid-cols-1 lg:grid-cols-2">
                <div class="max-w-lg">
                    <h1
                        class="text-6xl font-unbounded font-medium text-gray-900 leading-none mb-6"
                    >
                        СТУДІЯ <br />
                        РОЗРОБКИ <br />
                        ВЕБ САЙТІВ
                    </h1>
                    <p
                        class="text-2xl text-gray-600 mb-10 font-light font-unbounded"
                    >
                        Розробляємо функціональні сайти для бізнесу та брендів
                    </p>
                    <a
                        href="#"
                        class="inline-flex items-center px-6 py-3 bg-primary text-white font-bold rounded-full shadow-lg hover:shadow-xl transition duration-300"
                    >
                        Безкоштовна консультація
                        <span class="ml-2 text-xl">→</span>
                    </a>
                </div>

                <div></div>
            </div>
        </div>

        <div class="absolute inset-0 z-5">
            <div class="absolute inset-y-0 right-0 w-full lg:w-4/5">
                <img
                    src="/images/background_1.png"
                    alt="Background glow"
                    class="absolute inset-0 w-full h-full **object-cover** object-right-top"
                />
            </div>

            <div class="absolute inset-y-0 right-0 w-full lg:w-3/5">
                <img
                    src="/images/img_1.png"
                    alt="AI Robot"
                    class="absolute inset-0 w-full h-full object-contain object-right-top"
                />
            </div>
        </div>

        <div
            class="absolute bottom-[-10px] left-0 right-0 z-0 pointer-events-none"
        >
            <div
                class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-start items-end"
            >
                <span
                    class="text-[180px] sm:text-[250px] font-extrabold text-primary opacity-40 leading-none translate-x-[-10px]"
                >
                    JAY
                </span>
                <span
                    class="text-[180px] sm:text-[250px] font-extrabold text-black opacity-40 leading-none translate-x-[-50px]"
                >
                    SOFT
                </span>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts"></script>
