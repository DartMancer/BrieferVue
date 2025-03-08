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
    <a-radio-group class="radio-list" v-model:value="value">
      <a-radio
        class="radio"
        :value="variable.value"
        v-for="variable in settings.variables"
      >
        <span class="radio-label">{{ variable.label }}</span>
      </a-radio>
    </a-radio-group>
  </a-form-item>
</template>

<style lang="scss" scoped>
.radio-list {
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 10px;

  .radio {
    display: flex;
    gap: 10px;
    padding: 13px 15px;
    margin: 0;
    border: 2px solid var(--accent-color);
    border-radius: 10px;
    background-color: var(--element-color);
    transition: 0.2s ease-in-out;

    .radio-label {
      font-size: 16px;
      padding-inline-start: 0 !important;
    }

    &:hover {
      border-color: var(--hover-primary-color);
    }
  }
}

@media (max-width: 1024px) {
  .radio-list {
    width: 75%;

    .radio {
      padding: 9px 12px;
      border-radius: 8px;

      .radio-label {
        font-size: 14px;
      }
    }
  }
}

@media (max-width: 540px) {
  .radio-list {
    width: 100%;

    .radio {
      align-items: center;
      padding: 7px 10px;
      border-width: 1px;

      .radio-label {
        font-size: 12px;
      }
    }
  }
}
</style>
