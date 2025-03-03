<script lang="ts" setup>
import { getIconComponent } from "@/shared/utils";

const props = defineProps<{
  title: string;
  blockIcon?: string;
  blockTitle?: string;
}>();
</script>

<template>
  <a-flex class="edit-title" vertical>
    <span class="title"> {{ props.title }}</span>
    <a-flex class="edit-subtitle" align="center">
      <component :is="getIconComponent(props.blockIcon)" class="block-icon" />
      <span class="block-title">{{ props.blockTitle }}</span>
    </a-flex>
  </a-flex>
</template>

<style lang="scss" scoped>
.edit-title {
  .title {
    font-size: 24px;
  }

  .edit-subtitle {
    gap: 10px;

    .block-icon {
      max-width: 18px;
      max-height: 18px;
      fill: var(--accent-color);
    }

    .block-title {
      font-size: 16px;
      color: var(--accent-color);
    }
  }
}

@media (max-width: 1024px) {
  .edit-title {
    .title {
      font-size: 22px;
    }

    .edit-subtitle {
      .block-icon {
        max-width: 16px;
        max-height: 16px;
      }

      .block-title {
        font-size: 14px;
      }
    }
  }
}

@media (max-width: 540px) {
  .edit-title {
    .title {
      font-size: 16px;
    }

    .edit-subtitle {
      .block-icon {
        max-width: 14px;
        max-height: 14px;
      }

      .block-title {
        font-size: 12px;
      }
    }
  }
}
</style>
