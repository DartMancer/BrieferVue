import GlobalTexts from "@/app/locale";
import { AdvantagesBlocksType } from "./AdvantagesBlocksType";

const className = "title";

export const advantagesBlocks = <AdvantagesBlocksType[][]>[
  [
    {
      content: [
        { text: GlobalTexts.main.endlessCallsFirst, className: className },
        { text: GlobalTexts.main.endlessCallsSecond },
      ],
      without: true,
    },
    {
      content: [
        { text: GlobalTexts.main.readyTemplateFirst, className: className },
        { text: GlobalTexts.main.readyTemplateSecond },
      ],
    },
  ],
  [
    {
      content: [
        { text: GlobalTexts.main.createDocumentFirst },
        { text: GlobalTexts.main.createDocumentSecond, className: className },
      ],
      without: true,
    },
    {
      content: [
        { text: GlobalTexts.main.generateDocumentFirst, className: className },
        { text: GlobalTexts.main.generateDocumentSecond },
      ],
    },
  ],
  [
    {
      content: [
        { text: GlobalTexts.main.beautifullSiteFirst },
        { text: GlobalTexts.main.beautifullSiteSecond, className: className },
      ],
      without: true,
    },
    {
      content: [
        { text: GlobalTexts.main.clientChooseFirst },
        { text: GlobalTexts.main.clientChooseSecond, className: className },
        { text: GlobalTexts.main.clientChooseThird },
      ],
    },
  ],
  [
    {
      content: [
        { text: GlobalTexts.main.customersLossFirst, className: className },
        { text: GlobalTexts.main.customersLossSecond },
      ],
      without: true,
    },
    {
      content: [
        { text: GlobalTexts.main.newRequestFirst },
        { text: GlobalTexts.main.newRequestSecond, className: className },
        { text: GlobalTexts.main.newRequestThird },
      ],
    },
  ],
];
