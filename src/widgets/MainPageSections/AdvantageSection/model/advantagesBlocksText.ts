import GlobalTexts from "@/app/locale";
import { AdvantagesBlocksType } from "./AdvantagesBlocksType";

const className = "title";

export const advantagesBlocks = <AdvantagesBlocksType[][]>[
  [
    {
      content: [
        {
          text: GlobalTexts.pages.main.advantages.endlessCallsMain,
          className: className,
        },
        { text: GlobalTexts.pages.main.advantages.endlessCallsExtra },
      ],
      without: true,
    },
    {
      content: [
        {
          text: GlobalTexts.pages.main.advantages.readyTemplatesMain,
          className: className,
        },
        { text: GlobalTexts.pages.main.advantages.readyTemplatesExtra },
      ],
    },
  ],
  [
    {
      content: [
        { text: GlobalTexts.pages.main.advantages.createDocMain },
        {
          text: GlobalTexts.pages.main.advantages.createDocExtra,
          className: className,
        },
      ],
      without: true,
    },
    {
      content: [
        {
          text: GlobalTexts.pages.main.advantages.docGenMain,
          className: className,
        },
        { text: GlobalTexts.pages.main.advantages.docGenFormat },
      ],
    },
  ],
  [
    {
      content: [
        { text: GlobalTexts.pages.main.advantages.beautySiteMain },
        {
          text: GlobalTexts.pages.main.advantages.beautySiteExtra,
          className: className,
        },
      ],
      without: true,
    },
    {
      content: [
        { text: GlobalTexts.pages.main.advantages.styleChoiceMain },
        {
          text: GlobalTexts.pages.main.advantages.styleChoiceFreedom,
          className: className,
        },
        { text: GlobalTexts.pages.main.advantages.styleChoicePreference },
      ],
    },
  ],
  [
    {
      content: [
        {
          text: GlobalTexts.pages.main.advantages.customersLossMain,
          className: className,
        },
        { text: GlobalTexts.pages.main.advantages.customersLossReason },
      ],
      without: true,
    },
    {
      content: [
        { text: GlobalTexts.pages.main.advantages.newRequestMain },
        {
          text: GlobalTexts.pages.main.advantages.newRequestAction,
          className: className,
        },
        { text: GlobalTexts.pages.main.advantages.newRequestPrompt },
      ],
    },
  ],
];
