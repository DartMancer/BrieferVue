<script setup lang="ts">
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';
import FirstBrieferScreen from '@/assets/images/FirstBrieferScreen.webp';
import SecondBrieferScreen from '@/assets/images/SecondBrieferScreen.webp';
import ThirdBrieferScreen from '@/assets/images/ThirdBrieferScreen.webp';
import FourthBrieferScreen from '@/assets/images/FourthBrieferScreen.webp';
</script>

<template>
    <div class="carousel">
        <a-carousel arrows>
            <template #prevArrow>
                <div class="custom-slick-arrow" style="left: 1vw">
                    <left-circle-outlined />
                </div>
            </template>
            <template #nextArrow>
                <div class="custom-slick-arrow" style="right: 1vw">
                    <right-circle-outlined />
                </div>
            </template>
            <img class="carousel__screens" :src="FirstBrieferScreen" />
            <img class="carousel__screens" :src="SecondBrieferScreen" />
            <img class="carousel__screens" :src="ThirdBrieferScreen" />
            <img class="carousel__screens" :src="FourthBrieferScreen" />
        </a-carousel>
    </div>
</template>

<style lang="scss" scoped>
.carousel {
    width: 55%;

    &__screens {
        border-radius: 1vw;
    }
}


:deep(.slick-arrow.custom-slick-arrow) {
    width: 25px;
    height: 25px;
    font-size: 25px;
    color: #fff;
    background-color: rgba(31, 45, 61, 0.11);
    transition: ease all 0.3s;
    opacity: 0.5;
    z-index: 1;
}

:deep(.slick-arrow.custom-slick-arrow:before) {
    display: none;
}

:deep(.slick-arrow.custom-slick-arrow:hover) {
    color: #fff;
    opacity: 0.5;
}

@media(max-width: 1207px) {
    :deep(.slick-arrow.custom-slick-arrow) {
        opacity: 0;
    }
}
</style>