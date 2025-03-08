<script lang="ts" setup>
import { FieldBlockBase, RadioBlockSettings } from "@/entities/form";
import { RadioOneRow, RadioTile } from "../ModalWidgets";
import { reqFieldRules } from "@/features/Modals/PreviewModal/model";

const field = defineModel<FieldBlockBase>("field", { required: true });

const settings = field.value.settings as RadioBlockSettings;
</script>

<template>
  <RadioTile
    v-if="settings.listLooks === 'TILE'"
    v-model:value="field.value"
    :name="[field.id, 'value']"
    :rules="field.requiredField ? reqFieldRules.value : null"
    :settings="settings"
  />
  <RadioOneRow
    v-else
    v-model:value="field.value"
    :name="[field.id, 'value']"
    :rules="field.requiredField ? reqFieldRules.value : null"
    :settings="settings"
  />
</template>
