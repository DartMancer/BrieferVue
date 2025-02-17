import { BlockSettings, DividerBlock } from "./BlockSettings";

export type BlockType =
  | "text"
  | "textarea"
  | "clear_text"
  | "radio"
  | "multiple_select"
  | "color"
  | "divider"
  | "checkbox"
  | "number"
  | "contacts"
  | "links"
  | "file"
  | "date";

export type RangeValue = [string, string];

export type RadioLooks = "Плитка" | "В один ряд";

export type DividerLooks = "Текстовый" | "Линия";

export type NumberLooks = "Целое" | "Дробное" | "Промежуток";

export type BlockWithoutDivider = Exclude<BlockSettings, DividerBlock>;

export interface ListVariablesType {
  value: string;
  label: string;
}

export interface DatePickerType {
  isDateRange: boolean;
  dateRange?: RangeValue;
  isLimitRange: boolean;
}

export interface FileType {
  maxSize?: number;
  maxFiles?: number;
}
