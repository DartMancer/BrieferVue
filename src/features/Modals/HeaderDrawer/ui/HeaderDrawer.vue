<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
import { HEADER_ITEMS } from "@/shared/constants";

const open = defineModel<boolean>("open", { required: true });

const route = useRoute();
const router = useRouter();

const isActiveRoute = (routePath: string) => route.path === routePath;
const navigateTo = (routePath: string) => {
  router.push(routePath);
};

const afterOpenChange = (bool: boolean) => {
  console.log("open", bool);
};
</script>

<template>
  <a-drawer
    v-model:open="open"
    class="header-drawer"
    :title="$t.components.header.menu"
    placement="right"
    @after-open-change="afterOpenChange"
  >
    <a-flex class="header-items" vertical>
      <div
        v-for="(item, idx) in HEADER_ITEMS"
        :class="['header-item', { active: isActiveRoute(item.path) }]"
        :key="idx"
        align="center"
        @click="navigateTo(item.path)"
      >
        <span class="title header-item__title">
          {{ item.title }}
        </span>
      </div>
    </a-flex>
  </a-drawer>
</template>

<style lang="scss" scoped>
.header-items {
  display: flex;
  align-items: start;
  gap: 20px;

  .header-item {
    &__title {
      font-size: 18px;
      color: var(--accent-color);
      font-weight: 500;
      transition: 0.2s ease-in-out;
    }

    &.active {
      .header-item__title {
        color: var(--primary-color);
      }
    }

    &:hover {
      .header-item__title {
        color: var(--hover-primary-color);
      }
    }
  }
}
</style>
