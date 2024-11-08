<script lang="ts" setup>

import { storeToRefs } from 'pinia';
import { useScreenStore } from '@/entities/screen';
import MobileVersion from "@/components/layout/MobileVersion";

const screenStore = useScreenStore();
const { platform } = storeToRefs(screenStore);

</script>

<template>
    <div>
        <a-flex v-if="platform === 'mobile'" justify="center" align="center" class="gmain">
            <MobileVersion />
        </a-flex>
        <a-flex v-else justify="center" align="center" class="test">
            Form Templates
        </a-flex>
    </div>
</template>

<style lang="scss" scoped>
.test {
    height: 100vh;
    display: flex;
    font-size: 40px;
    color: var(--white-color);
}
</style>
