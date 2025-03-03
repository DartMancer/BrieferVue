<script lang="ts" setup>
defineProps<{
  fontSize: string;
  gap: number;
}>();
</script>

<template>
  <a-flex
    justify="space-between"
    align="center"
    :gap="gap"
    class="gradient-title"
  >
    <span :class="'blue-gradient'" :style="{ fontSize: fontSize }"> B </span>
    <span :class="'purple-gradient'" :style="{ fontSize: fontSize }"> R </span>
    <span :class="'pink-gradient'" :style="{ fontSize: fontSize }"> I </span>
    <span :class="'bright-pink-gradient'" :style="{ fontSize: fontSize }">
      E
    </span>
    <span :class="'orange-gradient'" :style="{ fontSize: fontSize }"> F </span>
    <span :class="'bright-pink-gradient'" :style="{ fontSize: fontSize }">
      E
    </span>
    <span :class="'purple-gradient'" :style="{ fontSize: fontSize }"> R </span>
  </a-flex>
</template>

<style lang="scss" scoped>
.gradient-title {
  flex-direction: row;

  & span {
    color: black;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-background-clip: text;
    filter: drop-shadow(0px 3px 2px rgba(0, 0, 0, 0.1));
    font-family: "UEFA Playstrong";
  }
}

.blue-gradient {
  background: var(--blue-gradient);
  text-shadow: 0px 0px 100px var(--bright-turquoise-clr);
}

.purple-gradient {
  background: var(--purple-gradient);
  text-shadow: 0px 0px 100px var(--cornflower-blue-clr);
}

.pink-gradient {
  background: var(--pink-gradient);
  text-shadow: 0px 0px 100px var(--raspberry-pink-clr);
}

.bright-pink-gradient {
  background: var(--bright-pink-gradient);
  text-shadow: 0px 0px 100px var(--vivid-cerise-clr);
}

.orange-gradient {
  background: var(--orange-gradient);
  text-shadow: 0px 0px 100px var(--meteor-clr);
}
</style>
