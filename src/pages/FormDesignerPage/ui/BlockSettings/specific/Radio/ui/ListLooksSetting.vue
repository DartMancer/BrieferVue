<script lang="ts" setup>
import { ref, watch } from "vue";
import { BlockTitle } from "@/shared/ui";
import { LIST_LOOKS } from "@/shared/constants";
import DropDownArrowIcon from "@/assets/icons/DropDownArrowIcon.vue";
import { useFormStore } from "@/entities/form";

const props = defineProps<{
  modalVisible: boolean;
  currentIndex: number;
}>();

const store = useFormStore();
const listLooks = ref(store.tempBlock?.listLooks || "");

function setVar(value: string) {
  listLooks.value = value;
}

watch(
  () => props.modalVisible,
  (newVal) => {
    if (newVal) {
      listLooks.value = store.tempBlock?.listLooks || "";
    }
  }
);

watch(
  () => listLooks.value,
  (newVal) => {
    if (newVal && store.tempBlock) {
      store.tempBlock.listLooks = newVal;
    }
  }
);
</script>

<template>
  <a-flex class="list-looks-section" vertical>
    <div>
      <BlockTitle :title="'Внешний вид'" :subtitle="'Тип отображения'" />
    </div>
    <a-dropdown :placement="'bottom'" :trigger="['click']">
      <a-button class="list-looks-section__button">
        <a-flex justify="space-between" align="center">
          {{ listLooks }}
          <DropDownArrowIcon />
        </a-flex>
      </a-button>
      <template #overlay>
        <a-menu>
          <a-menu-item v-for="(vars, index) in LIST_LOOKS" :key="index">
            <a @click="setVar(vars)">{{ vars }}</a>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </a-flex>
</template>

<style lang="scss" scoped>
.list-looks-section {
  gap: 1.5vw;

  &__button {
    width: 100%;
    height: max-content;
    padding: 0.5vw 0.7vw;
    text-align: start;
    color: var(--white-color);
    border: solid 0.15vw var(--accent-color);
    border-radius: 0.7vw;
    background-color: transparent;
    cursor: pointer;

    & svg {
      max-width: 1vw;
      max-height: 1vw;
      fill: var(--accent-color);
    }
  }
}
</style>
