import { createApp } from "vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
import App from "./App.vue";

import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createVuetify } from "vuetify";

import { store, router } from "./providers";
import GlobalTexts from "./locale";

const app = createApp(App);
const vuetify = createVuetify({ components, directives });

app.use(Antd).use(vuetify).use(store).use(router);
app.config.globalProperties.$t = GlobalTexts;

app.mount("#app");
