<script setup lang="ts">
import { ref, computed } from "vue";
import { BlockTitle } from "@/shared/ui";
import { getFormFieldUtils } from "@/shared/utils";
import { commentaryBeforeComp } from "@/shared/constants";
import RequiredIcon from "@/assets/icons/RequiredIcon.vue";
import { BlockSettings } from "@/entities/form";

const props = defineProps<{
  formBlock: BlockSettings;
  index: number;
}>();

const previewFormState = defineModel<Record<string, any>>("previewFormState");

const formBlock = ref(props.formBlock);
const title = ref(formBlock.value.generalSettings.title);
const icon = ref(formBlock.value.generalSettings.icon);
const commentary = ref(formBlock.value.commentary);

const isCommentaryBefore = computed(() =>
  commentaryBeforeComp.includes(icon.value)
);
</script>

<template>
  <a-flex v-if="previewFormState" class="form-field" vertical gap="small">
    <a-flex :style="{ marginBottom: '1vw' }" vertical>
      <a-flex gap="small" align="top">
        <BlockTitle
          v-if="icon !== 'CheckIcon'"
          class="form-field__title"
          :title="title"
        />
        <RequiredIcon
          v-if="formBlock.generalSettings.requiredField"
          class="form-field__icon"
        />
      </a-flex>
      <p v-if="isCommentaryBefore && commentary" class="form-field__commentary">
        {{ commentary }}
      </p>
    </a-flex>
    <component
      :is="getFormFieldUtils(icon)"
      :formBlock="props.formBlock"
      :index="props.index"
      v-model:previewFormState="previewFormState"
    />
    <p v-if="!isCommentaryBefore && commentary" class="form-field__commentary">
      {{ commentary }}
    </p>
  </a-flex>
</template>

<style lang="scss" scoped>
.form-field {
  padding: 2.5vw;
  box-shadow: 0 0 15px var(--opacity-accent-color);
  background-color: var(--background-color);
  border-radius: 1vw;
  margin-bottom: 1.2vw;

  &__title {
    color: var(--white-color);
    font-size: 1.3vw;
    font-weight: bold;
    font-family: "Montserrat Alternates";
  }

  &__icon {
    width: 0.7vw;
    height: 0.7vw;
    fill: var(--error-color);
  }

  &__commentary {
    color: var(--accent-color);
    font-size: 1vw;
  }
}
</style>
