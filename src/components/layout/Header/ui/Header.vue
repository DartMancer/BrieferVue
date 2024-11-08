<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { AppBtn } from '@/components/common';
import { BrieferLogo } from '@/components/common';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useScreenStore } from '@/entities/screen';

const screenStore = useScreenStore();
const { platform } = storeToRefs(screenStore);
const route = useRoute();

const headerClass = ref('fixed-header');
const headerHeight = ref('100px');
const headerIconSize = ref('60px');
const headerTextHeight = ref('40px');

const handleScroll = () => {
    if (window.scrollY > 20) {
        headerClass.value = 'fixed-header small-header';
        headerHeight.value = '70px';
        headerIconSize.value = '40px';
        headerTextHeight.value = '30px';
    } else {
        headerClass.value = 'fixed-header';
        headerHeight.value = '100px';
        headerIconSize.value = '60px';
        headerTextHeight.value = '40px';
    }
};

const updateResponsiveSizes = () => {
    if (window.innerWidth <= 1207) {
        headerIconSize.value = '40px';
        headerTextHeight.value = '30px';
    } else {
        handleScroll();
    }
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateResponsiveSizes);
    updateResponsiveSizes();
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('resize', updateResponsiveSizes);
});

const headerMenu = [
    { title: 'Создать анкету', path: '/form_designer' },
    { title: 'Шаблоны', path: '/form_templates' },
    { title: 'О нас', path: '/company_info' },
];

const isRouteActive = (path: string) => route.path === path;

</script>


<template>
    <header :class="headerClass" :style="{ height: headerHeight }">
        <div class="header-content">
            <a-flex v-if="platform !== 'mobile'" align="center" justify="space-between">
                <router-link to="/">
                    <AppBtn class="logo__button">
                        <BrieferLogo class="logo__icon" :iconSize="headerIconSize" :fontSize="headerTextHeight" />
                    </AppBtn>
                </router-link>
                <a-flex gap="middle" align="center">
                    <div v-for="(item, index) in headerMenu" :key="index">
                        <router-link :to="item.path" exact-active-class="active-link">
                            <AppBtn class="company_info_button" :class="{ 'disabled-link': isRouteActive(item.path) }"
                                :disabled="isRouteActive(item.path)">
                                {{ item.title }}
                            </AppBtn>
                        </router-link>
                    </div>
                </a-flex>
            </a-flex>
        </div>
        <!-- <a-divider /> -->
    </header>
</template>

<style lang="scss" scoped>
.fixed-header {
    position: fixed;
    left: 0;
    right: 0;
    border-bottom: solid var(--accent-color) 1px;
    background-color: var(--header-background-color);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    transition: height 0.3s ease;
    margin-bottom: 0px;
    align-content: center;

    &.small-header {
        height: 70px;
    }

    .header-content {
        width: 100%;
        padding: 10px;
        justify-content: space-between;
        align-content: center;
    }
}

.logo__button {
    background-color: transparent;
    border: none;
    padding: 30px;
}

.active-link .company_info_button,
.company_info_button:hover {
    color: var(--white-color);
    transform: scale(1.3);
    font-weight: bold;
}

.company_info_button {
    background-color: transparent;
    border: none;
    padding: 30px;
    color: var(--accent-color);
    font-family: 'Montserrat Alternates';
    font-weight: 500;
    transition: font-size 0.3s ease;
}

@media (max-width: 1207px) {
    .company_info_button {
        font-size: 14px;
    }
}
</style>
