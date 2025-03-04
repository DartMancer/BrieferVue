import GlobalTexts from "@/app/locale";
import { FileSettings } from "@/widgets/BlockSettings";

export const getSettingsParamsUtils = (setting: string) => {
  switch (setting) {
    case GlobalTexts.blocks.icons.fileIcon:
      return FileSettings;
    default:
      return null;
  }
};
