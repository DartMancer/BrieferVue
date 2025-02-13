import GlobalTexts from "@/app/locale";
import {
  AnswersSetting,
  DatePicker,
  RadioComponent,
  ScaleRatingComponent,
} from "@/widgets/BlockSettings";

export const getParamsUtils = (param: string) => {
  switch (param) {
    case GlobalTexts.icons.checkBoxIcon:
      return AnswersSetting;
    case GlobalTexts.icons.dateIcon:
      return DatePicker;
    case GlobalTexts.icons.dropDownIcon:
      return AnswersSetting;
    case GlobalTexts.icons.radioIcon:
      return RadioComponent;
    case GlobalTexts.icons.scaleRatingIcon:
      return ScaleRatingComponent;
    default:
      return null;
  }
};
