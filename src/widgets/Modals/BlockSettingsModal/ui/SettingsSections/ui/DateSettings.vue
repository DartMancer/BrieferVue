<script lang="ts" setup>
import { computed } from "vue";
import { isDateBlockSettings } from "@/shared/model";
import { BlockConfiguration, DateBlockSettings } from "@/entities/form";
import { Checkbox, DateRange } from "@/widgets/Modals/ModalFields";
import { dateRules } from "@/features/Modals/BlockSettingsModal";

const tempBlock = defineModel<BlockConfiguration>("tempBlock", {
  required: true,
});

const settings = computed(() => {
  return isDateBlockSettings(tempBlock.value.settings)
    ? (tempBlock.value.settings as DateBlockSettings)
    : null;
});
</script>

<template>
  <a-flex class="date-settings" v-if="settings" vertical>
    <Checkbox
      v-model:checked="settings.isDateRange"
      :name="['settings', 'isDateRange']"
      :label="$t.components.buttons.block.dateRange"
    />
    <Checkbox
      v-model:checked="settings.isLimitRange"
      :name="['settings', 'isLimitRange']"
      :label="$t.components.buttons.block.dateLimit"
    />
    <DateRange
      v-model:dateRange="settings.dateRange"
      :name="['settings', 'dateRange']"
      :isLimitRange="settings.isLimitRange"
      :rules="settings.isLimitRange ? dateRules.dateRange : null"
    />
  </a-flex>
</template>

<style lang="scss" scoped>
.date-settings {
  gap: 15px;
}
</style>
