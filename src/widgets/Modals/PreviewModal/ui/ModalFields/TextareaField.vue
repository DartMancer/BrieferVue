<script lang="ts" setup>
import { FieldBlockBase } from "@/entities/form";
import { reqFieldRules } from "@/features/Modals/PreviewModal/model";
import { Textarea } from "@/widgets/Modals/ModalFields";

const field = defineModel<FieldBlockBase>("field", { required: true });
</script>

<template>
  <Textarea
    v-model:value="field.value"
    :name="[field.id, 'value']"
    :rules="field.requiredField ? reqFieldRules.value : null"
    :placeholder="$t.components.placeholder.enterText"
    :max="6"
  />
</template>

<style lang="scss" scoped>
:deep(.ant-input-affix-wrapper-textarea-with-clear-btn) {
  min-height: 54px;
  border-radius: 10px;
  font-size: 16px !important;
  padding: 13px 25px 12px 15px !important;

  .ant-input {
    font-size: 16px !important;
  }
}

@media (max-width: 1024px) {
  :deep(.ant-input-affix-wrapper-textarea-with-clear-btn) {
    min-height: 45px;
    border-radius: 8px;
    font-size: 14px !important;
    padding: 10px 25px 9px 12px !important;

    .ant-input {
      font-size: 14px !important;
    }
  }
}

@media (max-width: 540px) {
  :deep(.ant-input-affix-wrapper-textarea-with-clear-btn) {
    min-height: 38px;
    border-width: 1px !important;
    font-size: 12px !important;
    padding: 8px 25px 6px 10px !important;

    .ant-input {
      font-size: 12px !important;
    }
  }
}
</style>
