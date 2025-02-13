<script setup lang="ts">
import PlusIcon from "@/assets/icons/PlusIcon.vue";

const props = defineProps<{
  text: string;
  isIcon: boolean;
  callback: (payload: MouseEvent) => void;
}>();
</script>

<template>
  <button type="button" class="add-button" @click="props.callback">
    <a-flex gap="small" align="center">
      <PlusIcon v-if="props.isIcon" />
      <p class="add-button__text">{{ props.text }}</p>
    </a-flex>
  </button>
</template>

<style lang="scss" scoped>
.add-button {
  padding: 0;
  cursor: pointer;
  border: none;
  background: none;
  max-width: fit-content;

  &__text {
    font-family: "Montserrat Alternates";
    font-weight: 100;
    color: var(--white-color);
    margin: 0;
    font-size: 0.8vw;
  }

  & svg {
    max-width: 0.8vw;
    max-height: 0.8vw;
  }
}
</style>
