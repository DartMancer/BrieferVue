import GlobalTexts from "@/app/locale";
import FreelanceIcon from "@/assets/images/FreelanceIcon.webp";
import ManagerIcon from "@/assets/images/ManagerIcon.webp";
import StudioIcon from "@/assets/images/StudioIcon.webp";
import { UsefullItemType } from "./UsefullItemType";

const className = "accent";

export const USEFULL_ITEMS = <UsefullItemType[]>[
  {
    content: [
      {
        text: GlobalTexts.pages.main.freelanceFirst,
      },
      {
        text: GlobalTexts.pages.main.freelanceSecond,
        className: className,
      },
    ],
    img: FreelanceIcon,
  },
  {
    content: [
      {
        text: GlobalTexts.pages.main.managerFirst,
      },
      {
        text: GlobalTexts.pages.main.managerSecond,
        className: className,
      },
    ],
    img: ManagerIcon,
    reverse: true,
  },
  {
    content: [
      {
        text: GlobalTexts.pages.main.studioFirst,
      },
      {
        text: GlobalTexts.pages.main.studioSecond,
        className: className,
      },
      {
        text: GlobalTexts.pages.main.studioThird,
      },
    ],
    img: StudioIcon,
  },
];
