<script lang="ts" setup>
import { ref } from "vue";
import DragIcon from "@/assets/icons/DragIcon.vue";
import { BlockSettings, useFormStore } from "@/entities/form";
import { BlockModal } from "../../../Modals";
import Buttons from "./Buttons";
import BlockItemContent from "./BlockItemContent";

const store = useFormStore();
const props = defineProps<{ element: BlockSettings; index: number }>();

const modalVisible = ref<boolean>(false);

function openModal() {
  modalVisible.value = true;
}

function closeModal() {
  modalVisible.value = false;
}
</script>

<template>
  <button class="block" @click="openModal">
    <div class="move-icon">
      <DragIcon class="drag-zone" />
    </div>
    <a-flex justify="space-between" align="center">
      <BlockItemContent
        :element="props.element.generalSettings"
        :index="props.index"
      />
      <Buttons
        :element="props.element"
        :index="props.index"
        @remove="() => store.removeBlock(props.index)"
        @duplicate="() => store.addBlock(props.element)"
      />
      <BlockModal
        v-model:modalVisible="modalVisible"
        :currentIndex="props.index"
        @closeModal="closeModal"
      />
    </a-flex>
  </button>
</template>

<style lang="scss" scoped>
.block {
  cursor: pointer;
  position: relative;
  padding: 1vw 2.1vw;
  background-color: var(--element-color);
  border: none;
  border-bottom: solid 0.1vw var(--accent-color);
  width: 100%;
  transition: 0.3s ease-in-out;
}

.block:hover {
  box-shadow: 0 0 0.15vw var(--accent-color);
}

.block:hover .move-icon {
  opacity: 1;
}

.move-icon {
  position: absolute;
  top: 0.1vw;
  left: 50%;
  transform: translateX(-50%);
  cursor: grab;
  opacity: 0;
  transition: opacity 0.3s;

  & svg {
    width: 0.8vw;
    height: 0.8vw;
    fill: var(--accent-color);
  }
}
</style>
