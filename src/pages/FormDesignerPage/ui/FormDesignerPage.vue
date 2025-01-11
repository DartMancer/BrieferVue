<script lang="ts" setup>
import draggable from "vuedraggable";
import { computed, onMounted } from "vue";
import { FormHeader, FormFooter } from "@/shared/ui";
import { useFormStore } from "@/entities/form/stores/useFormStore";
import { EmptyEditor, BlockItem } from "./EditorSection";
import Blocks from "./Blocks";
import Buttons from "./Buttons";

const store = useFormStore();
const dragOptions = computed(() => ({
  animation: 200,
  group: { name: "people", pull: "clone", put: true },
  disabled: false,
  ghostClass: "ghost",
}));

onMounted(() => {
  store.initialize();
});
</script>

<template>
  <a-flex class="form-designer-section">
    <Blocks :addBlock="store.addBlock" />
    <a-flex class="designer-section" align="flex-end">
      <Buttons />
      <a-flex class="designer-section__editor" justify="space-between">
        <FormHeader :class="{ empty: store.formBlocks.length === 0 }" />
        <div @dragover.prevent @drop="store.setDraggedBlock(null)">
          <div v-if="store.formBlocks.length === 0">
            <EmptyEditor />
          </div>
          <draggable
            class="designer-section__editor__form-blocks"
            v-model="store.formBlocks"
            v-bind="dragOptions"
            item-key="id"
            :disabled="store.formBlocks.length === 0"
            :handle="'.drag-zone'"
          >
            <template #item="{ element, index }">
              <div :key="index">
                <BlockItem
                  :element="{ ...element }"
                  :index="index"
                  @remove="store.removeBlock"
                  @duplicate="store.addBlock"
                />
              </div>
            </template>
          </draggable>
        </div>
        <FormFooter />
      </a-flex>
      <div class="main-footer">© 2024 ООО «БРИФЕР»</div>
    </a-flex>
  </a-flex>
</template>

<style scoped lang="scss">
.main-footer {
  padding: 2vw;
  margin-top: auto;
  color: var(--white-color);
}

.form-designer-section {
  margin-top: 7.8vw;
  width: 80%;
  height: 100vh;
}

.designer-section {
  width: 100%;
  height: 100vh;
  flex-direction: column;

  &__editor {
    width: 100%;
    border-radius: 1vw;
    background-color: var(--element-color);
    flex-direction: column;

    &__form-blocks {
      color: white;
      text-align: center;
      border: solid 0.15vw var(--accent-color);
      border-top: none;
      border-bottom: none;
      transition: 0.4;
      cursor: pointer;
    }
  }
}

.ghost {
  opacity: 0;
}
</style>
