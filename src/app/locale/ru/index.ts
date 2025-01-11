import { TextsCompanyInfo } from "./companyInfo";
import { TextsBlocksDefault } from "./defaultBlock";
import { TextsFooter } from "./footer";
import { TextsFormDesigner } from "./formDesigner";
import { TextsHeader } from "./header";
import { IconsNames } from "./icons";
import { TextsListLooks } from "./listLooks";
import { TextsMain } from "./main";
import { TextsBlocksSupport } from "./supportBlock";
import { TextsTariff } from "./tarif";
import { TextsBlocksTitle } from "./titleBlock";
import { TextsValidation } from "./validation";

export const GlobalTexts = {
  blocks: {
    title: TextsBlocksTitle,
    support: TextsBlocksSupport,
    default: TextsBlocksDefault,
  },
  footer: TextsFooter,
  formDesigner: TextsFormDesigner,
  header: TextsHeader,
  companyInfo: TextsCompanyInfo,
  icons: IconsNames,
  listLooks: TextsListLooks,
  main: TextsMain,
  tariff: TextsTariff,
  validation: TextsValidation,
};
