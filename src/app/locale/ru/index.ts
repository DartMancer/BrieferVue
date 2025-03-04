import {
  IconsNames,
  TextsListLooks,
  TextsBlocksSupport,
  TextsBlocksTitle,
  TextsValidation,
} from "./blocks";

import {
  TextsButtons,
  TextsFooter,
  TextsHeader,
  TextsPlaceholders,
  TextsTariff,
} from "./components";

import {
  TextsCompanyInfo,
  TextsFormDesigner,
  TextsMain,
  TextsProducts,
  TextsTemplates,
} from "./pages";

export const GlobalTexts = {
  blocks: {
    icons: IconsNames,
    looks: TextsListLooks,
    support: TextsBlocksSupport,
    title: TextsBlocksTitle,
    validation: TextsValidation,
  },

  components: {
    buttons: TextsButtons,
    footer: TextsFooter,
    header: TextsHeader,
    placeholder: TextsPlaceholders,
    tariff: TextsTariff,
  },

  pages: {
    companyInfo: TextsCompanyInfo,
    formDesigner: TextsFormDesigner,
    main: TextsMain,
    products: TextsProducts,
    templates: TextsTemplates,
  },
};
