<script lang="ts" setup>
import { onMounted, ref } from "vue";
import DragIcon from "@/assets/icons/Other/DragIcon.vue";
import {
  BlockSettings,
  BlockWithoutDivider,
  DividerBlock,
  useFormStore,
} from "@/entities/form";
import { BlockModal } from "@/widgets/Modals";
import Buttons from "./Buttons.vue";
import BlockItemContent from "./BlockItemContent.vue";
import SpecialItemContent from "./SpecialItemContent.vue";

defineProps<{ block: BlockSettings; index: number }>();

const modalVisible = ref<boolean>(false);
const openModal = () => (modalVisible.value = true);
const closeModal = () => (modalVisible.value = false);
</script>

<template>
  <div :class="['block', { special: block.isSpecial }]" @click="openModal">
    <a-flex class="move-icon drag-zone" justify="center" align="center">
      <DragIcon />
    </a-flex>
    <a-flex justify="space-between" align="center">
      <BlockItemContent v-if="!block.isSpecial" :block="block" />
      <SpecialItemContent v-else :block="block" />
      <Buttons :block="block" :index="index" />
      <!-- @remove="() => removeBlock(index)"
        @duplicate="() => addBlock(block)" -->
      <!-- <BlockModal
        v-model:modalVisible="modalVisible"
        :currentIndex="index"
        @closeModal="closeModal"
      /> -->
    </a-flex>
  </div>
</template>

<style lang="scss" scoped>
.block {
  cursor: pointer;
  position: relative;
  width: 100%;
  padding: 15px 25px;
  background-color: var(--element-color);
  transition: 0.2s ease-in-out;

  &.special {
    padding: 28px 25px;
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
      padding: 21px 20px;
    }
  }
}

@media (max-width: 1024px) {
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
    padding: 10px 15px;

    &.special {
      padding: 19px 15px;
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
