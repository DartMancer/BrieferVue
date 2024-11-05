<template>
    <div class="placeholder">
        <a-flex vertical justify="center">
            <div class="placeholder__title">Мобильная версия в разработке</div>
            <div class="placeholder__subtitle">Посетите эту страницу с компьютера</div>
        </a-flex>
    </div>
</template>

<style scoped lang="scss">
.placeholder {
    width: 90%;
    display: flex;
    justify-content: center;
    height: 100vh;
    font-size: 1.5rem;

    &__title {
        text-align: center;
        font-family: 'Montserrat Alternates';
        color: var(--white-color);
        font-size: 1.7rem;
    }

    &__subtitle {
        text-align: center;
        color: var(--accent-color);
        font-size: 1.4rem;
    }
}
</style>