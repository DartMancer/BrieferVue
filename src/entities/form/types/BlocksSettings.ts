import {
  RadioLooks,
  ListVariablesType,
  NumberLooks,
  DividerLooks,
  DatePickerType,
  FileType,
} from "./BlockType";

export interface TextBlockSettings {
  defaultValue?: string;
}

export interface RadioBlockSettings {
  listLooks: RadioLooks;
  variables: ListVariablesType[];
}

export interface MultipleSelectSettings {
  variables: ListVariablesType[];
}

export interface NumberBlockSettings {
  isNegative: boolean;
  listLooks: NumberLooks;
  numbersRange?: [number, number];
  defaultValue?: string;
}

export interface DividerBlockSetting {
  listLooks: DividerLooks;
  dividerText?: string;
}

export interface ContactsBlockSettings {
  maxContacts: number;
}

export interface LinksBlockSettings {
  maxLinks: number;
  defaultValue?: string;
}

export interface DateBlockSettings {
  dateModel: DatePickerType;
}

export interface FileBlockSettings {
  fileModel: FileType;
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
