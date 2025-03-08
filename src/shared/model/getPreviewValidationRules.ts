import { Rule } from "ant-design-vue/es/form";
import { isLinksBlockSettings } from "./blocksTypeGuards";
import GlobalTexts from "@/app/locale";

export const getPreviewValidationRules = (settings: any): Rule[] => {
  const rules: Rule[] = [];

  if (isLinksBlockSettings(settings)) {
    rules.push({
      type: "url",
      trigger: "blur",
      message: GlobalTexts.blocks.validation.invalidLink,
    });
  }

  return rules;
};
