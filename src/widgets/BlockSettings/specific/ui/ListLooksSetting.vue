<script lang="ts" setup>
import { ref, watch } from "vue";
import { BlockTitle } from "@/shared/ui";
import { RADIO_LIST_LOOKS } from "@/shared/constants";
// import DropDownArrowIcon from "@/assets/icons/DropDownArrowIcon.vue";
import { useFormStore } from "@/entities/form";

// const props = defineProps<{
//   modalVisible: boolean;
//   currentIndex: number;
// }>();

// const { tempBlock } = useFormStore();

// const listLooks = ref(tempBlock?.settings.list || "");

// function setVar(value: string) {
//   listLooks.value = value;
// }

// watch(
//   () => props.modalVisible,
//   (newVal) => {
//     if (newVal) {
//       listLooks.value = tempBlock?.listLooks || "";
//     }
//   }
// );

// watch(
//   () => listLooks.value,
//   (newVal) => {
//     if (newVal && tempBlock) {
//       tempBlock.listLooks = newVal as "Плитка" | "В один ряд";
//     }
//   }
// );
</script>

<template>
  <a-flex class="list-looks-section" vertical>
    <div>
      <BlockTitle :title="'Внешний вид'" :subtitle="'Тип отображения'" />
    </div>
    <a-dropdown :placement="'bottom'" :trigger="['click']">
      <a-button class="list-looks-section__button">
        <a-flex justify="space-between" align="center">
          <!-- {{ listLooks }} -->
          <!-- <DropDownArrowIcon /> -->
        </a-flex>
      </a-button>
      <template #overlay>
        <a-menu>
          <a-menu-item v-for="(vars, index) in RADIO_LIST_LOOKS" :key="index">
            <!-- <a @click="setVar(vars)">{{ vars }}</a> -->
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
