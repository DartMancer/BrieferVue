<script lang="ts" setup>
import { nextTick, ref } from "vue";
import DragIcon from "@/assets/icons/Other/DragIcon.vue";
import { BlockConfiguration, useFormStore } from "@/entities/form";
import { BlockSettingsModal } from "@/features/Modals";
import BlockItemButtons from "./BlockItemButtons.vue";
import BlockItemContent from "./BlockItemContent.vue";
import SpecialItemContent from "./SpecialItemContent.vue";

const { setTempBlock } = useFormStore();

const props = defineProps<{ block: BlockConfiguration }>();

const modalVisible = ref<boolean>(false);
const openBlockRef = ref<HTMLElement | null>(null);

const openModal = () => {
  setTempBlock(props.block);
  modalVisible.value = true;
};

const close = () => nextTick(() => openBlockRef.value?.focus());
</script>

<template>
  <div
    ref="openBlockRef"
    :class="['block', { special: block.isSpecial }]"
    @click="openModal"
  >
    <a-flex class="move-icon drag-zone" justify="center" align="center">
      <DragIcon />
    </a-flex>
    <a-flex justify="space-between" align="center">
      <BlockItemContent v-if="!block.isSpecial" :block="block" />
      <SpecialItemContent v-else :block="block" />
      <BlockItemButtons :block="block" />
      <BlockSettingsModal
        v-model:modalVisible="modalVisible"
        :blockId="block.id"
        @close="close"
      />
    </a-flex>
  </div>
</template>

<style lang="scss" scoped>
.block {
  cursor: pointer;
  position: relative;
  width: 100%;
  padding: 17px 25px;
  background-color: var(--element-color);
  transition: 0.2s ease-in-out;

  &.special {
    padding: 23px 25px;
  }

  &:hover .move-icon {
    opacity: 1;
  }
}

.move-icon {
  cursor: move;
  position: absolute;
  top: 4px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.2s;

  & svg {
    width: 14px;
    height: 14px;
    fill: var(--accent-color);
  }
}

@media (max-width: 1280px) {
  .block {
    padding: 10px 20px;

    &.special {
      padding: 16px 20px;
    }
  }
}

@media (max-width: 1024px) {
  .block {
    padding: 5px 20px;

    &.special {
      padding: 6px 20px;
    }
  }

  .move-icon {
    top: 0px;
    opacity: 1;
    width: 36px;
    height: 24px;

    & svg {
      width: 12px;
      height: 12px;
    }
  }
}

@media (max-width: 540px) {
  .block {
    padding: 5px 15px;

    &.special {
      padding: 6px 15px;
    }
  }

  .move-icon {
    width: 30px;
    height: 20px;

    & svg {
      width: 10px;
      height: 10px;
    }
  }
}
</style>
