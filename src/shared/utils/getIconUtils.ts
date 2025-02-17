import { defineAsyncComponent } from "vue";

export const getIconComponent = (iconName?: string) => {
  if (iconName === undefined) {
    return;
  }
  return defineAsyncComponent(
    () => import(`@/assets/icons/Blocks/${iconName.trim()}.vue`)
  );
};
