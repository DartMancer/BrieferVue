<script lang="ts" setup>

import { storeToRefs } from 'pinia';
import { useScreenStore } from '@/entities/screen';
import BriferGradientTitle from '@/components/common/BriferGradientTitle';
import MobileVersion from "@/components/layout/MobileVersion";

const screenStore = useScreenStore();
const { platform } = storeToRefs(screenStore);

</script>


<template>
    <div>
        <a-flex v-if="platform !== 'mobile'" justify="center" align="center" class="main-page">
            <BriferGradientTitle :font-size="'15vw'" />
        </a-flex>
        <a-flex v-else justify="center" align="center" class="main-page">
            <MobileVersion />
        </a-flex>
    </div>
</template>

<style lang="scss" scoped>
.main-page {
    height: 100vh;
    display: flex;
    flex-direction: row;
    color: var(--white-color);
}

@media (max-width: 1208px) {
    .main-page {
        height: 100vh;
        display: flex;
        flex-direction: row;
        color: var(--white-color);
    }
}
</style>