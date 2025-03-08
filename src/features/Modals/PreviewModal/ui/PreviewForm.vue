<script lang="ts" setup>
import { onMounted, onUnmounted } from "vue";
import { storeToRefs } from "pinia";
import { usePreviewStore } from "@/entities/form";
import FormField from "./FormField.vue";
import FormButton from "./FormButton.vue";

const { formFields, formModel } = storeToRefs(usePreviewStore());

let observer: MutationObserver | null = null;

onMounted(() => {
  const formContainer = document.querySelector(".ant-form");
  if (!formContainer) return;

  observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      const target = mutation.target as HTMLElement;

      if (target.classList.contains("ant-form-item")) {
        const formBody = target.closest(".form-body");
        if (!formBody) return;

        const hasError = target.classList.contains("ant-form-item-has-error");
        const hasErrClass = formBody.classList.contains("err");

        if (hasError && !hasErrClass) formBody.classList.add("err");
        else if (!hasError && hasErrClass) formBody.classList.remove("err");
      }
    });
  });

  observer.observe(formContainer, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["class"],
  });
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});

const onFinish = (value: any) => {
  if (!formFields.value) return;
  console.log(value);
};

const onFinishFailed = (value: any) => {
  console.log("Error:", value);
};
</script>

<template>
  <a-form
    v-model:model="formModel"
    class="fields-form"
    layout="vertical"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <FormField v-for="field in formFields" :id="field.id" />
    <FormButton />
  </a-form>
</template>
