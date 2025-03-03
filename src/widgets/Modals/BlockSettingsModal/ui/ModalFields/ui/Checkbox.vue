<script lang="ts" setup>
const checked = defineModel<boolean | undefined>("checked", {
  required: true,
});

defineProps<{
  name: string | string[];
  label: string;
}>();
</script>

<template>
  <a-form-item :name="name">
    <a-checkbox v-model:checked="checked">
      <span class="label">{{ label }}</span>
    </a-checkbox>
  </a-form-item>
</template>

<style lang="scss" scoped>
.label {
  font-size: 16px;
  color: var(--white-color);
}

:deep(.ant-form-item-control-input) {
  min-height: 0;
}

@media (max-width: 1024px) {
  .label {
    font-size: 14px;
  }
}

@media (max-width: 540px) {
  .label {
    font-size: 12px;
  }
}
</style>
