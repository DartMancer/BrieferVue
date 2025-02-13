import GlobalTexts from "@/app/locale";
import InstagramIcon from "@/assets/icons/InstagramIcon.vue";
import MailIcon from "@/assets/icons/MailIcon.vue";
import PhoneIcon from "@/assets/icons/PhoneIcon.vue";
import TelegramIcon from "@/assets/icons/TelegramIcon.vue";
import WhatsAppIcon from "@/assets/icons/WhatsAppIcon.vue";

export const footerItems = [
  {
    title: GlobalTexts.footer.letsStart,
    items: [
      { title: GlobalTexts.footer.create, route: "/form_designer" },
      { title: GlobalTexts.footer.chooseTemplate, route: "/form_templates" },
    ],
  },
  {
    title: GlobalTexts.footer.aboutUs,
    items: [{ title: GlobalTexts.footer.products, route: "/company_info" }],
  },
];

export const footerContactItems = [
  {
    icon: InstagramIcon,
    link: GlobalTexts.footer.instagramLink,
  },
  {
    icon: TelegramIcon,
    link: GlobalTexts.footer.telegramLink,
  },
  {
    icon: WhatsAppIcon,
    link: GlobalTexts.footer.whatsAppLink,
  },
  {
    icon: MailIcon,
    link: GlobalTexts.footer.mailLink,
  },
  {
    icon: PhoneIcon,
    link: GlobalTexts.footer.phoneLink,
  },
];
