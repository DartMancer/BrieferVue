<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { headerItems } from "@/shared/constants";
import { BrieferText } from "@/shared/ui";
import BrieferLogoIcon from "@/assets/icons/BrieferLogoIcon.vue";
import { onMounted, onUnmounted, ref } from "vue";

const route = useRoute();
const router = useRouter();

const isActiveRoute = (routePath: string) => route.path === routePath;
const navigateTo = (routePath: string) => {
  router.push(routePath);
};

const isScrolled = ref(false);

const handleScroll = () => {
  const scrollThreshold = 75;
  isScrolled.value = window.scrollY > scrollThreshold;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <a-flex
    :class="['header', { scrolled: isScrolled }]"
    justify="space-between"
    align="center"
  >
    <RouterLink class="logo" to="/">
      <BrieferLogoIcon class="logo__icon" />
      <a-flex justify="flex-start" vertical>
        <BrieferText class="logo__title" />
        <span class="logo__subtitle">{{ $t.header.subtitle }}</span>
      </a-flex>
    </RouterLink>
    <a-flex class="header-items" justify="flex-end">
      <div
        v-for="(item, idx) in headerItems"
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
  </a-flex>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 94px;
  padding: 0 38px;
  background-color: var(--header-background-color);
  border-bottom: solid 1px var(--accent-color);
  z-index: 1000;
  transition: 0.3s ease-in-out;

  .logo {
    display: flex;
    align-items: center;
    gap: 10px;

    &__icon {
      max-width: 60px;
      max-height: 60px;
      transition: max-width 0.3s ease-in-out, max-height 0.3s ease-in-out;
    }

    &__title {
      font-size: 30px;
    }

    &__subtitle {
      min-width: 270px;
      font-size: 14px;
      max-height: 21px;
      opacity: 1;
      transform: translateY(0);
      overflow: hidden;
      transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out,
        max-height 0.3s ease-in-out;
    }
  }

  .header-items {
    cursor: pointer;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 50px;

    .header-item {
      &__title {
        width: 100%;
        font-size: 20px;
        color: var(--accent-color);
        font-weight: 600;
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

  &.scrolled {
    height: 75px;

    .logo {
      &__icon {
        max-width: 40px;
        max-height: 40px;
      }

      &__subtitle {
        opacity: 0;
        transform: translateY(-20px);
        max-height: 0;
      }
    }
  }
}
</style>
