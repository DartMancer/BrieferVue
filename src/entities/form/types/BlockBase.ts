import { BlockType, RangeValue } from "./BlockType";

export interface BlockBase {
  id: string;
  type: BlockType;
  title: string;
  subtitle: string;
  requiredField: boolean;
  supportText: string;
}

export interface TextBlock extends BlockBase {
  type: "text" | "textarea" | "clear_text";
  defaultValue?: string;
}

export interface RadioBlock extends BlockBase {
  type: "radio";
  listLooks: "Плитка" | "В один ряд";
  variables: ListVariablesType[];
}

export interface FileBlock extends BlockBase {
  type: "file";
  fileModel: FileType;
}

export interface CheckboxBlock extends BlockBase {
  type: "checkbox";
  variables: ListVariablesType[];
}

export interface NumberBlock extends BlockBase {
  type: "number";
  defaultValue?: string;
}

export interface DateBlock extends BlockBase {
  type: "date";
  dateModel: DatePickerType;
}

export type BlockSettings =
  | TextBlock
  | RadioBlock
  | FileBlock
  | CheckboxBlock
  | NumberBlock
  | DateBlock;

export interface ListVariablesType {
  id: string;
  label: string;
  value: string;
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
