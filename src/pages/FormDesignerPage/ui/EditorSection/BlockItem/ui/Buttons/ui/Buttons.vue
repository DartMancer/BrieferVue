<script lang="ts" setup>
import { ref } from "vue";
import { LoadingIndicator } from "@/shared/ui";
import { BlockSettings } from "@/entities/form";
import TrashIcon from "@/assets/icons/TrashIcon.vue";
import CopyIcon from "@/assets/icons/CopyIcon.vue";

const props = defineProps<{
  element: BlockSettings;
  index: number;
}>();

const emit = defineEmits<{
  (e: "remove", index: number): void;
  (e: "duplicate", block: BlockSettings): void;
}>();

const isLoading = ref(false);

function duplicateBlock() {
  emit("duplicate", props.element);
}

function removeBlock() {
  isLoading.value = true;
  setTimeout(() => {
    emit("remove", props.index);
    isLoading.value = false;
  }, 500);
}
</script>

<template>
  <a-flex v-if="!isLoading" gap="middle" class="icon-container">
    <button class="duplicate-button" @click="duplicateBlock" @click.stop>
      <CopyIcon />
    </button>
    <button class="remove-button" @click="removeBlock" @click.stop>
      <TrashIcon />
    </button>
  </a-flex>
  <a-flex v-else>
    <LoadingIndicator class="loading" />
  </a-flex>
</template>

<style lang="scss" scoped>
.icon-container {
  opacity: 0;
  transition: opacity 0.3s;
}

.block:hover .icon-container {
  opacity: 1;
}

.remove-button,
.duplicate-button {
  cursor: pointer;
  border: none;
  background-color: transparent;

  & svg {
    width: 1.3vw;
    height: 1.3vw;
    fill: var(--accent-color);
  }
}

.loading {
  width: 3.2vw;
}
</style>
