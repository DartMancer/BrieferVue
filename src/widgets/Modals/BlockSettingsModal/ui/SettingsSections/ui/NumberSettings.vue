<script lang="ts" setup>
import { computed, watch } from "vue";
import { isNumberBlockSettings } from "@/shared/model";
import {
  BlockConfiguration,
  NumberBlockSettings,
  NumberOptions,
} from "@/entities/form";
import { numbersRules } from "@/features/Modals/BlockSettingsModal";
import {
  Checkbox,
  Select,
  NumbersRange,
} from "@/widgets/Modals/BlockSettingsModal";

const tempBlock = defineModel<BlockConfiguration>("tempBlock", {
  required: true,
});

const settings = computed(() => {
  return isNumberBlockSettings(tempBlock.value.settings)
    ? (tempBlock.value.settings as NumberBlockSettings)
    : null;
});

function updateDefaultValue(
  type: NumberOptions,
  settings: NumberBlockSettings
) {
  if (type === "RANGE") {
    settings.defaultValue = undefined;
    settings.defaultRange = { minNumber: 0, maxNumber: 0 };
  } else {
    settings.defaultValue = 0;
    settings.defaultRange = undefined;
  }
}

watch(
  () => settings.value?.options,
  (newVal) => {
    if (!newVal || !settings.value) return;
    updateDefaultValue(newVal, settings.value);
  }
);
</script>

<template>
  <a-flex v-if="settings" :gap="15" vertical>
    <Select
      v-model:value="settings.options"
      :name="['settings', 'options']"
      :type="tempBlock.type"
      :placeholder="$t.components.placeholder.selectOption"
      :subtitle="$t.components.placeholder.numberSubtitle"
    />

    <Transition name="fade-up">
      <NumbersRange
        v-if="settings.options === 'RANGE'"
        class="numbers-range"
        v-model:numbersRange="settings.numbersRange"
        :name="['settings', 'numbersRange']"
        :rules="numbersRules"
        :min="settings.isNegative ? -Infinity : 0"
      />
    </Transition>

    <Checkbox
      v-model:checked="settings.isNegative"
      :name="['settings', 'isNegative']"
      :label="$t.components.buttons.block.negativeNumber"
    />
  </a-flex>
</template>

<style lang="scss" scoped>
.numbers-range {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}
</style>
