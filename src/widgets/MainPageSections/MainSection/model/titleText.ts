import GlobalTexts from "@/app/locale";
import { TitleType } from "./TitleType";

const className = "title";
const accentClassName = `${className} accent`;

export const chooseTitleTexts = <TitleType>{
  content: [
    { text: GlobalTexts.main.chooseTemplateFirst, className: className },
    { text: GlobalTexts.main.chooseTemplateSecond, className: accentClassName },
  ],
};

export const createTitleTexts = <TitleType>{
  content: [
    { text: GlobalTexts.main.createTemplateFirst, className: className },
    { text: GlobalTexts.main.createTemplateSecond, className: accentClassName },
  ],
};
