import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";
import { GlobalTexts as t } from "@/app/locale/ru";
// import {
//   BlockSettings,
//   ListVariablesType,
//   FileType,
//   DatePickerType,
// } from "@/entities/form/types/BlockBase";
import {
  BlockSettings,
  GeneralSettingsType,
  ListVariablesType,
  DatePickerType,
  FileType,
} from "@/entities/form";

const variables = [
  <ListVariablesType>{
    id: uuidv4(),
    label: "Вариант 1",
    value: "Вариант 1",
  },
];

export const blocks = ref<BlockSettings[]>([
  {
    id: "1",
    generalSettings: <GeneralSettingsType>{
      icon: t.icons.shortTextIcon,
      title: t.blocks.title.shortText,
      subtitle: t.blocks.title.shortText,
      requiredField: false,
      supportText: t.blocks.support.shortText,
      isNeedDefault: true,
    },
    defaultValue: t.blocks.default.enterText,
  },
  {
    id: "2",
    generalSettings: <GeneralSettingsType>{
      icon: t.icons.longTextIcon,
      title: t.blocks.title.longText,
      subtitle: t.blocks.title.longText,
      isNeedDefault: true,
      requiredField: false,
      supportText: t.blocks.support.longText,
    },
    defaultValue: t.blocks.default.enterText,
  },
  {
    id: "3",
    generalSettings: <GeneralSettingsType>{
      icon: t.icons.clearTextIcon,
      title: t.blocks.title.clearText,
      subtitle: t.blocks.title.clearText,
      isNeedDefault: false,
      requiredField: false,
      supportText: t.blocks.support.clearText,
    },
  },
  {
    id: "4",
    generalSettings: <GeneralSettingsType>{
      icon: t.icons.radioIcon,
      title: t.blocks.title.radioText,
      subtitle: t.blocks.title.radioText,
      isNeedDefault: false,
      requiredField: false,
      supportText: t.blocks.support.radioText,
    },
    listLooks: <"Плитка" | "В один ряд">t.listLooks.tile,
    variables: variables,
  },
  {
    id: "5",
    generalSettings: <GeneralSettingsType>{
      icon: t.icons.checkBoxIcon,
      title: t.blocks.title.checkBoxText,
      subtitle: t.blocks.title.checkBoxText,
      isNeedDefault: false,
      requiredField: false,
      supportText: t.blocks.support.checkBoxText,
    },
    variables: variables,
  },
  {
    id: "6",
    generalSettings: <GeneralSettingsType>{
      icon: t.icons.dropDownIcon,
      title: t.blocks.title.dropDownText,
      subtitle: t.blocks.title.dropDownText,
      isNeedDefault: false,
      requiredField: false,
      supportText: t.blocks.support.dropDownText,
    },
    variables: variables,
  },
  {
    id: "7",
    generalSettings: <GeneralSettingsType>{
      icon: t.icons.checkIcon,
      title: t.blocks.title.checkText,
      subtitle: t.blocks.title.checkText,
      isNeedDefault: false,
      requiredField: false,
      supportText: t.blocks.support.checkText,
    },
  },
  {
    id: "8",
    generalSettings: <GeneralSettingsType>{
      icon: t.icons.numbersIcon,
      title: t.blocks.title.numbersText,
      subtitle: t.blocks.title.numbersText,
      isNeedDefault: true,
      requiredField: false,
      supportText: t.blocks.support.numbersText,
    },
    defaultValue: t.blocks.default.enterNumber,
  },
  {
    id: "9",
    generalSettings: <GeneralSettingsType>{
      icon: t.icons.integerIcon,
      title: t.blocks.title.integerText,
      subtitle: t.blocks.title.integerText,
      isNeedDefault: true,
      requiredField: false,
      supportText: t.blocks.support.integerText,
    },
    defaultValue: t.blocks.default.enterInteger,
  },
  {
    id: "10",
    generalSettings: <GeneralSettingsType>{
      icon: t.icons.scaleRatingIcon,
      title: t.blocks.title.scaleRatingText,
      subtitle: t.blocks.title.scaleRatingText,
      isNeedDefault: false,
      requiredField: false,
      supportText: t.blocks.support.scaleRatingText,
    },
    conditions: variables,
    variables: variables,
  },
  {
    id: "11",
    generalSettings: <GeneralSettingsType>{
      icon: t.icons.mailIcon,
      title: t.blocks.title.mailText,
      subtitle: t.blocks.title.mailText,
      isNeedDefault: true,
      requiredField: false,
      supportText: t.blocks.support.mailText,
    },
    defaultValue: t.blocks.default.enterMail,
  },
  {
    id: "12",
    generalSettings: <GeneralSettingsType>{
      icon: t.icons.linkIcon,
      title: t.blocks.title.linkText,
      subtitle: t.blocks.title.linkText,
      isNeedDefault: true,
      requiredField: false,
      supportText: t.blocks.support.linkText,
    },
    defaultValue: t.blocks.default.enterLink,
  },
  {
    id: "13",
    generalSettings: <GeneralSettingsType>{
      icon: t.icons.phoneIcon,
      title: t.blocks.title.phoneText,
      subtitle: t.blocks.title.phoneText,
      isNeedDefault: true,
      requiredField: false,
      supportText: t.blocks.support.phoneText,
    },
    defaultValue: t.blocks.default.enterPhone,
  },
  {
    id: "14",
    generalSettings: <GeneralSettingsType>{
      icon: t.icons.fileIcon,
      title: t.blocks.title.fileText,
      subtitle: t.blocks.title.fileText,
      isNeedDefault: false,
      requiredField: false,
      supportText: t.blocks.support.fileText,
    },
    fileModel: <FileType>{ maxSize: 20, maxFiles: 20 },
  },
  {
    id: "15",
    generalSettings: <GeneralSettingsType>{
      icon: t.icons.dateIcon,
      title: t.blocks.title.dateText,
      subtitle: t.blocks.title.dateText,
      isNeedDefault: false,
      requiredField: false,
      supportText: t.blocks.support.dateText,
    },
    dateModel: <DatePickerType>{
      isDateRange: false,
      isLimitRange: false,
      dateRange: undefined,
    },
  },
  {
    id: "16",
    generalSettings: <GeneralSettingsType>{
      icon: t.icons.cityIcon,
      title: t.blocks.title.cityText,
      subtitle: t.blocks.title.cityText,
      isNeedDefault: false,
      requiredField: false,
      supportText: t.blocks.support.cityText,
    },
  },
  {
    id: "17",
    generalSettings: <GeneralSettingsType>{
      icon: t.icons.innIcon,
      title: t.blocks.title.innText,
      subtitle: t.blocks.title.innText,
      isNeedDefault: true,
      requiredField: false,
      supportText: t.blocks.support.innText,
    },
    defaultValue: t.blocks.default.enterInn,
  },
  {
    id: "18",
    generalSettings: <GeneralSettingsType>{
      icon: t.icons.colorIcon,
      title: t.blocks.title.colorText,
      subtitle: t.blocks.title.colorText,
      isNeedDefault: false,
      requiredField: false,
      supportText: t.blocks.support.colorText,
    },
  },
]);
