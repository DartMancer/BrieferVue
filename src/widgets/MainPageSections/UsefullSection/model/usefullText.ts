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
        text: GlobalTexts.pages.main.usefull.freelancerMain,
      },
      {
        text: GlobalTexts.pages.main.usefull.freelancerGoal,
        className: className,
      },
    ],
    img: FreelanceIcon,
  },
  {
    content: [
      {
        text: GlobalTexts.pages.main.usefull.pmMain,
      },
      {
        text: GlobalTexts.pages.main.usefull.pmGoal,
        className: className,
      },
    ],
    img: ManagerIcon,
    reverse: true,
  },
  {
    content: [
      {
        text: GlobalTexts.pages.main.usefull.studioMain,
      },
      {
        text: GlobalTexts.pages.main.usefull.studioGoal,
        className: className,
      },
      {
        text: GlobalTexts.pages.main.usefull.studioTask,
      },
    ],
    img: StudioIcon,
  },
];
