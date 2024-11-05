<script setup lang="ts">
import { CompanyInfoComponent, DevelopProductsComponent, TechnologyStackComponent } from '@/pages/CompanyInfo/components';
</script>

<template>
    <a-flex vertical>
        <a-flex justify="space-evenly">
            <CompanyInfoComponent />
            <TechnologyStackComponent />
        </a-flex>
        <DevelopProductsComponent />
    </a-flex>
</template>

<style></style>