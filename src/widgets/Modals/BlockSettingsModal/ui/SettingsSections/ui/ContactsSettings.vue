<script lang="ts" setup>
import { computed } from "vue";
import { isContactsBlockSettings } from "@/shared/model";
import { BlockConfiguration, ContactsBlockSettings } from "@/entities/form";
import { contactsRules } from "@/features/Modals/BlockSettingsModal";
import { NumberInput } from "@/widgets/Modals/BlockSettingsModal";

const tempBlock = defineModel<BlockConfiguration>("tempBlock", {
  required: true,
});

const settings = computed(() => {
  return isContactsBlockSettings(tempBlock.value.settings)
    ? (tempBlock.value.settings as ContactsBlockSettings)
    : null;
});
</script>

<template>
  <NumberInput
    v-if="settings"
    class="contacts-input"
    v-model:value="settings.maxContacts"
    :name="['settings', 'maxContacts']"
    :subtitle="$t.components.placeholder.contactsSubtitle"
    :placeholder="$t.components.placeholder.enterNumber"
    :max="10"
    :rules="contactsRules.maxContacts"
  />
</template>

<style lang="scss" scoped>
.contacts-input {
  width: 100%;
}
</style>
