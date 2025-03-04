<script lang="ts" setup>
import { getIconComponent } from "@/shared/utils";
import QuestionIcon from "@/assets/icons/Buttons/QuestionIcon.vue";
import { BlockConfiguration } from "@/entities/form";

defineProps<{
  block: BlockConfiguration;
}>();
</script>

<template>
  <a-flex class="block-item" justify="space-between" align="center">
    <a-flex class="block-content" align="center">
      <component :is="getIconComponent(block.icon)" class="icon" />
      <span class="name">
        {{ block.blockTitle }}
      </span>
    </a-flex>
    <a-popover trigger="hover" placement="right" @click.stop>
      <template #content>
        <span>{{ block.supportText }}</span>
      </template>
      <QuestionIcon class="question-icon" />
    </a-popover>
  </a-flex>
</template>

<style lang="scss" scoped>
.block-item {
  cursor: pointer;
  border: solid 2px transparent;
  border-radius: 6px;
  padding: 8px;
  color: white;
  text-align: center;
  transition: 0.3s ease;

  &:hover {
    border-color: var(--accent-color);

    .question-icon {
      opacity: 1;
    }
  }

  .block-content {
    gap: 20px;

    .icon {
      max-width: 24px;
      max-height: 24px;
    }

    .name {
      font-size: 16px;
      text-align: start;
      font-weight: 400;
    }
  }

  .question-icon {
    opacity: 0;
    max-width: 24px;
    max-height: 24px;
    fill: var(--accent-color);
    transition: 0.3s ease;
  }
}

@media (max-width: 1280px) {
  .block-item {
    .block-content {
      gap: 10px;

      .name {
        font-size: 14px;
      }
    }

    .block-content .icon,
    .question-icon {
      max-width: 21px;
      max-height: 21px;
    }
  }
}

@media (max-width: 1024px) {
  .block-item {
    width: 100%;
    max-width: 450px;
    min-width: 300px;
    border-color: var(--accent-color);

    .block-content {
      gap: 10px;

      .name {
        font-size: 14px;
      }
    }

    .block-content .icon,
    .question-icon {
      opacity: 1;
      max-width: 21px;
      max-height: 21px;
    }
  }
}

@media (max-width: 540px) {
  .block-item {
    .block-content {
      gap: 10px;

      .name {
        font-size: 12px;
      }
    }

    .block-content .icon,
    .question-icon {
      max-width: 18px;
      max-height: 18px;
    }
  }
}
</style>
