import { Rule } from "ant-design-vue/es/form";
import { linksRules } from "@/features/Modals/BlockSettingsModal";
import { isLinksBlockSettings } from "./blocksTypeGuards";

export const getSettingsValidationRules = (settings: any): Rule[] | null => {
  if (isLinksBlockSettings(settings)) {
    return linksRules.defaultValue;
  }

  return null;
};
