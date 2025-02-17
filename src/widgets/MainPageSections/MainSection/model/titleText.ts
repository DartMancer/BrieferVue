import GlobalTexts from "@/app/locale";
import { TitleType } from "./TitleType";

const className = "title";
const accentClassName = `${className} accent`;

export const TITLE_CHOOSE = <TitleType>{
  content: [
    { text: GlobalTexts.pages.main.chooseTemplateFirst, className: className },
    {
      text: GlobalTexts.pages.main.chooseTemplateSecond,
      className: accentClassName,
    },
  ],
};

export const TITLE_CREATE = <TitleType>{
  content: [
    { text: GlobalTexts.pages.main.createTemplateFirst, className: className },
    {
      text: GlobalTexts.pages.main.createTemplateSecond,
      className: accentClassName,
    },
  ],
};
