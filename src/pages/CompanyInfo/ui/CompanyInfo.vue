<script lang="ts" setup>

import { storeToRefs } from 'pinia';
import { useScreenStore } from '@/entities/screen';
import { DesktopCompanyInfo, TabletCompanyInfo, MobileCompanyInfo } from '../adaptive_blocks';

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
            <MobileCompanyInfo />
        </a-flex>
    </a-flex>
</template>

<style lang="scss" scoped>
.main {
    width: 80%;
    margin: 120px 0 70px 0;
}
</style>