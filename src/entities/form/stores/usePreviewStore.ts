import { ref } from "vue";
import { defineStore, storeToRefs } from "pinia";
import { FieldBlockBase, useFormStore } from "@/entities/form";

export const usePreviewStore = defineStore("formStore", () => {
  const { formBlocks } = storeToRefs(useFormStore());

  const formFields = ref<FieldBlockBase[]>([]);
  const formModel = ref<Record<string, FieldBlockBase>>({});

  const initialize = () => {
    formFields.value = formBlocks.value.map(
      ({ icon, blockTitle, supportText, ...rest }) => ({
        ...rest,
        value:
          (rest.settings as { defaultValue?: unknown })?.defaultValue || null,
      })
    );

    formModel.value = Object.fromEntries(
      formFields.value.map((field) => [field.id, field])
    );
  };

  return {
    formFields,
    formModel,
    initialize,
  };
});
