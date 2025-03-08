<script lang="ts" setup>
import { RadioBlockSettings } from "@/entities/form";

const value = defineModel<number | undefined>("value", { required: true });

defineProps<{
  name: string | string[];
  rules?: any;
  settings: RadioBlockSettings;
}>();
</script>

<template>
  <a-form-item :name="name" :rules="rules">
    <a-radio-group
      class="radio-list"
      v-model:value="value"
      button-style="solid"
    >
      <a-radio-button
        class="radio"
        :value="variable.value"
        v-for="variable in settings.variables"
      >
        <span class="radio-label">{{ variable.label }}</span>
      </a-radio-button>
    </a-radio-group>
  </a-form-item>
</template>

<style lang="scss" scoped>
.radio-list {
  display: flex;
  flex-wrap: wrap;
  width: 75%;
  gap: 20px;
}

:deep(.ant-radio-button-wrapper) {
  display: flex;
  align-items: center;
  height: 54px;
  padding: 0 30px;
  border: 2px solid var(--accent-color);
  border-radius: 10px !important;

  &:hover {
    border-color: var(--hover-primary-color);
  }

  &::before {
    display: none;
  }
}

:deep(.ant-radio-button-wrapper-checked) {
  box-shadow: 0 0 20px rgba($color: #cf4d9c, $alpha: 0.7);

  &:hover {
    cursor: auto;
    background: var(--primary-color) !important;
    border-color: var(--primary-color) !important;
  }
}

@media (max-width: 1024px) {
  .radio-list {
    gap: 15px;
  }

  :deep(.ant-radio-button-wrapper) {
    font-size: 14px;
    height: 45px;
    padding: 0 20px;
    border-radius: 8px;
  }
}

@media (max-width: 540px) {
  .radio-list {
    width: 100%;
    gap: 10px;
  }

  :deep(.ant-radio-button-wrapper) {
    font-size: 12px;
    height: 38px;
    padding: 0 10px;
    border-width: 1px;
  }
}
</style>
