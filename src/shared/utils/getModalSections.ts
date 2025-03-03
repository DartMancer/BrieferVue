import { isDividerBlockSettings } from "../model";

export function getModalSections(settings: any) {
  return {
    hasEdit: !isDividerBlockSettings(settings),
    hasAnswers: settings && "variables" in settings,
    hasAppearance: settings && "listLooks" in settings,
    hasSettings: !isDividerBlockSettings(settings),
  };
}

export function getModalSettings(settings: any) {
  return {
    isRequired: !isDividerBlockSettings(settings),
    isDivider:
      isDividerBlockSettings(settings) && settings.listLooks === "TEXT",
  };
}
