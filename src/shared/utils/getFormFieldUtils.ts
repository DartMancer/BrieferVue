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
    case GlobalTexts.icons.shortTextIcon:
      return ShortTextField;
    case GlobalTexts.icons.longTextIcon:
      return LongTextField;
    case GlobalTexts.icons.clearTextIcon:
      return null;
    case GlobalTexts.icons.radioIcon:
      return RadioFormField;
    case GlobalTexts.icons.checkBoxIcon:
      return CheckBoxListField;
    case GlobalTexts.icons.dropDownIcon:
      return DropDownListField;
    case GlobalTexts.icons.checkIcon:
      return CheckBoxField;
    case GlobalTexts.icons.numbersIcon:
      return NumbersField;
    case GlobalTexts.icons.integerIcon:
      return IntegerField;
    case GlobalTexts.icons.scaleRatingIcon:
      return ScaleRatingField;
    case GlobalTexts.icons.mailIcon:
      return MailField;
    case GlobalTexts.icons.linkIcon:
      return LinkField;
    case GlobalTexts.icons.phoneIcon:
      return PhoneField;
    case GlobalTexts.icons.fileIcon:
      return UploadFileField;
    case GlobalTexts.icons.dateIcon:
      return CalendarField;
    case GlobalTexts.icons.innIcon:
      return ITNField;
    case GlobalTexts.icons.colorIcon:
      return ColorPickerField;
    default:
      return null;
  }
};
