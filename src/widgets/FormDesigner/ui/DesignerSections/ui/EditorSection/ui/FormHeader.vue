<script setup lang="ts">
import TrashIcon from "@/assets/icons/Buttons/TrashIcon.vue";
import { useFormStore } from "@/entities/form";

const { removeBlocks } = useFormStore();
</script>

<template>
  <a-flex class="editor-header" justify="flex-end" align="center">
    <Transition name="fade" mode="out-in">
      <a-button class="error-btn" @click="removeBlocks" type="text">
        <span class="error-text">Очистить форму</span>
        <TrashIcon class="error-icon" />
      </a-button>
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
  display: flex;
  align-items: center;
  height: fit-content;
  padding: 4px;
  gap: 5px;

  .error-text {
    font-size: 14px;
    color: var(--error-color);
  }

  .error-icon {
    max-width: 14px;
    max-height: 14px;
    fill: var(--error-color);
  }

  &:hover {
    background-color: transparent;
  }
}

@media (max-width: 1280px) {
  .editor-header {
    padding: 10px 14px;
  }

  .error-btn {
    padding: 4px;

    .error-text {
      font-size: 12px;
    }
  }
}

@media (max-width: 1024px) {
  .editor-header {
    padding: 0 14px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }

  .error-btn {
    padding: 10px 6px;

    .error-text {
      font-size: 12px;
    }

    .error-icon {
      max-width: 14px;
      max-height: 14px;
    }
  }
}

@media (max-width: 540px) {
  .editor-header {
    padding: 0px 12px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  .error-btn {
    padding: 8px 4px;

    .error-text {
      font-size: 10px;
    }

    .error-icon {
      max-width: 13px;
      max-height: 13px;
    }
  }
}
</style>
