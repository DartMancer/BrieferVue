<script lang="ts" setup>
import { getIconComponent } from "@/shared/utils";
import { BlockConfiguration } from "@/entities/form";

defineProps<{
  block: BlockConfiguration;
}>();
</script>

<template>
  <a-flex class="item-content" justify="flex-start" vertical>
    <span class="block-question">{{ block.question }}</span>
    <a-flex class="item-subtitle" align="center">
      <component :is="getIconComponent(block.icon)" class="block-icon" />
      <span class="block-title">{{ block.blockTitle }}</span>
    </a-flex>
  </a-flex>
</template>

<style lang="scss" scoped>
.item-content {
  gap: 6px;

  .block-question {
    font-size: 18px;
    text-align: start;
  }

  .item-subtitle {
    gap: 10px;

    .block-title {
      font-size: 14px;
      color: var(--accent-color);
      text-align: start;
      line-height: 1;
    }

    .block-icon {
      max-width: 16px;
      max-height: 16px;
      fill: var(--accent-color);
      stroke: var(--accent-color);
    }
  }
}

@media (max-width: 1280px) {
  .item-content {
    gap: 4px;

    .block-question {
      font-size: 16px;
    }

    .item-subtitle {
      .block-title {
        font-size: 12px;
      }
    }
  }
}

@media (max-width: 1024px) {
  .item-content {
    .block-question {
      font-size: 14px;
    }

    .item-subtitle {
      .block-title {
        font-size: 12px;
      }

      .block-icon {
        max-width: 14px;
        max-height: 14px;
      }
    }
  }
}

@media (max-width: 540px) {
  .item-content {
    .block-question {
      font-size: 12px;
    }

    .item-subtitle {
      .block-title {
        line-height: 1.5;
        font-size: 10px;
      }

      .block-icon {
        max-width: 12px;
        max-height: 12px;
      }
    }
  }
}
</style>
