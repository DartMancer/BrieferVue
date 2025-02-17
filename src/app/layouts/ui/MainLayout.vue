<script setup lang="ts">
import { ref, onMounted, onUnmounted, h } from "vue";
import ArrowUpIcon from "@/assets/icons/Arrows/ArrowUpIcon.vue";
import Header from "./Header.vue";
import Footer from "./Footer.vue";

const showScrollButton = ref<boolean>(false);

const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
const checkScrollPosition = () => {
  showScrollButton.value = window.scrollY > 300 ? true : false;
};

onMounted(() => {
  checkScrollPosition();
  window.addEventListener("scroll", checkScrollPosition);
});

onUnmounted(() => {
  window.removeEventListener("scroll", checkScrollPosition);
});
</script>

<template>
  <div>
    <Header />
    <div class="main-layout-wrapper" justify="center">
      <div class="main-layout">
        <slot />
        <Transition name="fade-down">
          <a-button
            v-if="showScrollButton"
            type="text"
            class="scroll-button"
            :icon="h(ArrowUpIcon)"
            @click="scrollToTop"
          />
        </Transition>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.main-layout-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  padding-top: 94px;
  background-color: var(--background-color);

  .main-layout {
    position: relative;
    width: 100%;
    max-width: 1440px;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    padding-bottom: 40px;

    .scroll-button {
      cursor: pointer;
      position: sticky;
      right: 40px;
      bottom: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      align-self: flex-end;
      width: 60px;
      height: 60px;
      min-width: 60px;
      min-height: 60px;
      border: 3px solid var(--accent-color);
      border-radius: 50%;
      background-color: var(--header-background-color);
      padding: 0;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
      transition: 0.2s ease-in-out;

      svg {
        max-width: 25px;
        max-height: 25px;
        fill: var(--accent-color);
        transition: 0.2s ease-in-out;
      }

      &:hover {
        border-color: var(--hover-accent-color);
        background-color: var(--hover-accent-color);

        svg {
          fill: var(--white-color);
        }
      }
    }
  }
}

@media (max-width: 1280px) {
  .main-layout-wrapper {
    padding-top: 75px;
  }
}

@media (max-width: 1024px) {
  .main-layout-wrapper {
    padding-top: 59px;
  }
}

@media (max-width: 540px) {
  .main-layout-wrapper {
    padding-top: 74px;
  }
}
</style>
