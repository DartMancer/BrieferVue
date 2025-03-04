<script lang="ts" setup>
import { computed } from "vue";
import { isLinksBlockSettings } from "@/shared/model";
import { BlockConfiguration, LinksBlockSettings } from "@/entities/form";
import { linksRules } from "@/features/Modals/BlockSettingsModal";
import { NumberInput } from "@/widgets/Modals/BlockSettingsModal";

const tempBlock = defineModel<BlockConfiguration>("tempBlock", {
  required: true,
});

const settings = computed(() => {
  return isLinksBlockSettings(tempBlock.value.settings)
    ? (tempBlock.value.settings as LinksBlockSettings)
    : null;
});
</script>

<template>
  <NumberInput
    v-if="settings"
    class="links-input"
    v-model:value="settings.maxLinks"
    :name="['settings', 'maxLinks']"
    :subtitle="$t.components.placeholder.linksSubtitle"
    :placeholder="$t.components.placeholder.enterNumber"
    :min="0"
    :max="10"
    :rules="linksRules.maxLinks"
  />
</template>

<style lang="scss" scoped>
.links-input {
  width: 100%;
}
</style>
