import { createApp } from "vue";
import Antd from "ant-design-vue";
import App from "./App.vue";
import "ant-design-vue/dist/reset.css";

import { store } from "./store";
import { router } from "./router";

const app = createApp(App);

app.use(Antd).use(store).use(router);

app.mount("#app");
