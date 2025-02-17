import GlobalTexts from "@/app/locale";
import { AdvantagesBlocksType } from "./AdvantagesBlocksType";

const className = "title";

export const advantagesBlocks = <AdvantagesBlocksType[][]>[
  [
    {
      content: [
        {
          text: GlobalTexts.pages.main.endlessCallsFirst,
          className: className,
        },
        { text: GlobalTexts.pages.main.endlessCallsSecond },
      ],
      without: true,
    },
    {
      content: [
        {
          text: GlobalTexts.pages.main.readyTemplateFirst,
          className: className,
        },
        { text: GlobalTexts.pages.main.readyTemplateSecond },
      ],
    },
  ],
  [
    {
      content: [
        { text: GlobalTexts.pages.main.createDocumentFirst },
        {
          text: GlobalTexts.pages.main.createDocumentSecond,
          className: className,
        },
      ],
      without: true,
    },
    {
      content: [
        {
          text: GlobalTexts.pages.main.generateDocumentFirst,
          className: className,
        },
        { text: GlobalTexts.pages.main.generateDocumentSecond },
      ],
    },
  ],
  [
    {
      content: [
        { text: GlobalTexts.pages.main.beautifullSiteFirst },
        {
          text: GlobalTexts.pages.main.beautifullSiteSecond,
          className: className,
        },
      ],
      without: true,
    },
    {
      content: [
        { text: GlobalTexts.pages.main.clientChooseFirst },
        {
          text: GlobalTexts.pages.main.clientChooseSecond,
          className: className,
        },
        { text: GlobalTexts.pages.main.clientChooseThird },
      ],
    },
  ],
  [
    {
      content: [
        {
          text: GlobalTexts.pages.main.customersLossFirst,
          className: className,
        },
        { text: GlobalTexts.pages.main.customersLossSecond },
      ],
      without: true,
    },
    {
      content: [
        { text: GlobalTexts.pages.main.newRequestFirst },
        { text: GlobalTexts.pages.main.newRequestSecond, className: className },
        { text: GlobalTexts.pages.main.newRequestThird },
      ],
    },
  ],
];
