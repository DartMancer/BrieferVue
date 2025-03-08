<script setup lang="ts">
import { ref } from "vue";
import PreviewIcon from "@/assets/icons/Buttons/PreviewIcon.vue";
import { usePreviewStore } from "@/entities/form";
import { PreviewModal } from "@/features/Modals";

const { initialize } = usePreviewStore();

const modalVisible = ref<boolean>(false);
const openBlockRef = ref<HTMLElement | null>(null);

const openModal = () => {
  initialize();
  modalVisible.value = true;
};
</script>

<template>
  <a-button ref="openBlockRef" class="preview-btn" @click="openModal">
    <PreviewIcon />
    <span class="btn-text">{{ $t.components.buttons.form.preview }}</span>
    <PreviewModal v-model:modalVisible="modalVisible" />
  </a-button>
</template>

<style lang="scss" scoped>
.preview-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  height: fit-content;

  .btn-text {
    font-size: 20px;
    color: var(--accent-color);
    transition: 0.3s ease-in-out;
  }

  svg {
    max-width: 22px;
    max-height: 22px;
    fill: var(--accent-color);
    transition: 0.3s ease-in-out;
  }

  &:hover {
    .btn-text {
      color: var(--white-color);
    }

    svg {
      fill: var(--white-color);
    }
  }
}

@media (max-width: 1280px) {
  .preview-btn {
    .btn-text {
      font-size: 16px;
    }

    svg {
      max-width: 18px;
      max-height: 18px;
    }
  }
}

@media (max-width: 1024px) {
  .preview-btn {
    .btn-text {
      font-size: 14px;
      color: var(--white-color);
    }

    svg {
      fill: var(--white-color);
    }
  }
}

@media (max-width: 540px) {
  .preview-btn {
    justify-content: center;
  }
}
</style>
