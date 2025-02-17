<script lang="ts" setup>
import { ref, computed, nextTick, watch } from "vue";
import { v4 as uuidv4 } from "uuid";
import draggable from "vuedraggable";
import { AppBtn, BlockTitle } from "@/shared/ui";
import DragVerticalIcon from "@/assets/icons/Other/DragVerticalIcon.vue";
import TrashIcon from "@/assets/icons/Buttons/TrashIcon.vue";

const props = defineProps<{
  modalVisible: boolean;
  currentIndex: number;
  getList: () => any[];
  setList: (newList: any[]) => void;
  title: string;
}>();

const dragOptions = computed(() => ({
  animation: 200,
  group: { name: "people", pull: "clone", put: true },
  disabled: false,
  ghostClass: "ghost",
}));

const list = ref(props.getList());
const inputRefs = ref<(HTMLInputElement | null)[]>([]);

function addItem() {
  const newId = list.value.length + 1;
  const newListValue = { id: uuidv4(), label: `Вариант ${newId}`, value: "" };

  list.value = [...list.value, newListValue];

  nextTick(() => {
    const lastIndex = inputRefs.value.length - 1;
    if (inputRefs.value[lastIndex]) {
      inputRefs.value[lastIndex]?.focus();
    }
  });
}

function removeItem(index: number) {
  list.value = list.value.filter((_, i) => i !== index);
  inputRefs.value.splice(index, 1);
}

watch(
  () => props.modalVisible,
  (newVal) => {
    if (newVal) {
      list.value = props.getList();
    }
  }
);

watch(
  list,
  (newList) => {
    const filteredList = newList.filter((listVal) => listVal.value !== "");
    props.setList(filteredList);
  },
  { deep: true }
);
</script>

<template>
  <BlockTitle :title="props.title" />
  <a-flex vertical>
    <draggable
      class="editable-list"
      v-model="list"
      v-bind="dragOptions"
      item-key="id"
      :handle="'.drag-zone'"
    >
      <template #item="{ element, index }">
        <div>
          <a-flex
            class="editable-list__item"
            justify="space-between"
            align="center"
          >
            <DragVerticalIcon
              class="editable-list__item__drag-icon drag-zone"
            />
            <a-input
              v-model:value="element.value"
              :placeholder="element.label"
              :ref="(el: HTMLInputElement | null) => inputRefs[index] = el"
            >
              <template #suffix>
                <AppBtn
                  v-if="index !== 0"
                  class="editable-list__item__button"
                  @click="removeItem(index)"
                >
                  <TrashIcon class="editable-list__item__trash-icon" />
                </AppBtn>
              </template>
            </a-input>
          </a-flex>
        </div>
      </template>
    </draggable>
    <button class="editable-list__button" @click="addItem">
      Добавить вариант
    </button>
  </a-flex>
</template>

<style lang="scss" scoped>
.editable-list {
  &__item {
    margin-bottom: 0.7vw;

    &__button {
      height: 0;
      padding: 0;
      margin: 0;
    }

    & svg {
      max-width: 1vw;
      max-height: 1vw;
    }

    &__drag-icon {
      margin-right: 0.3vw;
      cursor: grab;
    }

    &__trash-icon {
      fill: var(--accent-color);
      cursor: pointer;
    }
  }

  &__button {
    width: 100%;
    padding: 0.5vw 0.7vw;
    text-align: start;
    color: var(--accent-color);
    border: solid 0.15vw var(--accent-color);
    border-radius: 0.5vw;
    background-color: transparent;
    cursor: pointer;
  }
}

.ghost {
  opacity: 0;
}
</style>
