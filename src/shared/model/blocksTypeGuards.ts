import {
  TextBlockSettings,
  RadioBlockSettings,
  MultipleSelectSettings,
  DividerBlockSettings,
  NumberBlockSettings,
  ContactsBlockSettings,
  LinksBlockSettings,
  FileBlockSettings,
  DateBlockSettings,
} from "@/entities/form";

export function isTextBlockSettings(
  settings: any
): settings is TextBlockSettings {
  return "defaultValue" in settings;
}

export function isRadioBlockSettings(
  settings: any
): settings is RadioBlockSettings {
  return "listLooks" in settings && "variables" in settings;
}

export function isMultipleSelectSettings(
  settings: any
): settings is MultipleSelectSettings {
  return "variables" in settings;
}

export function isNumberBlockSettings(
  settings: any
): settings is NumberBlockSettings {
  return (
    "isNegative" in settings &&
    "options" in settings &&
    "numbersRange" in settings &&
    ("defaultValue" in settings || "defaultRange" in settings)
  );
}

export function isDividerBlockSettings(
  settings: unknown
): settings is DividerBlockSettings {
  return (
    !!settings &&
    typeof settings === "object" &&
    "listLooks" in settings &&
    "dividerText" in settings
  );
}

export function isContactsBlockSettings(
  settings: any
): settings is ContactsBlockSettings {
  return "maxContacts" in settings;
}

export function isLinksBlockSettings(
  settings: any
): settings is LinksBlockSettings {
  return "maxLinks" in settings;
}

export function isDateBlockSettings(
  settings: any
): settings is DateBlockSettings {
  return "isDateRange" in settings && "isLimitRange" in settings;
}

export function isFileBlockSettings(
  settings: any
): settings is FileBlockSettings {
  return "maxSize" in settings && "maxFiles" in settings;
}
