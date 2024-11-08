<script lang="ts" setup>
import AppBtn from '../../AppBtn.vue';
import BackArrowIcon from '@/assets/icons/BackArrowIcon.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function routerBack() {
    router.back();
}

</script>

<template>
    <a-flex class="router-back-button" align="center">
        <AppBtn @click="routerBack">
            <BackArrowIcon class="router-back-button__arrow" />
            <p class="router-back-button__text">Назад</p>
        </AppBtn>
    </a-flex>
</template>

<style lang="scss" scoped>
.router-back-button {
    width: 90%;
    position: absolute;
    top: 130px;
    left: 5%;

    &__arrow {
        max-width: 15px;
        max-height: 15px;
        fill: var(--accent-color);
    }

    &__text {
        color: var(--accent-color);
        margin: 0;
        font-size: 15px;
    }
}

.btn {
    padding: 0;
    height: 1vw;
}
</style>