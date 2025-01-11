import GlobalTexts from "@/app/locale";
import { BlockSettings } from "@/entities/form";
import { Rule } from "ant-design-vue/es/form";

export const inputRequiredRule = (formBlock: BlockSettings) => {
  return {
    required: formBlock.generalSettings.requiredField,
    message: `Поле "${formBlock.generalSettings.title}" обязательно к заполнению.`,
    trigger: "change",
  };
};

export const inputMailRule = (formBlock: BlockSettings) => {
  return [
    inputRequiredRule(formBlock),
    {
      type: "email",
      message: GlobalTexts.validation.invalidMail,
      trigger: "change",
    },
  ];
};

export const inputLinkRule = (formBlock: BlockSettings) => {
  return [
    inputRequiredRule(formBlock),
    {
      type: "url",
      message: GlobalTexts.validation.invalidLink,
      trigger: "change",
    },
  ];
};

// export const selectScaleRateRule = (formBlock: BlockSettings) => {
//   return [
//     inputRequiredRule(formBlock),
//     {
//       required: formBlock.generalSettings.requiredField,
//       message: GlobalTexts.validation.invalidLink,
//       trigger: "change",
//     },
//   ];
// };

// export const inputPhoneRule = (formBlock: BlockSettings) => {
//   return [
//     inputRequiredRule(formBlock),
//     {
//       required: formBlock.generalSettings.requiredField,
//       message: GlobalTexts.validation.invalidPhone,
//       trigger: "change",
//     },
//   ];
// };

export const inputInnRule = (formBlock: BlockSettings) => {
  return [
    inputRequiredRule(formBlock),
    {
      validator: (_rule: Rule, value: string) => {
        if (!value) return Promise.resolve();
        if (value.toString().length < 10 || value.toString().length > 12) {
          return Promise.reject(GlobalTexts.validation.invalidInn);
        }
      },
      trigger: "change",
    },
  ];
};
