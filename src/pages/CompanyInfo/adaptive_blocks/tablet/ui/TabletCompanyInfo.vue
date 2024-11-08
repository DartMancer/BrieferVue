<script setup lang="ts">

import DescriptionBlock from '@/pages/CompanyInfo/components/DevelopProductsComponent/components/DescriptionBlock';
import CarouselBlock from '@/pages/CompanyInfo/components/DevelopProductsComponent/components/CarouselBlock';
import { useRouter } from 'vue-router';

const router = useRouter();
function pushToBrieferPage() {
    router.push('/briefer_page');
};

</script>

<template>
    <a-flex vertical class="desktop">
        <div class="develop-products">
            <h1 class='develop-products__title'>Разрабатываемые продукты</h1>
        </div>
        <button @click="pushToBrieferPage" class="product_button">
            <slot />
            <a-flex class="product" justify="space-between">
                <DescriptionBlock />
                <CarouselBlock />
            </a-flex>
        </button>
    </a-flex>
</template>

<style lang="scss" scoped>
.desktop {
    min-height: 100vh;
}
</style>

<style lang="scss" scoped>
.develop-products {
    width: 100%;
    padding: 1.5vw;
    margin-bottom: 1.5vw;
    border-radius: 1vw;
    background-color: var(--element-color);

    & h1 {
        color: var(--white-color);
        margin-bottom: 0;
        font-size: 2.2vw;
        font-family: 'Montserrat Alternates';
    }
}

.product {
    width: 100%;
    padding: 2vw;
    border-radius: 1vw;
    background-color: var(--element-color);
    cursor: pointer;
}

.product_button {
    border: none;
    background-color: transparent;
}
</style>