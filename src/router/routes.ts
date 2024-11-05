import MainPage from '@/pages/MainPage/ui/MainPage.vue';
import CompanyInfo from '@/pages/CompanyInfo/ui/CompanyInfo.vue';
import FormDesigner from '@/pages/FormDesigner/ui/FormDesigner.vue';
import FormTemlates from '@/pages/FormTemlates/ui/FormTemlates.vue';

export const routes: any[] = [
    {
      path: "/",
      name: "main",
      component: MainPage,
    },
    {
      path: "/company_info",
      name: "company_info",
      component: CompanyInfo,
    },
    {
      path: "/form_designer",
      name: "form_designer",
      component: FormDesigner,
    },
    {
      path: "/form_templates",
      name: "form_templates",
      component: FormTemlates,
    },
  ];
  