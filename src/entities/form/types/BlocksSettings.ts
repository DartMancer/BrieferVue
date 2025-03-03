import { OptionType } from "@/shared/types";
import {
  RadioLooks,
  NumberOptions,
  DividerLooks,
  NumbersRangeType,
  RangeValueType,
} from "./BlockType";

export interface TextBlockSettings {
  defaultValue: string;
}

export interface RadioBlockSettings {
  listLooks: RadioLooks;
  variables: OptionType[];
}

export interface MultipleSelectSettings {
  variables: OptionType[];
}

export interface NumberBlockSettings {
  isNegative: boolean;
  options: NumberOptions;
  numbersRange: NumbersRangeType;
  defaultValue: number | undefined;
  defaultRange: NumbersRangeType | undefined;
}

export interface DividerBlockSettings {
  listLooks: DividerLooks;
  dividerText: string;
}

export interface ContactsBlockSettings {
  maxContacts: number;
}

export interface LinksBlockSettings {
  maxLinks: number;
  defaultValue: string;
}

export interface DateBlockSettings {
  isDateRange: boolean;
  dateRange: RangeValueType | undefined;
  isLimitRange: boolean;
}

export interface FileBlockSettings {
  maxSize: number;
  maxFiles: number;
}

// type RangeValue = [string, string];
// export interface BlockSettings {
//   id: string;

//   //! general
//   generalSettings: GeneralSettingsType;

//   //! common
//   commentary?: string;
//   defaultValue?: string;
//   variables?: ListVariablesType[];

//   //! specific
//   conditions?: ListVariablesType[]; //? ScaleRating
//   listLooks?: "Плитка" | "В один ряд"; //? Radio
//   dateModel?: DatePickerType; //? DatePicker
//   fileModel?: FileType; //? File
// }

// export interface GeneralSettingsType {
//   icon: string;
//   title: string;
//   subtitle: string;
//   isNeedDefault: boolean;
//   requiredField: boolean;
//   supportText: string;
// }

// export interface ListVariablesType {
//   id: string;
//   label: string;
//   value: string;
// }

// export interface DatePickerType {
//   isDateRange: boolean;
//   dateRange?: RangeValue;
//   isLimitRange: boolean;
// }

// export interface FileType {
//   maxSize?: number;
//   maxFiles?: number;
// }
