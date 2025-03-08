<script lang="ts" setup>
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { usePreviewStore } from "@/entities/form";
import FormFieldBody from "./FormFieldBody.vue";
import SpecialFieldBody from "./SpecialFieldBody.vue";

const { formFields } = storeToRefs(usePreviewStore());
const props = defineProps<{ id: string }>();

const field = computed(() =>
  formFields.value.find((field) => field.id === props.id)
);
</script>

<template>
  <a-flex v-if="field" class="form-field">
    <FormFieldBody v-if="!field.isSpecial" v-model:field="field" />
    <SpecialFieldBody v-else v-model:field="field" />
  </a-flex>
</template>

<style lang="scss" scoped>
.form-field {
  width: 100%;
}
</style>
