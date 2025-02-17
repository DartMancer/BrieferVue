import GlobalTexts from "@/app/locale";
import {
  AnswersSetting,
  DatePicker,
  RadioComponent,
  ScaleRatingComponent,
} from "@/widgets/BlockSettings";

export const getParamsUtils = (param: string) => {
  switch (param) {
    case GlobalTexts.blocks.icons.checkBoxIcon:
      return AnswersSetting;
    case GlobalTexts.blocks.icons.dateIcon:
      return DatePicker;
    // case GlobalTexts.blocks.icons.dropDownIcon:
    //   return AnswersSetting;
    case GlobalTexts.blocks.icons.radioIcon:
      return RadioComponent;
    // case GlobalTexts.blocks.icons.scaleRatingIcon:
    //   return ScaleRatingComponent;
    default:
      return null;
  }
};
