import GlobalTexts from "@/app/locale";
import FreelanceIcon from "@/assets/images/FreelanceIcon.webp";
import ManagerIcon from "@/assets/images/ManagerIcon.webp";
import StudioIcon from "@/assets/images/StudioIcon.webp";
import { UsefullItemType } from "./UsefullItemType";

const className = "accent";

export const usefullItems = <UsefullItemType[]>[
  {
    content: [
      {
        text: GlobalTexts.main.freelanceFirst,
      },
      {
        text: GlobalTexts.main.freelanceSecond,
        className: className,
      },
    ],
    img: FreelanceIcon,
  },
  {
    content: [
      {
        text: GlobalTexts.main.managerFirst,
      },
      {
        text: GlobalTexts.main.managerSecond,
        className: className,
      },
    ],
    img: ManagerIcon,
    reverse: true,
  },
  {
    content: [
      {
        text: GlobalTexts.main.studioFirst,
      },
      {
        text: GlobalTexts.main.studioSecond,
        className: className,
      },
      {
        text: GlobalTexts.main.studioThird,
      },
    ],
    img: StudioIcon,
  },
];
