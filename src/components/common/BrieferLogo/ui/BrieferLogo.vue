<script setup lang="ts">
import { defineProps } from 'vue';
import BrieferLogoIcon from '@/assets/icons/BrieferLogoIcon.vue';

const props = withDefaults(defineProps<{
    iconSize?: string;
    fontSize?: string;
    color?: string;
    desktopIconSize?: string;
    tabletIconSize?: string;
}>(), {
    iconSize: '82px',
    fontSize: '40px',
    color: 'var(--white-color)',
    tabletIconSize: '10px',
    tabletFontSize: '10px',
});

</script>

<template>
    <a-flex align="center" class="d">
        <BrieferLogoIcon class="logo" :style="{ width: props.iconSize, height: props.iconSize, fill: props.color }" />
        <a-flex>
            <h1 :style="{ color: props.color, fontSize: props.fontSize }" class="logo_title__start">Brief</h1>
            <h1 :style="{ color: props.color, fontSize: props.fontSize }" class="logo_title__end">er</h1>
        </a-flex>
    </a-flex>
</template>

<style lang="scss" scoped>
.logo {
    margin-right: 10px;
}

.logo_title {

    &__start {
        font-family: 'Montserrat Alternates';
        font-weight: bold;
        margin: 0;
        transition: height 0.3s ease;
    }

    &__end {
        font-family: 'Montserrat Alternates';
        font-style: italic;
        font-weight: 200;
        margin: 0;
        transition: height 0.3s ease;
    }

}

@media (max-width: 1207px) {
    .logo {
        width: 10px;
        height: 10px;
    }

    .logo_title {

        &__start,
        &__end {
            font-size: 10px;
        }
    }
}
</style>