<script setup lang="ts">
import { blocks } from "@/shared/constants";
import { getIconComponent } from "@/shared/utils";
import QuestionIcon from "@/assets/icons/QuestionIcon.vue";
import { BlockSettings } from "@/entities/form";

const props = defineProps<{
  addBlock: (block: BlockSettings) => void;
}>();
</script>

<template>
  <div class="blocks-list" vertical>
    <p class="blocks-list__title">{{ $t.formDesigner.blocks }}</p>
    <div
      v-for="(block, index) in blocks"
      :key="index"
      class="blocks-list__block"
      @click="props.addBlock(block)"
    >
      <a-flex justify="space-between">
        <a-flex>
          <component
            :is="getIconComponent(block.generalSettings.icon)"
            class="blocks-list__block__icon"
          />
          <p class="blocks-list__block__name">
            {{ block.generalSettings.title }}
          </p>
        </a-flex>
        <a-popover trigger="hover" placement="right" @click.stop>
          <template #content>
            <p class="content">{{ block.generalSettings.supportText }}</p>
          </template>
          <QuestionIcon class="question-icon" />
        </a-popover>
      </a-flex>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.blocks-list {
  width: 30%;
  height: 100vh;
  margin-right: 40px;

  &__title {
    color: var(--white-color);
    margin: 1vw;
    font-size: 1.7vw;
    font-family: "Montserrat Alternates";
    font-weight: bold;
  }

  &__block {
    cursor: pointer;
    border: solid 0.15vw transparent;
    padding: 0.6vw 0.5vw 0.6vw 0.9vw;
    color: white;
    text-align: center;
    transition: 0.3s ease;

    &__name {
      margin: 0;
      font-size: 0.8vw;
      font-family: "Montserrat Alternates";
    }

    &__icon {
      max-width: 1.3vw;
      max-height: 1.3vw;
      fill: var(--white-color);
      stroke: var(--white-color);
      margin-right: 0.5vw;
    }
  }

  &__block .question-icon {
    opacity: 0;
    max-width: 1.3vw;
    max-height: 1.3vw;
    fill: var(--accent-color);
    margin-right: 0.5vw;
    transition: 0.3s ease;
  }

  &__block:hover .question-icon {
    opacity: 1;
  }

  .question-icon:hover {
    fill: var(--white-color);
  }

  &__block:hover {
    border: solid 0.15vw var(--accent-color);
    border-radius: 0.5vw;
  }

  &__block:active:not(:has(.question-icon:hover)) {
    transform: scale(0.95);
  }
}

.content {
  max-width: 13vw;
  color: var(--background-color);
}
</style>
