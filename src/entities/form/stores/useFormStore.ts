import { defineStore } from "pinia";
import { ref, watch, nextTick } from "vue";
import { v4 as uuidv4 } from "uuid";
import { BlockSettings } from "../types";

export const useFormStore = defineStore("formDesigner", () => {
  const formBlocks = ref<BlockSettings[]>([]);
  const draggedBlock = ref<BlockSettings | null>(null);
  const tempBlock = ref<BlockSettings | null>(null);

  const initialize = () => {
    const savedFormBlocks = sessionStorage.getItem("formBlocks");
    if (savedFormBlocks) {
      formBlocks.value = JSON.parse(savedFormBlocks);
    }
  };

  const setDraggedBlock = (block: BlockSettings | null) => {
    draggedBlock.value = block;
  };

  const addBlock = (block: BlockSettings) => {
    const clonedBlock = { ...block, id: uuidv4() };
    formBlocks.value.push(clonedBlock);

    nextTick(() => {
      const lastBlock = document.querySelector(".block-item:last-child");
      if (lastBlock) {
        lastBlock.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
      }
    });
  };

  const removeBlock = (index: number) => {
    setTimeout(() => {
      formBlocks.value.splice(index, 1);
    }, 300);
  };

  const removeBlocks = () => {
    tempBlock.value = null;
    formBlocks.value = [];
  };

  const setTempBlock = (block: BlockSettings | null) => {
    // tempBlock.value = block ? { ...block } : null;
    tempBlock.value = block ? JSON.parse(JSON.stringify(block)) : null;
  };

  const saveTempBlock = (index: number) => {
    if (tempBlock.value) {
      formBlocks.value[index] = { ...tempBlock.value }; // Полностью заменяем блок
      clearTempBlock();
    }
    // if (tempBlock.value) {
    //   const mainBlock = formBlocks.value[index];
    //   if (mainBlock) {
    //     formBlocks.value[index] = { ...mainBlock, ...tempBlock.value };
    //   }
    //   clearTempBlock();
    // }
  };

  const clearTempBlock = () => {
    tempBlock.value = null;
  };

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
    initialize,
    addBlock,
    removeBlock,
    removeBlocks,
    setDraggedBlock,
    setTempBlock,
    saveTempBlock,
    clearTempBlock,
  };
});
