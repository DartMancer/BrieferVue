<script setup lang="ts">
import { BrieferText } from "@/shared/ui";
import BrieferLogoIcon from "@/assets/icons/BrieferLogoIcon.vue";
import { onMounted, onUnmounted, ref } from "vue";
import BurgerMenuIcon from "@/assets/icons/BurgerMenuIcon.vue";
import HeaderDrawer from "../Modals/HeaderDrawer.vue";

const open = ref<boolean>(false);

const showDrawer = () => {
  console.log(open.value);
  open.value = true;
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
        <span class="title logo__subtitle">{{ $t.header.subtitle }}</span>
      </a-flex>
    </RouterLink>
    <a-button class="burger-menu" type="text" @click="showDrawer">
      <BurgerMenuIcon class="burger-menu__icon" />
    </a-button>
  </a-flex>
  <HeaderDrawer v-model:open="open" />
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 59px;
  padding: 0 20px;
  background-color: var(--header-background-color);
  border-bottom: solid 1px var(--accent-color);
  z-index: 1000;
  transition: 0.3s ease-in-out;

  .logo {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 10px;

    &__icon {
      max-width: 40px;
      max-height: 40px;
      transition: max-width 0.3s ease-in-out, max-height 0.3s ease-in-out;
    }

    &__title {
      font-size: 20px;
    }

    &__subtitle {
      font-size: 10px;
      max-height: 15px;
      opacity: 1;
      transform: translateY(0);
      overflow: hidden;
      transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out,
        max-height 0.3s ease-in-out;
    }
  }

  .burger-menu {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    padding: 4px 10px;
    border-radius: 50%;

    &__icon {
      max-width: 20px;
      max-height: 20px;
      fill: var(--accent-color);
    }
  }

  &.scrolled {
    height: 50px;

    .logo {
      &__icon {
        max-width: 30px;
        max-height: 30px;
      }

      &__subtitle {
        opacity: 0;
        transform: translateY(-10px);
        max-height: 0;
      }
    }
  }
}
</style>
