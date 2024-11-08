<script lang="ts" setup>

import { storeToRefs } from 'pinia';
import { useScreenStore } from '@/entities/screen';
import TechnologyStackComponent from '@/pages/CompanyInfo/components/TechnologyStackComponent';
import BriferGradientTitle from '@/components/common/BriferGradientTitle';
import DescriptionSection from '@/pages/ProductsPages/components/DescriptionSection';
import MobileVersion from "@/components/layout/MobileVersion";
import RouterBack from '@/components/common/RouterBack';
import FirstBrieferScreen from '@/assets/images/FirstBrieferScreen.webp';
import SecondBrieferScreen from '@/assets/images/SecondBrieferScreen.webp';
import ThirdBrieferScreen from '@/assets/images/ThirdBrieferScreen.webp';
import FourthBrieferScreen from '@/assets/images/FourthBrieferScreen.webp';
import DownloadButton from '@/pages/CompanyInfo/components/DevelopProductsComponent/components/DownloadButton';

const screenStore = useScreenStore();
const { platform } = storeToRefs(screenStore);

const productDetails = [
    {
        text: 'С помощью него можно собрать свою персонализированную анкету из предоставленных блоков ИЛИ...',
        image: FirstBrieferScreen,
        reverse: false,
    },
    {
        text: 'Использовать готовые шаблоны, которые мы заранее подготовили для Вас!',
        image: SecondBrieferScreen,
        reverse: true,
    },
    {
        text: 'Далее, готовую анкету можно отправить заказчику, чтобы он её заполнил.',
        image: ThirdBrieferScreen,
        reverse: false,
    },
    {
        text: 'После чего получаем готовое, оформленное техническое задание.',
        image: FourthBrieferScreen,
        reverse: true,
    },
];
</script>

<template>
    <RouterBack />
    <a-flex justify="center" align="center" vertical>
        <div class="briefer-page__main">
            <a-flex v-if="platform !== 'mobile'" class="briefer-page__body" align="center">
                <BriferGradientTitle :font-size="'8vw'" />
                <p class="briefer-page__title">Мы создаем продукт для качественной работы в сфере заказной разработки
                </p>
                <a-divider />
                <a-flex v-for="(details, index) in productDetails" :key="index" vertical align="center">
                    <DescriptionSection :text="details.text" :image="details.image" :reverse="details.reverse" />
                    <a-divider />
                </a-flex>
                <TechnologyStackComponent />
                <DownloadButton class="briefer-page__download-button" />
            </a-flex>
            <a-flex v-else class="briefer-page__body" justify="center" align="center">
                <MobileVersion />
            </a-flex>
        </div>
    </a-flex>
</template>

<style lang="scss" scoped>
.briefer-page {
    &__main {
        width: 90%;
        margin-top: 130px;
    }

    &__body {
        display: flex;
        flex-direction: column;
        color: var(--white-color);
    }

    &__title {
        width: 50%;
        font-size: 1.5vw;
        text-align: center;
    }

    &__download-button {
        margin-bottom: 70px;
    }
}
</style>