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
        <span class="error-text">Очистить форму</span>
        <TrashIcon />
      </TextBtn>
    </Transition>
  </a-flex>
</template>

<style lang="scss" scoped>
.editor-header {
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 16px 24px;
  border: solid 3px var(--accent-color);
  border-bottom: none;
  font-size: 15px;

  &.empty .error-btn {
    opacity: 0;
  }
}

.error-btn {
  span {
    font-size: 15px;
    color: var(--error-color);
  }

  svg {
    max-width: 20px;
    max-height: 20px;
    fill: var(--error-color);
  }
}
</style>
