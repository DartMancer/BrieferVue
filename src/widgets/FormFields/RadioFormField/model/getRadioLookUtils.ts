import { Component } from "vue";
import GlobalTexts from "@/app/locale";
import RowRadioField from "../ui/RowRadioField.vue";
import TileRadioField from "../ui/TileRadioField.vue";

export const getRadioLookUtils = (
  look: "Плитка" | "В один ряд"
): Component | null => {
  switch (look) {
    case GlobalTexts.listLooks.tile:
      return TileRadioField;
    case GlobalTexts.listLooks.inOneRow:
      return RowRadioField;
    default:
      return null;
  }
};
