<script setup lang="ts">
import { ref, onMounted } from "vue";
import IMask from "imask";
import { inputRequiredRule } from "@/shared/model";
import ClearFiledIcon from "@/assets/icons/ClearFiledIcon.vue";
import { BlockSettings } from "@/entities/form";

const props = defineProps<{
  formBlock: BlockSettings;
  index: number;
}>();

const previewFormState = defineModel<Record<string, any>>("previewFormState", {
  required: true,
});

const key = Object.keys(previewFormState.value!)[props.index];
const rules = inputRequiredRule(props.formBlock);

const inputRef = ref<HTMLElement | null>(null);
const showIcon = ref(false);

function clearInput() {
  previewFormState.value[key] = "";
  showIcon.value = false;
}

onMounted(() => {
  if (inputRef.value) {
    IMask(inputRef.value as HTMLInputElement, {
      mask: "+7 (000) 000-00-00",
    });
  }
});
</script>

<template>
  <div class="input-wrapper" v-if="previewFormState">
    <a-form-item :name="key" :rules="rules">
      <input
        class="phone-input"
        ref="inputRef"
        v-model="previewFormState[key]"
        :placeholder="formBlock.defaultValue"
        @focus="showIcon = previewFormState[key].length > 0"
        @input="showIcon = previewFormState[key].length > 0"
      />
      <span
        v-if="showIcon"
        class="phone-input__clear-icon"
        @click="clearInput()"
      >
        <ClearFiledIcon />
      </span>
    </a-form-item>
  </div>
</template>

<style lang="scss" scoped>
.input-wrapper {
  position: relative;
}

.phone-input {
  width: 100%;
  max-height: fit-content;
  border: solid 0.15vw var(--accent-color);
  border-radius: 0.5vw;
  color: var(--white-color);
  background-color: var(--element-color);
  font-family: "Nunito";
  padding: 0.55vw 1vw;

  &::placeholder {
    color: var(--accent-color);
    font-family: "Nunito";
  }

  &:hover {
    border-color: var(--hover-accent-color);
  }

  &:focus-visible {
    outline: none;
    border-color: var(--hover-accent-color);
    box-shadow: 0 0 0.5vw var(--accent-color);
  }

  &__clear-icon svg {
    position: absolute;
    top: 33%;
    right: 0.8vw;
    max-width: min-content;
    height: 27%;
    fill: var(--accent-color);
    transition: 0.3s ease-in-out;
  }

  &__clear-icon:hover svg {
    fill: var(--hover-accent-color);
  }
}
</style>
>
