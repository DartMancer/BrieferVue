<script setup lang="ts">
import TrashIcon from "@/assets/icons/Buttons/TrashIcon.vue";
import { useFormStore } from "@/entities/form";
import { TextBtn } from "./Buttons";

const { removeBlocks } = useFormStore();
</script>

<template>
  <a-flex class="editor-header" justify="flex-end" align="center">
    <!-- <span>Страница 1</span> -->
    <Transition name="fade" mode="out-in">
      <TextBtn class="error-btn" @click="removeBlocks">
        <span class="error-text">Очистить форму</span>
        <TrashIcon class="error-icon" />
      </TextBtn>
    </Transition>
  </a-flex>
</template>

<style lang="scss" scoped>
.editor-header {
  width: 100%;
  padding: 12px 25px 10px;
  border: solid 2px var(--accent-color);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  &.empty .error-btn {
    opacity: 0;
  }
}

.error-btn {
  .error-text {
    font-size: 14px;
    color: var(--error-color);
  }

  .error-icon {
    max-width: 14px;
    max-height: 14px;
    fill: var(--error-color);
  }
}

@media (max-width: 1280px) {
  .editor-header {
    padding: 12px 18px 10px;
  }
}

@media (max-width: 1024px) {
  .editor-header {
    padding: 4px 14px 2px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }

  .error-btn {
    padding: 10px 6px;

    .error-text {
      font-size: 10px;
    }

    .error-icon {
      max-width: 14px;
      max-height: 14px;
    }
  }
}

@media (max-width: 540px) {
  .editor-header {
    padding: 4px 12px 2px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  .error-btn {
    padding: 8px 4px;
  }
}
</style>
