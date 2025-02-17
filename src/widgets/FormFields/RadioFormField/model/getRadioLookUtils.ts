import { Component } from "vue";
import GlobalTexts from "@/app/locale";
import RowRadioField from "../ui/RowRadioField.vue";
import TileRadioField from "../ui/TileRadioField.vue";
import { RadioLooks } from "@/entities/form";

export const getRadioLookUtils = (look: RadioLooks): Component | null => {
  switch (look) {
    case GlobalTexts.blocks.looks.radio.tile:
      return TileRadioField;
    case GlobalTexts.blocks.looks.radio.row:
      return RowRadioField;
    default:
      return null;
  }
};
