<script setup lang="ts">
import { BLOCKS_LIST } from "@/shared/constants";
import { useFormStore } from "@/entities/form";
import BlockListItem from "./BlockListItem.vue";

const { addBlock } = useFormStore();
</script>

<template>
  <a-flex class="blocks-list" vertical>
    <span class="title blocks-list__title">
      {{ $t.pages.formDesigner.blocks }}
    </span>
    <div
      v-for="block in BLOCKS_LIST"
      :key="block.id"
      class="blocks-list__block"
      @click="addBlock(block.type)"
    >
      <BlockListItem :block="block" />
    </div>
  </a-flex>
</template>

<style lang="scss" scoped>
.blocks-list {
  width: 20%;
  min-width: 300px;
  gap: 7px;
  height: 100vh;

  &__title {
    font-size: 30px;
    margin-left: 8px;
    color: var(--white-color);
  }

  &__block {
    cursor: pointer;
    border: solid 2px transparent;
    border-radius: 6px;
    padding: 8px;
    color: white;
    text-align: center;
    transition: 0.3s ease;
  }

  &__block {
    &:hover :deep(.question-icon) {
      opacity: 1;
    }
  }

  &__block:hover {
    border-color: var(--accent-color);
  }
}

@media (max-width: 1280px) {
  .blocks-list {
    min-width: 270px;

    &__title {
      font-size: 25px;
    }
  }
}

@media (max-width: 1024px) {
  .blocks-list {
    min-width: 250px;

    &__title {
      font-size: 20px;
    }

    &__block {
      border: solid 1px transparent;
      border-radius: 5px;
      border-color: var(--accent-color);

      &:deep(.question-icon) {
        opacity: 1;
      }
    }
  }
}

@media (max-width: 540px) {
  .blocks-list {
    min-width: 200px;

    &__title {
      font-size: 17px;
    }

    &__block {
      border: solid 1px transparent;
      border-radius: 4px;
      border-color: var(--accent-color);

      &:deep(.question-icon) {
        opacity: 1;
      }
    }
  }
}
</style>
