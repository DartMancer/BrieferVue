<script setup lang="ts">
import { computed, defineAsyncComponent, ref } from "vue";
import { useRoute } from "vue-router";
import ruRU from "ant-design-vue/es/locale/ru_RU";
import "dayjs/locale/ru";

const route = useRoute();
const theme = ref({
  token: {
    colorPrimary: "#cf4d9c",
    colorPrimaryHover: "#6f76ad;",
    colorSuccess: "#c0ff8f",
    colorError: "#ff7c7c",
    // fontSize: 16,/
  },
  components: {
    Radio: {
      colorBorder: "#959bcd",
      colorBgContainer: "#3a3e62",
      colorText: "#ffffff",
      colorPrimary: "#cf4d9c",
    },
    Checkbox: {
      colorPrimaryHover: "#b34488",
      colorBgContainer: "transparent",
      colorBorder: "#959bcd",
    },
  },
});

const layouts = {
  //   auth: defineAsyncComponent(() => import("./layouts/AuthLayout.vue")),
  main: defineAsyncComponent(() => import("./layouts/MainLayout.vue")),
};

const layout = computed(() => {
  const layoutName = route.meta.layout as keyof typeof layouts;
  return layouts[layoutName] ?? layouts.main;
});
</script>

<template>
  <a-config-provider :theme="theme" :locale="ruRU">
    <v-app>
      <a-app>
        <component :is="layout">
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
        </component>
      </a-app>
    </v-app>
  </a-config-provider>
</template>
<!-- <div :key="route.name">
</div> -->

<style lang="scss">
@import url("./style/custom.scss");
@import url("./style/style.scss");
@import url("./style/vars.scss");
@import url("./style/transition.scss");
</style>
