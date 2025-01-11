<script setup lang="ts">
import BrieferLogoIcon from '@/assets/icons/BrieferLogoIcon.vue';

const props = withDefaults(defineProps<{
    iconSize?: string;
    fontSize?: string;
    color?: string;
}>(), {
    iconSize: '82px',
    fontSize: '40px',
    color: 'var(--white-color)',
});

</script>

<template>
    <a-flex align="center" class="d">
        <BrieferLogoIcon class="logo" :style="{ width: props.fontSize, height: props.iconSize, fill: props.color }" />
        <a-flex>
            <p :style="{ color: props.color, fontSize: props.fontSize }" class="logo_title__start">Brief</p>
            <p :style="{ color: props.color, fontSize: props.fontSize }" class="logo_title__end">er</p>
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
</style>