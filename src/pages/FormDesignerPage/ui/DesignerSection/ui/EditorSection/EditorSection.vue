<script lang="ts" setup>
import { computed } from "vue";
import { storeToRefs } from "pinia";
import Draggable from "vuedraggable";
import { FormFooter, FormHeader } from "@/shared/ui";
import { useFormStore } from "@/entities/form";
import EmptyEditor from "./EmptyEditor.vue";
import BlockItem from "./BlockItem.vue";

const { formBlocks } = storeToRefs(useFormStore());
const { setDraggedBlock, removeBlock, addBlock } = useFormStore();

const dragOptions = computed(() => ({
  animation: 200,
  group: { name: "people", pull: "clone", put: true },
  disabled: false,
  ghostClass: "ghost",
}));
</script>

<template>
  <a-flex class="editor">
    <FormHeader :class="{ empty: formBlocks.length === 0 }" />
    <div
      class="editor__container"
      @dragover.prevent
      @drop="setDraggedBlock(null)"
    >
      <Transition name="fade" mode="out-in">
        <div v-if="formBlocks.length === 0">
          <EmptyEditor />
        </div>
        <Draggable
          v-else
          class="editor__form-blocks"
          v-model="formBlocks"
          v-bind="dragOptions"
          item-key="id"
          :disabled="formBlocks.length === 0"
          :handle="'.drag-zone'"
        >
          <template #item="{ element, index }">
            <div :key="index">
              <BlockItem
                :element="{ ...element }"
                :index="index"
                @remove="removeBlock"
                @duplicate="addBlock"
              />
            </div>
          </template>
        </Draggable>
      </Transition>
    </div>
    <FormFooter />
  </a-flex>
</template>

<style scoped lang="scss">
.editor {
  width: 100%;
  border-radius: 20px;
  background-color: var(--element-color);
  flex-direction: column;

  &__container {
    border: solid 3px var(--accent-color);
  }

  &__form-blocks {
    color: white;
    text-align: center;
    border: solid 0.15vw var(--accent-color);
    border: none;
    transition: 0.4s ease-in-out;
    cursor: pointer;
  }
}

.ghost {
  opacity: 0;
}
</style>
