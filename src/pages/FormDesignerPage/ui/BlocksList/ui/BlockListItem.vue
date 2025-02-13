<script lang="ts" setup>
import { getIconComponent } from "@/shared/utils";
import QuestionIcon from "@/assets/icons/QuestionIcon.vue";
import { BlockSettings } from "@/entities/form";

defineProps<{
  block: BlockSettings;
}>();
</script>

<template>
  <a-flex justify="space-between" align="center">
    <a-flex class="block-content" align="center">
      <component
        :is="getIconComponent(block.generalSettings.icon)"
        class="icon"
      />
      <span class="name">
        {{ block.generalSettings.title }}
      </span>
    </a-flex>
    <a-popover trigger="hover" placement="right" @click.stop>
      <template #content>
        <span>{{ block.generalSettings.supportText }}</span>
      </template>
      <QuestionIcon class="question-icon" />
    </a-popover>
  </a-flex>
</template>

<style lang="scss" scoped>
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

@media (max-width: 1280px) {
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

@media (max-width: 1024px) {
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

@media (max-width: 540px) {
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
</style>
