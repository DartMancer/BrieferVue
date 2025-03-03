import GlobalTexts from "@/app/locale";
import { TitleType } from "./TitleType";

const className = "title";
const accentClassName = `${className} accent`;

export const TITLE_CHOOSE = <TitleType>{
  content: [
    { text: GlobalTexts.pages.main.main.chooseFirst, className: className },
    {
      text: GlobalTexts.pages.main.main.chooseSecond,
      className: accentClassName,
    },
  ],
};

export const TITLE_CREATE = <TitleType>{
  content: [
    { text: GlobalTexts.pages.main.main.createFirst, className: className },
    {
      text: GlobalTexts.pages.main.main.createSecond,
      className: accentClassName,
    },
  ],
};
