import FirstBrieferScreen from "@/assets/images/FirstBrieferScreen.webp";
import SecondBrieferScreen from "@/assets/images/SecondBrieferScreen.webp";
import ThirdBrieferScreen from "@/assets/images/ThirdBrieferScreen.webp";
import FourthBrieferScreen from "@/assets/images/FourthBrieferScreen.webp";
import GlobalTexts from "@/app/locale";

export const PRODUCT_DETAILS = [
  {
    text: GlobalTexts.pages.products.briefer.firstDetail,
    image: FirstBrieferScreen,
    reverse: false,
  },
  {
    text: GlobalTexts.pages.products.briefer.secondDetail,
    image: SecondBrieferScreen,
    reverse: true,
  },
  {
    text: GlobalTexts.pages.products.briefer.thirdDetail,
    image: ThirdBrieferScreen,
    reverse: false,
  },
  {
    text: GlobalTexts.pages.products.briefer.fourthDetail,
    image: FourthBrieferScreen,
    reverse: true,
  },
];
