<script setup lang="ts">
import BrieferLogo from '@/components/common/BrieferLogo/ui/BrieferLogo.vue';
import DescriptionBlock from '../components/DescriptionBlock';
import DownloadButton from '../components/DownloadButton';

</script>

<template>
    <div class="develop-products">
        <h1 class="title">Разрабатываемые продукты</h1>
        <a-flex class="develop-products__content" justify="space-between" align="center">
            <BrieferLogo iconSize="60px" />
            <DescriptionBlock />
            <DownloadButton />
        </a-flex>
    </div>
</template>

<style lang="scss" scoped>
.develop-products {
    width: 100%;
    padding: 30px;
    background-color: var(--element-color);
    border-radius: 20px;
}

@media (max-width: 1207px) {
    .develop-products__content {
        flex-direction: column;
        gap: 40px;
    }
}

.title {
    color: var(--white-color);
    font-size: 32px;
    margin-bottom: 30px;
}
</style>