<script lang="ts" setup>
import { computed } from "vue";
import { isDividerBlockSettings } from "@/shared/model";
import { DividerBlockSettings, FieldBlockBase } from "@/entities/form";

const field = defineModel<FieldBlockBase>("field", { required: true });

const settings = computed(() => {
  return isDividerBlockSettings(field.value.settings)
    ? (field.value.settings as DividerBlockSettings)
    : null;
});
</script>

<template>
  <a-flex class="divider-field" v-if="settings">
    <a-divider v-if="settings.listLooks === 'LINE'" />
    <a-divider v-else>
      <span class="divider-text title">{{ settings.dividerText }}</span>
    </a-divider>
  </a-flex>
</template>

<style lang="scss" scoped>
.divider-field {
  width: 100%;

  .divider-text {
    font-size: 24px;
    color: var(--accent-color);
  }
}
</style>
