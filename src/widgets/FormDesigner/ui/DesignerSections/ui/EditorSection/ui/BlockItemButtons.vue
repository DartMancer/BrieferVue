<script lang="ts" setup>
import { ref } from "vue";
import { LoadingIndicator } from "@/shared/ui/Other";
import TrashIcon from "@/assets/icons/Buttons/TrashIcon.vue";
import CopyIcon from "@/assets/icons/Buttons/CopyIcon.vue";
import { BlockConfiguration, useFormStore } from "@/entities/form";

const { addBlock, removeBlock } = useFormStore();

const props = defineProps<{
  block: BlockConfiguration;
}>();

const isLoading = ref(false);

function handleCopy() {
  addBlock(props.block.type);
}

function handleRemove() {
  isLoading.value = true;
  removeBlock(props.block.id);
  isLoading.value = false;
}
</script>

<template>
  <a-flex v-if="!isLoading" class="icon-container">
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
  gap: 20px;
  opacity: 0;
  transition: opacity 0.3s;

  .btn {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border: 2px solid transparent;
    border-radius: 40px;
    padding: 0;

    svg {
      width: 20px;
      height: 20px;
      fill: var(--accent-color);
      stroke: var(--accent-color);
    }

    &:hover {
      border: 2px solid var(--hover-accent-color);

      svg {
        fill: var(--hover-accent-color);
        stroke: var(--hover-accent-color);
      }
    }

    &:active {
      transform: scale(0.85);
    }
  }
}

.block:hover .icon-container {
  opacity: 1;
}

@media (max-width: 1280px) {
  .icon-container {
    .btn {
      width: 35px;
      height: 35px;

      svg {
        width: 18px;
        height: 18px;
      }
    }
  }
}

@media (max-width: 1024px) {
  .icon-container {
    gap: 10px;
    opacity: 1;

    .btn {
      width: 50px;
      height: 50px;

      svg {
        width: 18px;
        height: 18px;
      }
    }
  }
}

@media (max-width: 540px) {
  .icon-container {
    .btn {
      width: 40px;
      height: 40px;

      svg {
        width: 16px;
        height: 16px;
      }
    }
  }
}
</style>
