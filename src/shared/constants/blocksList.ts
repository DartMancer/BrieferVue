import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";
import { GlobalTexts as t } from "@/app/locale/ru";
import { OptionType } from "@/shared/types";
import { BlockConfiguration } from "@/entities/form";

const DEFAULT_REQUIRED_FIELD = false;
const DEFAULT_VALUE = "";

const variables: OptionType[] = [{ value: uuidv4(), label: "Вариант 1" }];

export const BLOCKS_LIST = ref<BlockConfiguration[]>([
  {
    id: uuidv4(),
    type: "TEXT",
    blockTitle: t.blocks.title.shortText,
    icon: t.blocks.icons.shortTextIcon,
    supportText: t.blocks.support.shortText,
    question: t.blocks.title.shortText,
    commentary: "",
    requiredField: DEFAULT_REQUIRED_FIELD,
    settings: { defaultValue: DEFAULT_VALUE },
  },
  {
    id: uuidv4(),
    type: "TEXTAREA",
    blockTitle: t.blocks.title.longText,
    icon: t.blocks.icons.longTextIcon,
    supportText: t.blocks.support.longText,
    question: t.blocks.title.longText,
    commentary: "",
    requiredField: DEFAULT_REQUIRED_FIELD,
    settings: { defaultValue: DEFAULT_VALUE },
  },
  {
    id: uuidv4(),
    type: "CLEAR_TEXT",
    blockTitle: t.blocks.title.clearText,
    icon: t.blocks.icons.clearTextIcon,
    supportText: t.blocks.support.clearText,
    question: t.blocks.title.clearText,
    commentary: "",
    requiredField: DEFAULT_REQUIRED_FIELD,
    settings: {},
  },
  {
    id: uuidv4(),
    type: "RADIO",
    blockTitle: t.blocks.title.radioText,
    icon: t.blocks.icons.radioIcon,
    supportText: t.blocks.support.radioText,
    question: t.blocks.title.radioText,
    commentary: "",
    requiredField: DEFAULT_REQUIRED_FIELD,
    settings: { listLooks: "TILE", variables },
  },
  {
    id: uuidv4(),
    type: "MULTIPLE_SELECT",
    blockTitle: t.blocks.title.multipleSelectText,
    icon: t.blocks.icons.multipleIcon,
    supportText: t.blocks.support.multipleSelectText,
    question: t.blocks.title.multipleSelectText,
    commentary: "",
    requiredField: DEFAULT_REQUIRED_FIELD,
    settings: { variables },
  },
  {
    id: uuidv4(),
    type: "COLOR",
    blockTitle: t.blocks.title.colorText,
    icon: t.blocks.icons.colorIcon,
    supportText: t.blocks.support.colorText,
    question: t.blocks.title.colorText,
    commentary: "",
    requiredField: DEFAULT_REQUIRED_FIELD,
    settings: {},
  },
  {
    id: uuidv4(),
    type: "DIVIDER",
    blockTitle: t.blocks.title.dividerText,
    icon: t.blocks.icons.dividerIcon,
    supportText: t.blocks.support.dividerText,
    isSpecial: true,
    settings: { listLooks: "LINE", dividerText: "" },
  },
  {
    id: uuidv4(),
    type: "CHECKBOX",
    blockTitle: t.blocks.title.checkIconText,
    icon: t.blocks.icons.checkBoxIcon,
    supportText: t.blocks.support.checkBoxText,
    question: t.blocks.title.checkIconText,
    commentary: "",
    requiredField: DEFAULT_REQUIRED_FIELD,
    settings: {},
  },
  {
    id: uuidv4(),
    type: "NUMBER",
    blockTitle: t.blocks.title.numbersText,
    icon: t.blocks.icons.numbersIcon,
    supportText: t.blocks.support.numbersText,
    question: t.blocks.title.numbersText,
    commentary: "",
    requiredField: DEFAULT_REQUIRED_FIELD,
    settings: {
      defaultValue: 0,
      defaultRange: undefined,
      isNegative: false,
      options: "INTEGER",
      numbersRange: {
        minNumber: 0,
        maxNumber: 0,
      },
    },
  },
  {
    id: uuidv4(),
    type: "CONTACTS",
    blockTitle: t.blocks.title.contactsText,
    icon: t.blocks.icons.contactsIcon,
    supportText: t.blocks.support.contactsText,
    question: t.blocks.title.contactsText,
    commentary: "",
    requiredField: DEFAULT_REQUIRED_FIELD,
    settings: { maxContacts: 10 },
  },
  {
    id: uuidv4(),
    type: "LINKS",
    blockTitle: t.blocks.title.linkText,
    icon: t.blocks.icons.linksIcon,
    supportText: t.blocks.support.linkText,
    question: t.blocks.title.linkText,
    commentary: "",
    requiredField: DEFAULT_REQUIRED_FIELD,
    settings: { defaultValue: DEFAULT_VALUE, maxLinks: 10 },
  },
  {
    id: uuidv4(),
    type: "DATE",
    blockTitle: t.blocks.title.dateText,
    icon: t.blocks.icons.dateIcon,
    supportText: t.blocks.support.dateText,
    question: t.blocks.title.dateText,
    commentary: "",
    requiredField: DEFAULT_REQUIRED_FIELD,
    settings: {
      isDateRange: false,
      dateRange: undefined,
      isLimitRange: false,
    },
  },
  {
    id: uuidv4(),
    type: "FILE",
    blockTitle: t.blocks.title.fileText,
    icon: t.blocks.icons.fileIcon,
    supportText: t.blocks.support.fileText,
    question: t.blocks.title.fileText,
    commentary: "",
    requiredField: DEFAULT_REQUIRED_FIELD,
    settings: { maxSize: 20, maxFiles: 20 },
  },
]);
