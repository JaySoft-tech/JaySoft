<template>
    <footer
        class="bg-primary/15 h-[145px] flex flex-col pt-8 pb-4 overflow-x-hidden"
    >
        <div class="flex gap-4 items-center justify-center">
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

        <div class="flex-grow"></div>

        <div class="w-full flex items-center justify-between px-10 ml-[100px]">
            <p class="text-sm text-black font-unbounded font-light">
                © 2025. JoySoft. All rights reserved
            </p>

            <div
                class="flex gap-6 text-sm text-black font-unbounded font-light mr-[100px]"
            >
                <a href="#" class="hover:underline"
                    >Політика конфіденційності</a
                >
                <a href="#" class="hover:underline">Умови використання</a>
            </div>
        </div>
    </footer>
</template>