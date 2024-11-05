<template>
    <a-flex class="description" justify="space-between" align="center">
        <div class="description__title">Описание</div>
        <div class="description__body">Briefer — это веб-приложение на Flutter для генерации технических заданий (ТЗ).
            Оно позволяет
            создавать кастомные анкеты с нуля или использовать готовые шаблоны.</div>
    </a-flex>
</template>

<style lang="scss" scoped>
.description {
    width: 45%;
    color: var(--white-color);

    &__title {
        margin-right: 25px;
        color: var(--accent-color);
        font-size: 20px;
        font-family: 'Montserrat Alternates';
    }

    &__body {
        color: var(--white-color);
        font-size: 16px;
        font-family: 'Nunito';
    }
}


@media (max-width: 1207px) {
    .description {
        width: 100%;
    }
}
</style>