import GlobalTexts from "@/app/locale";
import {
  ShortTextField,
  LongTextField,
  RadioFormField,
  CheckBoxListField,
  DropDownListField,
  CheckBoxField,
  NumbersField,
  IntegerField,
  ScaleRatingField,
  PhoneField,
  MailField,
  UploadFileField,
  CalendarField,
  ITNField,
  ColorPickerField,
  LinkField,
} from "@/widgets";

export const getFormFieldUtils = (field: string) => {
  switch (field) {
    case GlobalTexts.blocks.icons.shortTextIcon:
      return ShortTextField;
    case GlobalTexts.blocks.icons.longTextIcon:
      return LongTextField;
    case GlobalTexts.blocks.icons.clearTextIcon:
      return null;
    case GlobalTexts.blocks.icons.radioIcon:
      return RadioFormField;
    case GlobalTexts.blocks.icons.checkBoxIcon:
      return CheckBoxListField;
    // case GlobalTexts.blocks.icons.dropDownIcon:
    //   return DropDownListField;
    // case GlobalTexts.blocks.icons.checkIcon:
    //   return CheckBoxField;
    case GlobalTexts.blocks.icons.numbersIcon:
      return NumbersField;
    // case GlobalTexts.blocks.icons.integerIcon:
    //   return IntegerField;
    // case GlobalTexts.blocks.icons.scaleRatingIcon:
    //   return ScaleRatingField;
    // case GlobalTexts.blocks.icons.mailIcon:
    //   return MailField;
    // case GlobalTexts.blocks.icons.linkIcon:
    //   return LinkField;
    // case GlobalTexts.blocks.icons.phoneIcon:
    //   return PhoneField;
    case GlobalTexts.blocks.icons.fileIcon:
      return UploadFileField;
    case GlobalTexts.blocks.icons.dateIcon:
      return CalendarField;
    // case GlobalTexts.blocks.icons.innIcon:
    //   return ITNField;
    case GlobalTexts.blocks.icons.colorIcon:
      return ColorPickerField;
    default:
      return null;
  }
};
