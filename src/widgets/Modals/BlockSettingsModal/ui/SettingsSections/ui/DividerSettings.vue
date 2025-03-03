<script lang="ts" setup>
import { BlockConfiguration, DividerBlockSettings } from "@/entities/form";
import { isDividerBlockSettings } from "@/shared/model";
import { Input } from "@/widgets/Modals/BlockSettingsModal";
import { computed } from "vue";

const tempBlock = defineModel<BlockConfiguration>("tempBlock", {
  required: true,
});

const settings = computed(() => {
  return isDividerBlockSettings(tempBlock.value.settings)
    ? (tempBlock.value.settings as DividerBlockSettings)
    : null;
});
</script>

<template>
  <Input
    v-if="settings"
    v-model:value="settings.dividerText"
    :name="['settings', 'dividerText']"
    :placeholder="$t.components.placeholder.enterText"
    :subtitle="$t.components.placeholder.dividerSubtitle"
  />
</template>
