<script lang="ts" setup>
import { computed } from "vue";
import {
  getSettingsValidationRules,
  isLinksBlockSettings,
  isNumberBlockSettings,
  isTextBlockSettings,
} from "@/shared/model";
import { BlockConfiguration, NumberBlockSettings } from "@/entities/form";
import AddNumberButton from "./AddNumberButton.vue";
import AddNumbersRange from "./AddNumbersRange.vue";
import AddLinksButon from "./AddLinksButon.vue";
import AddTextButton from "./AddTextButton.vue";

const tempBlock = defineModel<BlockConfiguration>("tempBlock", {
  required: true,
});

const numberSettings = computed(() => {
  return isNumberBlockSettings(tempBlock.value.settings)
    ? (tempBlock.value.settings as NumberBlockSettings)
    : null;
});

const rules = getSettingsValidationRules(tempBlock.value.settings);
</script>

<template>
  <AddNumberButton
    v-if="numberSettings && numberSettings.options !== 'RANGE'"
    v-model:defaultValue="numberSettings.defaultValue"
    :name="['settings', 'defaultValue']"
    :subtitle="$t.components.placeholder.defaultTitle"
    :btnText="$t.components.buttons.block.addDefaultValue"
    :isDecimal="numberSettings.options === 'DECIMAL'"
    :min="numberSettings.isNegative ? -Infinity : 0"
  />
  <AddNumbersRange
    v-else-if="numberSettings && numberSettings.options === 'RANGE'"
    v-model:numbersRange="numberSettings.defaultRange"
    :name="['settings', 'defaultRange']"
    :subtitle="$t.components.placeholder.defaultTitle"
    :btnText="$t.components.buttons.block.addDefaultValue"
    :min="numberSettings.isNegative ? -Infinity : 0"
  />
  <AddLinksButon
    v-else-if="isLinksBlockSettings(tempBlock.settings)"
    v-model:linkValue="tempBlock.settings.defaultValue"
    :name="['settings', 'defaultValue']"
    :subtitle="$t.components.placeholder.defaultTitle"
    :btnText="$t.components.buttons.block.addDefaultValue"
    :rules="rules"
  />
  <AddTextButton
    v-else-if="isTextBlockSettings(tempBlock.settings)"
    v-model:textValue="tempBlock.settings.defaultValue"
    :name="['settings', 'defaultValue']"
    :subtitle="$t.components.placeholder.defaultTitle"
    :btnText="$t.components.buttons.block.addDefaultValue"
    :rules="rules"
  />
</template>
