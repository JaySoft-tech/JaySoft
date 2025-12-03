<template>
    <footer>
        <div class="bg-primary/15 flex flex-col overflow-x-hidden h-[217px] sm:h-[145px] overflow-y-hidden">
            
            <div class="flex gap-4 items-center justify-center pt-8 sm:pt-0 sm:mt-[40px]">
                <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="bg-white hover:bg-primary hover:shadow-lg hover:shadow-primary p-2 rounded-md shadow transition group"
                >
                    <img
                        src="/images/facebook.png"
                        alt="Facebook"
                        class="w-5 h-5 group-hover:hidden"
                    />
                    <img
                        src="/images/facebook_hover.png"
                        alt="Facebook"
                        class="w-5 h-5 hidden group-hover:block"
                    />
                </a>
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="bg-white hover:bg-primary hover:shadow-lg hover:shadow-primary p-2 rounded-md shadow transition group"
                >
                    <img
                        src="/images/instagram.png"
                        alt="Instagram"
                        class="w-5 h-5 group-hover:hidden"
                    />
                    <img
                        src="/images/instagram_hover.png"
                        alt="Instagram"
                        class="w-5 h-5 hidden group-hover:block"
                    />
                </a>
                <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="bg-white hover:bg-primary hover:shadow-lg hover:shadow-primary p-2 rounded-md shadow transition group"
                >
                    <img
                        src="/images/linkedin.png"
                        alt="LinkedIn"
                        class="w-5 h-5 group-hover:hidden"
                    />
                    <img
                        src="/images/linkedin_hover.png"
                        alt="LinkedIn"
                        class="w-5 h-5 hidden group-hover:block"
                    />
                </a>
            </div>

            <div 
                class="flex flex-col items-center justify-center gap-1 mt-4 sm:hidden"
            >
                <a href="#" class="text-black font-unbounded font-light hover:underline text-base">
                    Політика конфіденційності
                </a>
                <a href="#" class="text-black font-unbounded font-light hover:underline text-base">
                    Умови використання
                </a>
                <p class="text-sm text-black font-unbounded font-light mt-4">
                    © 2025. JaySoft. All rights reserved
                </p>
            </div>

            <div class="hidden flex-grow sm:block"></div>
            
            <div class="hidden sm:w-full sm:flex sm:items-center sm:justify-between sm:px-10 sm:pt-8 sm:pb-4 sm:mb-[18px]">
                <p class="text-sm text-black font-unbounded font-light">
                    © 2025. JoySoft. All rights reserved
                </p>

                <div
                    class="flex gap-6 text-sm text-black font-unbounded font-light"
                >
                    <a href="#" class="hover:underline"
                        >Політика конфіденційності</a
                    >
                    <a href="#" class="hover:underline">Умови використання</a>
                </div>
            </div>
        </div>
    </footer>
</template>