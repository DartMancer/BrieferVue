<script setup lang="ts">
import BrieferLogo from '@/components/common/BrieferLogo';
</script>

<template>
    <a-flex vertical justify="space-evenly" class="description">
        <BrieferLogo iconSize="5vw" fontSize="4vw" />
        <p class="description__text">Это веб-приложение для генерации технических заданий. Оно
            позволяет создавать кастомные анкеты с нуля или использовать готовые шаблоны.</p>
    </a-flex>
</template>

<style lang="scss" scoped>
.description {
    width: 40%;

    &__text {
        text-align: start;
        color: var(--white-color);
        font-size: 1.3vw;
        font-family: 'Nunito';
    }
}
</style>