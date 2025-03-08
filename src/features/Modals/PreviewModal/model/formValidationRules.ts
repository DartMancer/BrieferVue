import GlobalTexts from "@/app/locale";
// import {
//   ContactsBlockSettings,
//   DateBlockSettings,
//   FileBlockSettings,
//   LinksBlockSettings,
//   NumbersRangeType,
// } from "@/entities/form";
import { Rule } from "ant-design-vue/es/form";

export const reqFieldRules: Record<string, Rule[]> = {
  value: [
    {
      required: true,
      trigger: "change",
      message: GlobalTexts.blocks.validation.fieldRequired,
    },
  ],
};

export const reqBlurFieldRules: Record<string, Rule[]> = {
  value: [
    {
      required: true,
      trigger: "blur",
      message: GlobalTexts.blocks.validation.fieldRequired,
    },
  ],
};

export const linkRules: Record<string, Rule[]> = {
  url: [
    {
      required: true,
      type: "url",
      trigger: "blur",
      message: GlobalTexts.blocks.validation.invalidLink,
    },
  ],
};

// export const numbersRules: Record<keyof NumbersRangeType, Rule[]> = {
//   minNumber: [
//     {
//       required: true,
//       type: "number",
//       message: GlobalTexts.blocks.validation.fieldRequired,
//       trigger: "blur",
//     },
//   ],
//   maxNumber: [
//     {
//       required: true,
//       type: "number",
//       message: GlobalTexts.blocks.validation.fieldRequired,
//       trigger: "blur",
//     },
//   ],
// };

// export const contactsRules: Record<keyof ContactsBlockSettings, Rule[]> = {
//   maxContacts: [
//     {
//       required: true,
//       type: "number",
//       message: GlobalTexts.blocks.validation.fieldRequired,
//       trigger: "change",
//     },
//   ],
// };

// export const dateRules: Record<keyof DateBlockSettings, Rule[]> = {
//   isDateRange: [],
//   isLimitRange: [],
//   dateRange: [
//     {
//       required: true,
//       message: GlobalTexts.blocks.validation.fieldRequired,
//       trigger: "change",
//     },
//   ],
// };

// export const filesRules: Record<keyof FileBlockSettings, Rule[]> = {
//   maxSize: [
//     {
//       required: true,
//       type: "number",
//       message: GlobalTexts.blocks.validation.fieldRequired,
//       trigger: "blur",
//     },
//   ],
//   maxFiles: [
//     {
//       required: true,
//       type: "number",
//       message: GlobalTexts.blocks.validation.fieldRequired,
//       trigger: "blur",
//     },
//   ],
// };
