<template>
    <div class="w-full max-w-[1240px] place-self-center">
        <!-- heading text -->
        <h2
            class="text-section-heading sm:text-section-heading-lg font-unbounded text-center sm:text-start"
        >
            КОНТАКТИ
        </h2>

        <!-- form container -->
        <div
            class="flex items-center justify-center mt-[25px] sm:mt-[46px] px-[42px] py-[45px] rounded-[50px] bg-[#D9F3EF]"
        >
            <!-- content -->
            <div
                class="max-w-[743px] w-full flex flex-col items-center justify-center gap-[25px] sm:gap-[37px]"
            >
                <p
                    class="max-w-[263px] sm:max-w-[605px] w-full text-[18px]/[100%] sm:text-[29px]/[100%] font-light text-center text-[#000000] font-unbounded"
                >
                    Зв'яжіться з нами! <br />
                    До Вашої мети — всього один клік!
                </p>

                <div class="flex flex-col gap-[20px] sm:gap-[23px] w-full">
                    <InputText
                        v-for="item in formInputs"
                        :key="item.id"
                        :name="item.name"
                        :placeholder="item.placeholder"
                        :size="item.size"
                        v-model="form[item.modelKey]"
                    />
                </div>

                <Button
                    @click="handleClick"
                    label="Надіслати"
                    variant="primary"
                    icon="send"
                    :size="isSmallScreen === true ? 'small' : 'medium'"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import InputText from '~/components/ui/InputText.vue';
import Button from '~/components/ui/Button.vue';
import { useMediaQuery } from '#imports';

const isSmallScreen = useMediaQuery('(max-width:768px)');

interface IForm {
    name: string;
    phone: string;
    email: string;
    text: string;
}

interface IInput {
    id: number;
    name: string;
    placeholder?: string;
    size: 'sm' | 'lg';
    modelKey: keyof IForm;
}

const form = reactive<IForm>({
    name: '',
    phone: '',
    email: '',
    text: '',
});

const formInputs = ref<IInput[]>([
    {
        id: 1,
        name: 'name',
        placeholder: "Ім'я",
        size: 'sm',
        modelKey: 'name',
    },
    {
        id: 2,
        name: 'phone',
        placeholder: 'Номер телефону*',
        size: 'sm',
        modelKey: 'phone',
    },
    {
        id: 3,
        name: 'email',
        placeholder: 'Email*',
        size: 'sm',
        modelKey: 'email',
    },
    {
        id: 4,
        name: 'message',
        placeholder: 'Повідомлення',
        size: 'lg',
        modelKey: 'text',
    },
]);

const handleClick = () => {
    console.log('Form data is ==> ', form);
};
</script>

<style scoped></style>
