<script lang="ts" setup>
import { FieldBlockBase } from "@/entities/form";
import { reqFieldRules } from "@/features/Modals/PreviewModal/model";

const field = defineModel<FieldBlockBase>("field", { required: true });
</script>

<template>
  <a-form-item
    :name="[field.id, 'value']"
    :rules="field.requiredField ? reqFieldRules.value : null"
  >
    <a-radio-group class="radio-list" v-model:value="field.value">
      <a-radio class="radio" :value="true">
        <span class="radio-label">{{ $t.components.buttons.common.yes }}</span>
      </a-radio>
      <a-radio class="radio" :value="false">
        <span class="radio-label">{{ $t.components.buttons.common.no }}</span>
      </a-radio>
    </a-radio-group>
  </a-form-item>
</template>

<style lang="scss" scoped>
.radio-list {
  display: flex;
  width: 100%;
  gap: 10px;

  .radio {
    width: 100%;
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
    flex-direction: column;

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
