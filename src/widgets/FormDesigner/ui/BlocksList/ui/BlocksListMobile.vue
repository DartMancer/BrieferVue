<script setup lang="ts">
import { onMounted, ref } from "vue";
import { BLOCKS_LIST } from "@/shared/constants";
import { GradientBackground } from "@/shared/ui/Other";
import { useFormStore } from "@/entities/form";
import BlockListItem from "./BlockListItem.vue";

const { addBlock } = useFormStore();
const listVisible = defineModel<boolean>("listVisible", {
  required: true,
  default: false,
});

const listContainer = ref<HTMLElement | null>(null);
const listHeight = ref<number>(0);

onMounted(() => {
  if (listContainer.value) listHeight.value = listContainer.value.scrollHeight;
});
</script>

<template>
  <div
    ref="listContainer"
    class="list-container"
    :style="{ maxHeight: listVisible ? listHeight + 'px' : '0' }"
  >
    <a-flex class="list-wrapper">
      <GradientBackground />
      <a-flex class="blocks-list" justify="center" align="center" vertical>
        <span class="title">
          {{ $t.pages.formDesigner.blocks }}
        </span>
        <div
          v-for="block in BLOCKS_LIST"
          :key="block.id"
          class="block"
          @click="addBlock(block.type)"
        >
          <BlockListItem :block="block" />
        </div>
      </a-flex>
    </a-flex>
  </div>
</template>

<style lang="scss" scoped>
.list-container {
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  border-radius: 16px;

  .list-wrapper {
    position: relative;
    width: 100%;
    height: fit-content;

    .blocks-list {
      position: relative;
      width: 100%;
      gap: 10px;
      padding: 20px 40px;
      border: 2px solid var(--accent-color);
      border-radius: 16px;
      background-color: rgba($color: #000214, $alpha: 0.6);

      .title {
        font-size: 20px;
      }

      .block {
        display: flex;
        justify-content: center;
        width: 100%;
      }
    }
  }
}

// .blocks-list {
//   width: 20%;
//   min-width: 300px;
//   gap: 7px;
//   height: 100vh;

//   .title {
//     font-size: 30px;
//     margin-left: 8px;
//     color: var(--white-color);
//   }

//   .block {
//     cursor: pointer;
//     border: solid 2px transparent;
//     border-radius: 6px;
//     padding: 8px;
//     color: white;
//     text-align: center;
//     transition: 0.3s ease;
//   }

//   .block {
//     &:hover :deep(.question-icon) {
//       opacity: 1;
//     }
//   }

//   .block:hover {
//     border-color: var(--accent-color);
//   }
// }
</style>
