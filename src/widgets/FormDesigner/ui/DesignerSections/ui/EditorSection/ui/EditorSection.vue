<script lang="ts" setup>
import { computed } from "vue";
import Draggable from "vuedraggable";

import { storeToRefs } from "pinia";

import { useFormStore } from "@/entities/form";
import EmptyEditor from "./EmptyEditor.vue";
import BlockItem from "./BlockItem.vue";
import FormHeader from "./FormHeader.vue";
import FormFooter from "./FormFooter.vue";

const { formBlocks } = storeToRefs(useFormStore());
const { setDraggedBlock } = useFormStore();

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
            <div :key="element.id">
              <BlockItem
                :class="[
                  'form-block',
                  { 'last-form-block': index === formBlocks.length - 1 },
                ]"
                :block="element"
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
    border: solid 2px var(--accent-color);
    border-top: none;
    border-bottom: none;
  }

  &__form-blocks {
    cursor: pointer;
    color: white;
    text-align: center;
    border: none;
    transition: 0.2s ease-in-out;

    .form-block {
      border-bottom: solid 2px var(--accent-color);

      &.last-form-block {
        border-bottom: none;
      }
    }
  }
}

.ghost {
  opacity: 0;
}

@media (max-width: 1280px) {
}

@media (max-width: 1024px) {
  .editor {
    border-radius: 16px;
  }
}

@media (max-width: 540px) {
  .editor {
    border-radius: 12px;
  }
}
</style>
