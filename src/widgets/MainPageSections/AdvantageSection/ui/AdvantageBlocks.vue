<script lang="ts" setup>
import { TextsCombined } from "@/shared/ui";
import { advantagesBlocks } from "../model";
</script>

<template>
  <a-flex class="advantage-blocks" v-for="(blocks, index) in advantagesBlocks">
    <a-flex
      v-for="block in blocks"
      :class="['advantage-block', { without: block.without }]"
      align="center"
    >
      <span class="block-number">{{ index + 1 }}</span>
      <span class="block-content">
        <TextsCombined :texts="block.content" />
      </span>
    </a-flex>
  </a-flex>
</template>

<style lang="scss" scoped>
.advantage-blocks {
  gap: 15px;

  .advantage-block {
    width: 100%;
    padding: 20px 15px;
    gap: 30px;
    border: 2px solid var(--success-color);
    border-radius: 12px;
    background-color: rgba($color: #c0ff8f, $alpha: 0.3);

    .block-number {
      font-family: "Montserrat Alternates";
      font-size: 50px;
      font-style: italic;
    }

    .block-content {
      font-size: 25px;
      word-break: break-word;

      :deep(.title) {
        color: var(--success-color);
      }
    }

    &.without {
      border-color: var(--error-color);
      background-color: rgba($color: #ff7c7c, $alpha: 0.3);

      .block-content :deep(.title) {
        color: var(--error-color);
      }
    }
  }
}

@media (max-width: 1280px) {
  .advantage-blocks {
    .advantage-block {
      gap: 25px;
      border-radius: 10px;

      .block-number {
        font-size: 40px;
      }

      .block-content {
        font-size: 20px;
      }
    }
  }
}

@media (max-width: 1024px) {
  .advantage-blocks {
    gap: 10px;

    .advantage-block {
      display: flex;
      flex-direction: column;
      gap: 0px;
      padding: 15px;
      padding-top: 5px;
      border-radius: 10px;

      .block-number {
        font-size: 30px;
      }

      .block-content {
        font-size: 16px;
        text-align: center;
      }
    }
  }
}

@media (max-width: 540px) {
  .advantage-blocks {
    flex-direction: column;

    .advantage-block {
      flex-direction: row;
      gap: 20px;
      padding: 10px 20px;
      border-radius: 8px;
      border: 1px solid var(--success-color);

      .block-number {
        font-size: 20px;
      }

      .block-content {
        font-size: 12px;
        text-align: start;
      }
    }
  }
}
</style>
