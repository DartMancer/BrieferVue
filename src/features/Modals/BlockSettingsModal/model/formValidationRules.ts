import GlobalTexts from "@/app/locale";
import {
  ContactsBlockSettings,
  DateBlockSettings,
  FileBlockSettings,
  LinksBlockSettings,
  NumbersRangeType,
} from "@/entities/form";
import { Rule } from "ant-design-vue/es/form";

export const settingsFormRules: Record<string, Rule[]> = {
  question: [
    {
      required: true,
      trigger: "blur",
      message: GlobalTexts.blocks.validation.questionRequired,
    },
  ],
};

export const numbersRules: Record<keyof NumbersRangeType, Rule[]> = {
  minNumber: [
    {
      required: true,
      type: "number",
      message: GlobalTexts.blocks.validation.fieldRequired,
      trigger: "blur",
    },
  ],
  maxNumber: [
    {
      required: true,
      type: "number",
      message: GlobalTexts.blocks.validation.fieldRequired,
      trigger: "blur",
    },
  ],
};

export const contactsRules: Record<keyof ContactsBlockSettings, Rule[]> = {
  maxContacts: [
    {
      required: true,
      type: "number",
      message: GlobalTexts.blocks.validation.fieldRequired,
      trigger: "change",
    },
  ],
};

export const linksRules: Record<keyof LinksBlockSettings, Rule[]> = {
  defaultValue: [
    {
      type: "url",
      trigger: "blur",
      message: GlobalTexts.blocks.validation.invalidLink,
    },
  ],
  maxLinks: [
    {
      required: true,
      type: "number",
      message: GlobalTexts.blocks.validation.fieldRequired,
      trigger: "change",
    },
  ],
};

export const dateRules: Record<keyof DateBlockSettings, Rule[]> = {
  isDateRange: [],
  isLimitRange: [],
  dateRange: [
    {
      required: true,
      message: GlobalTexts.blocks.validation.fieldRequired,
      trigger: "change",
    },
  ],
};

export const filesRules: Record<keyof FileBlockSettings, Rule[]> = {
  maxSize: [
    {
      required: true,
      type: "number",
      message: GlobalTexts.blocks.validation.fieldRequired,
      trigger: "blur",
    },
  ],
  maxFiles: [
    {
      required: true,
      type: "number",
      message: GlobalTexts.blocks.validation.fieldRequired,
      trigger: "blur",
    },
  ],
};
