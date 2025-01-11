<script setup lang="ts">
import TrashIcon from "@/assets/icons/TrashIcon.vue";
import { useFormStore } from "@/entities/form";
import { TextBtn } from "./Buttons";

const store = useFormStore();
</script>

<template>
  <a-flex class="editor-header" justify="space-between" align="center">
    <span>Страница 1</span>
    <Transition name="fade" mode="out-in">
      <TextBtn class="error-btn" @click="store.removeBlocks">
        <span>Очистить форму</span>
        <TrashIcon />
      </TextBtn>
    </Transition>
  </a-flex>
</template>

<style lang="scss" scoped>
.editor-header {
  width: 100%;
  border-top-left-radius: 1vw;
  border-top-right-radius: 1vw;
  padding: 0.8vw 1.2vw;
  border: solid 0.15vw var(--accent-color);
  font-size: 0.8vw;

  &.empty .error-btn {
    opacity: 0;
  }
}

.error-btn {
  span {
    color: var(--error-color);
  }

  svg {
    max-width: 1vw;
    max-height: 1vw;
    fill: var(--error-color);
  }
}
</style>
