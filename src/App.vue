<script setup lang="ts">
import ruRU from "ant-design-vue/es/locale/ru_RU";
import "dayjs/locale/ru";
import Header from "./components/layout/Header";
import { onMounted, onUnmounted } from "vue";
import { useScreenStore } from '@/entities/screen';

const theme = {
    token: {
        colorError: "#be1d1d",
        colorPrimary: "#e7ef59",
        colorPrimaryHover: "#c4cf03",
    },
};

const screenStore = useScreenStore();
const { setPlatform } = screenStore;

const onResize = () => setPlatform(window.outerWidth);

onMounted(() => {
    setPlatform(window.innerWidth);
    window.addEventListener('resize', onResize);
});

onUnmounted(() => {
    window.removeEventListener('resize', onResize);
});

</script>

<template>
    <a-config-provider :theme="theme" :locale="ruRU">
        <a-app>
            <Header />
            <div class="main">
                <router-view v-slot="{ Component, route }">
                    <Transition appear>
                        <div :key="route.name">
                            <component :is="Component" />
                        </div>
                    </Transition>
                </router-view>
            </div>
        </a-app>
    </a-config-provider>
</template>

<style lang="scss">
@import url("./ui/theme/vars.scss");
@import url("./ui/theme/custom.scss");
@import url("./ui/theme/style.scss");
</style>

<style lang="scss" scoped>
.main {
    background-color: var(--background-color);
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
</style>
