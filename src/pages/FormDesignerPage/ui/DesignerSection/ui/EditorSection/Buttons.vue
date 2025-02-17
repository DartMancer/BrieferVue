<script lang="ts" setup>
import { ref } from "vue";
import { LoadingIndicator } from "@/shared/ui";
import TrashIcon from "@/assets/icons/Buttons/TrashIcon.vue";
import CopyIcon from "@/assets/icons/Buttons/CopyIcon.vue";
import { BlockSettings, useFormStore } from "@/entities/form";

const { addBlock, removeBlock } = useFormStore();

const props = defineProps<{
  block: BlockSettings;
  index: number;
}>();

const isLoading = ref(false);

function handleCopy() {
  addBlock(props.block.type);
}

function handleRemove() {
  isLoading.value = true;
  setTimeout(() => {
    removeBlock(props.index);
    isLoading.value = false;
  }, 500);
}
</script>

<template>
  <a-flex v-if="!isLoading" gap="middle" class="icon-container">
    <a-button class="btn" type="text" @click="handleCopy" @click.stop>
      <CopyIcon />
    </a-button>
    <a-button class="btn" type="text" @click="handleRemove" @click.stop>
      <TrashIcon />
    </a-button>
  </a-flex>
  <a-flex v-else class="loading">
    <LoadingIndicator />
  </a-flex>
</template>

<style lang="scss" scoped>
.icon-container {
  // opacity: 0;
  transition: opacity 0.3s;

  .btn {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 40px;
    padding: 0;

    svg {
      width: 25px;
      height: 25px;
      fill: var(--accent-color);
      stroke: var(--accent-color);
    }

    &:hover {
      svg {
        fill: var(--hover-accent-color);
        stroke: var(--hover-accent-color);
      }
    }
  }
}

.block:hover .icon-container {
  opacity: 1;
}
</style>
