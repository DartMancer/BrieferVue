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
    width: 100%;
    display: flex;
    padding: 5vw;
    justify-content: center;
    height: 100vh;

    &__title {
        text-align: center;
        font-family: 'Montserrat Alternates';
        color: var(--white-color);
        font-size: 5.2vw;
    }

    &__subtitle {
        text-align: center;
        color: var(--accent-color);
        font-size: 3.9vw;
    }
}
</style>