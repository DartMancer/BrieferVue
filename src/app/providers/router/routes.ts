import type { RouteRecordRaw } from "vue-router";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "main",
    meta: {
      titleKey: "main",
      layout: "main",
      noauth: true,
    },
    component: () => import("@/pages/MainPage"),
  },
  {
    path: "/company_info",
    name: "company_info",
    meta: {
      titleKey: "company_info",
      layout: "main",
      noauth: true,
    },
    component: () => import("@/pages/CompanyInfoPage"),
  },
  {
    path: "/form_designer",
    name: "form_designer",
    meta: {
      titleKey: "form_designer",
      layout: "main",
      noauth: true,
    },
    component: () => import("@/pages/FormDesignerPage"),
  },
  {
    path: "/form_templates",
    name: "form_templates",
    meta: {
      titleKey: "form_templates",
      layout: "main",
      noauth: true,
    },
    component: () => import("@/pages/FormTemlates"),
  },
  {
    path: "/briefer_page",
    name: "briefer_page",
    meta: {
      titleKey: "briefer_page",
      layout: "main",
      noauth: true,
    },
    component: () => import("@/pages/ProductsPages/BrieferPage"),
  },
];
