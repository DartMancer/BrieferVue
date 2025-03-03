import { ref, watch, nextTick } from "vue";

import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";

import { BLOCKS_LIST } from "@/shared/constants";
import { BlockConfiguration, BlockType } from "../types";

export const useFormStore = defineStore("formDesigner", () => {
  const formBlocks = ref<BlockConfiguration[]>([]);
  const draggedBlock = ref<BlockConfiguration | null>(null);
  const tempBlock = ref<BlockConfiguration | null>(null);
  const saveBtnStatus = ref<boolean>(false);

  const initialize = () => {
    const savedFormBlocks = sessionStorage.getItem("formBlocks");
    if (savedFormBlocks) formBlocks.value = JSON.parse(savedFormBlocks);
  };

  const setDraggedBlock = (block: BlockConfiguration | null) => {
    draggedBlock.value = block;
  };

  const addBlock = (type: BlockType) => {
    const block = BLOCKS_LIST.value.find((block) => block.type === type);
    if (block) {
      formBlocks.value.push({ ...block, id: uuidv4() });
    }

    nextTick(() => {
      const lastBlock = document.querySelector(".last-form-block");

      if (lastBlock) {
        lastBlock.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
      }
    });
  };

  const removeBlock = (id: string) => {
    const index = formBlocks.value.findIndex((block) => block.id === id);
    if (index !== -1) formBlocks.value.splice(index, 1);
  };

  const removeBlocks = () => {
    tempBlock.value = null;
    formBlocks.value = [];
  };

  const setTempBlock = (block: BlockConfiguration | null) => {
    tempBlock.value = block ? JSON.parse(JSON.stringify(block)) : null;
  };

  const saveTempBlock = (id: string) => {
    if (tempBlock.value) {
      const index = formBlocks.value.findIndex((block) => block.id === id);
      if (index !== -1) formBlocks.value[index] = { ...tempBlock.value };
      console.log(formBlocks.value);
      clearTempBlock();
    }
  };

  const clearTempBlock = () => {
    tempBlock.value = null;
  };

  const toggleSaveBtnStatus = (status: boolean) =>
    (saveBtnStatus.value = status);

  watch(
    formBlocks,
    (newFormBlocks) => {
      sessionStorage.setItem("formBlocks", JSON.stringify(newFormBlocks));
    },
    { deep: true }
  );

  return {
    formBlocks,
    draggedBlock,
    tempBlock,
    saveBtnStatus,
    initialize,
    addBlock,
    removeBlock,
    removeBlocks,
    setDraggedBlock,
    setTempBlock,
    saveTempBlock,
    clearTempBlock,
    toggleSaveBtnStatus,
  };
});
