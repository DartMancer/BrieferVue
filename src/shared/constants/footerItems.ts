import GlobalTexts from "@/app/locale";
import InstagramIcon from "@/assets/icons/Contacts/InstagramIcon.vue";
import MailIcon from "@/assets/icons/Contacts/MailIcon.vue";
import PhoneIcon from "@/assets/icons/Contacts/PhoneIcon.vue";
import TelegramIcon from "@/assets/icons/Contacts/TelegramIcon.vue";
import WhatsAppIcon from "@/assets/icons/Contacts/WhatsAppIcon.vue";

export const FOOTER_ITEMS = [
  {
    title: GlobalTexts.components.footer.letsStart,
    items: [
      { title: GlobalTexts.components.footer.create, route: "/form_designer" },
      {
        title: GlobalTexts.components.footer.chooseTemplate,
        route: "/form_templates",
      },
    ],
  },
  {
    title: GlobalTexts.components.footer.aboutUs,
    items: [
      { title: GlobalTexts.components.footer.products, route: "/company_info" },
    ],
  },
];

export const footerContactItems = [
  {
    icon: InstagramIcon,
    link: GlobalTexts.components.footer.instagramLink,
  },
  {
    icon: TelegramIcon,
    link: GlobalTexts.components.footer.telegramLink,
  },
  {
    icon: WhatsAppIcon,
    link: GlobalTexts.components.footer.whatsAppLink,
  },
  {
    icon: MailIcon,
    link: GlobalTexts.components.footer.mailLink,
  },
  {
    icon: PhoneIcon,
    link: GlobalTexts.components.footer.phoneLink,
  },
];
