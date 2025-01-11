<script setup lang="ts">
import { BlockSettings } from "@/entities/form";
import { getRadioLookUtils } from "../model";

const props = defineProps<{
  formBlock: BlockSettings;
  index: number;
}>();
</script>

<template>
  <component
    :is="getRadioLookUtils(props.formBlock.listLooks!)"
    :formBlock="props.formBlock"
    :index="props.index"
  />
</template>
