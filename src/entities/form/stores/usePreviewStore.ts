import { ref } from "vue";
import { defineStore } from "pinia";
import { BlockSettings, FormFieldState } from "@/entities/form";

export const usePreviewStore = defineStore("formStore", () => {
  const formFields = ref<FormFieldState[]>([]);

  function initialize(blocks: BlockSettings[]) {
    clearReviewForm();
    for (let i = 0; i < blocks.length; i++) {
      const id = blocks[i].id;
      const icon = blocks[i].generalSettings.icon;
      const value = null;
      const newField = <FormFieldState>{ id, icon, value };
      addField(newField);
    }
  }

  function addField(field: FormFieldState) {
    formFields.value.push(field);
  }

  function clearReviewForm() {
    formFields.value = [];
  }

  return {
    formFields,
    initialize,
    clearReviewForm,
  };
});

// import { defineStore } from 'pinia';
// import { ref } from 'vue';
// import { BlockSettings } from '@/shared/models/BlockSettings';

// export const useFormBlocksStore = defineStore('formPreview', () => {
//     const reviewForm = ref<BlockSettings[] | null>([]);
//     const validationErrors = ref<{ [key: string]: string | null }>({});

//     const clearReviewForm = () => {
//         reviewForm.value = null;
//     };

//     return {
//         reviewForm,
//         validationErrors,
//         clearReviewForm,
//     };
// });
