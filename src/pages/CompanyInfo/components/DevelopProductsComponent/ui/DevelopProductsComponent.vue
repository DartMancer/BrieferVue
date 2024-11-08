<script setup lang="ts">
import BrieferLogo from '@/components/common/BrieferLogo/ui/BrieferLogo.vue';
import DescriptionBlock from '../components/DescriptionBlock';
import ProductButton from '../components/ProductButton';
import DownloadButton from '../components/DownloadButton';

</script>

<template>
    <div class="develop-products">
        <h1 class='develop-products__title'>Разрабатываемые продукты</h1>
        <a-flex class="product" gap="large" vertical>
            <a-flex class="product__content" justify="space-evenly" align="center">
                <BrieferLogo iconSize="60px" />
                <DescriptionBlock />
            </a-flex>
            <a-flex gap="large" justify="center" align="center">
                <DownloadButton />
                <ProductButton />
            </a-flex>
        </a-flex>
    </div>
</template>

<style lang="scss" scoped>
.develop-products {
    width: 100%;
    padding: 30px;
    background-color: var(--element-color);
    border-radius: 20px;

    & h1 {
        color: var(--white-color);
        font-size: 32px;
        margin-bottom: 30px;
        font-family: 'Montserrat Alternates';
    }
}

.product {
    padding: 30px;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='20' ry='20' stroke='%23959BCDFF' stroke-width='5' stroke-dasharray='20%2c20' stroke-dashoffset='5' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 20px;
}

@media (max-width: 1207px) {
    .develop-products h1 {
        color: var(--white-color);
        font-size: 28px;
        margin-bottom: 30px;
        font-family: 'Montserrat Alternates';
    }

    .product__content {
        flex-direction: column;
        gap: 40px;
    }

}
</style>