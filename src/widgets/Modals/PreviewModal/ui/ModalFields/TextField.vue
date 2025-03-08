<script lang="ts" setup>
import { FieldBlockBase } from "@/entities/form";
import { reqFieldRules } from "@/features/Modals/PreviewModal/model";
import { Input } from "@/widgets/Modals/ModalFields";

const field = defineModel<FieldBlockBase>("field", { required: true });
</script>

<template>
  <Input
    v-model:value="field.value"
    :name="[field.id, 'value']"
    :rules="field.requiredField ? reqFieldRules.value : null"
    :placeholder="$t.components.placeholder.enterText"
  />
</template>

<style lang="scss" scoped>
:deep(.ant-input-affix-wrapper) {
  height: 54px;
  font-size: 16px;
  padding: 0 15px;
  border-radius: 10px;
}

@media (max-width: 1024px) {
  :deep(.ant-input-affix-wrapper) {
    height: 45px;
    font-size: 14px;
    padding: 0 12px;
    border-radius: 8px;
  }
}

@media (max-width: 540px) {
  :deep(.ant-input-affix-wrapper) {
    height: 38px;
    font-size: 12px;
    padding: 0 10px;
    border-width: 1px;
  }
}
</style>
