import { defineAsyncComponent } from "vue";
import { BlockType } from "@/entities/form";

export const resolveComponent = (type: BlockType) => {
  const format =
    type
      .split("_")
      .map((word) => word.charAt(0) + word.slice(1).toLowerCase())
      .join("") + "Field";

  return defineAsyncComponent(
    () => import(`@/widgets/Modals/PreviewModal/ui/ModalFields/${format}.vue`)
  );
};
