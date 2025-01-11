<script setup lang="ts">
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { AppBtn, BrieferLogo } from "@/shared/ui";
import { useScreenStore } from "@/entities/screen";

const screenStore = useScreenStore();
const { platform } = storeToRefs(screenStore);
const route = useRoute();

const headerMenu = [
  { title: "Создать анкету", path: "/form_designer" },
  { title: "Test", path: "/" },
  { title: "Шаблоны", path: "/form_templates" },
  { title: "О нас", path: "/company_info" },
];

const isRouteActive = (path: string) => route.path === path;
</script>

<template>
  <header v-if="platform !== 'mobile'" class="fixed-header">
    <div class="header-content">
      <a-flex align="center" justify="space-between">
        <router-link to="/">
          <BrieferLogo class="logo-icon" iconSize="2.5vw" fontSize="2.5vw" />
        </router-link>
        <a-flex gap="middle" align="center">
          <div v-for="(item, index) in headerMenu" :key="index">
            <router-link :to="item.path" exact-active-class="active-link">
              <AppBtn
                class="company_info_button"
                :class="{ 'disabled-link': isRouteActive(item.path) }"
                :disabled="isRouteActive(item.path)"
              >
                {{ item.title }}
              </AppBtn>
            </router-link>
          </div>
        </a-flex>
      </a-flex>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.fixed-header {
  position: fixed;
  left: 0;
  right: 0;
  border-bottom: solid var(--accent-color) 1px;
  background-color: var(--header-background-color);
  box-shadow: 0 0.1vw 0.25vw rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: height 0.3s ease;
  margin-bottom: 0;
  align-content: center;

  .header-content {
    width: 100%;
    padding: 0.5vw;
    justify-content: space-between;
    align-content: center;
  }
}

.logo-icon {
  margin-left: 1vw;
}

.active-link .company_info_button,
.company_info_button:hover {
  color: var(--primary-color);
  background-color: transparent;
  transform: scale(1.3);
  font-weight: bold;
  max-height: fit-content;
}

.company_info_button {
  background-color: transparent;
  border: none;
  padding: 1.5vw;
  color: var(--accent-color);
  font-family: "Montserrat Alternates";
  font-weight: 500;
  transition: font-size 0.3s ease;
}
</style>
