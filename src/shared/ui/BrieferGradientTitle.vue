<script lang="ts" setup>
const props = withDefaults(defineProps<{
    fontSize?: string;
}>(), {
    fontSize: '300px',
});
</script>

<template>
    <a-flex gap="large" justify="space-between" align="center" class="gradient-title">
        <p :class="'blue-gradient'" :style="{ fontSize: props.fontSize }">B</p>
        <p :class="'purple-gradient'" :style="{ fontSize: props.fontSize }">R</p>
        <p :class="'pink-gradient'" :style="{ fontSize: props.fontSize }">I</p>
        <p :class="'bright-pink-gradient'" :style="{ fontSize: props.fontSize }">E</p>
        <p :class="'orange-gradient'" :style="{ fontSize: props.fontSize }">F</p>
        <p :class="'bright-pink-gradient'" :style="{ fontSize: props.fontSize }">E</p>
        <p :class="'purple-gradient'" :style="{ fontSize: props.fontSize }">R</p>
    </a-flex>
</template>

<style lang="scss" scoped>
.gradient-title {

    flex-direction: row;

    & p {
        color: black;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        -webkit-background-clip: text;
        filter: drop-shadow(0px 3px 2px rgba(0, 0, 0, 0.1));
        font-family: 'UEFA Playstrong';
        padding: 0;
        margin: 0;

    }
}

.blue-gradient {
    background: var(--blue-gradient);
    text-shadow: 0px 0px 250px var(--bright-turquoise-clr);
}

.purple-gradient {
    background: var(--purple-gradient);
    text-shadow: 0px 0px 250px var(--cornflower-blue-clr);
}

.pink-gradient {
    background: var(--pink-gradient);
    text-shadow: 0px 0px 250px var(--raspberry-pink-clr);
}

.bright-pink-gradient {
    background: var(--bright-pink-gradient);
    text-shadow: 0px 0px 250px var(--vivid-cerise-clr);
}

.orange-gradient {
    background: var(--orange-gradient);
    text-shadow: 0px 0px 250px var(--meteor-clr);
}
</style>