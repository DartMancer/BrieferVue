<script lang="ts" setup>

import { storeToRefs } from 'pinia';
import { useScreenStore } from '@/entities/screen';
import { DesktopCompanyInfo, TabletCompanyInfo } from '../adaptive_blocks';
import MobileVersion from "@/components/layout/MobileVersion"
import Footer from '@/components/layout/Footer';

const screenStore = useScreenStore();
const { platform } = storeToRefs(screenStore);

</script>

<template>
    <a-flex vertical>
        <a-flex v-if="platform === 'desktop'" justify="center">
            <div class="main">
                <DesktopCompanyInfo />
            </div>
        </a-flex>
        <a-flex v-else-if="platform === 'tablet'" justify="center">
            <div class="main">
                <TabletCompanyInfo />
            </div>
        </a-flex>
        <a-flex v-else justify="center">
            <MobileVersion />
        </a-flex>
    </a-flex>
    <Footer />
</template>

<style lang="scss" scoped>
.main {
    width: 90%;
    margin: 120px 0 70px 0;
}
</style>