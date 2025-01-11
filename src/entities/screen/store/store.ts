import { ref } from "vue";
import { defineStore } from "pinia";
import { BREAKPOINTS } from "@/shared/constants";
import { type Platform } from "..";

export const useScreenStore = defineStore("screen", () => {
  const platform = ref<Platform>("desktop");

  const setPlatform = (width: number) => {
    if (width >= BREAKPOINTS.DESKTOP) {
      platform.value = "desktop";
    } else if (width >= BREAKPOINTS.TABLET) {
      platform.value = "tablet";
    } else {
      platform.value = "mobile";
    }
  };

  return { setPlatform, platform };
});
