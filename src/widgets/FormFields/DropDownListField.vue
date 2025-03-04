<script setup lang="ts">
// import { ref } from "vue";
// import { inputRequiredRule } from "@/shared/model";
// import { BlockSettings } from "@/entities/form";

// const props = defineProps<{
//   formBlock: BlockSettings;
//   index: number;
// }>();

// const previewFormState = defineModel<Record<string, any>>("previewFormState");

// const key = Object.keys(previewFormState.value!)[props.index];
// const rules = inputRequiredRule(props.formBlock);

// const listLooks = ref(props.formBlock.variables![0].value);

// function setVar(value: string) {
//   listLooks.value = value;
// }
</script>

<template>
  <!-- <a-form-item :name="key" :rules="rules" v-if="previewFormState">
    <a-flex class="list-looks-section" vertical>
      <a-select
        class="list-looks-section__button"
        ref="select"
        v-model:value="previewFormState[key]"
      >
        <a-select-option
          v-for="(vars, index) in formBlock.variables"
          :key="index"
        >
          <a @click="setVar(vars.value)">{{ vars.value }}</a>
        </a-select-option>
      </a-select>
    </a-flex>
  </a-form-item> -->
</template>

<style lang="scss" scoped>
.list-looks-section {
  gap: 1.5vw;
  border-radius: 0.7vw;
  background-color: var(--element-color);
  margin-bottom: 0.8vw;

  &__button {
    cursor: pointer;
    width: 100%;
    text-align: start;
  }
}
</style>
