import GlobalTexts from "@/app/locale";
import { DividerLooks, NumberOptions, RadioLooks } from "@/entities/form";

export interface SelectType<T> {
  value: T;
  label: string;
}

const formatLooks = <T extends string>(
  labels: Record<T, string>
): SelectType<T>[] => {
  return Object.entries(labels).map(([value, label]) => ({
    value: value as T,
    label: label as string,
  }));
};

const DIVIDER_LIST_LOOKS: Record<DividerLooks, string> = {
  LINE: GlobalTexts.blocks.looks.divider.line,
  TEXT: GlobalTexts.blocks.looks.divider.text,
};

const RADIO_LIST_LOOKS: Record<RadioLooks, string> = {
  TILE: GlobalTexts.blocks.looks.radio.tile,
  ONE_ROW: GlobalTexts.blocks.looks.radio.row,
};

const NUMBER_OPTIONS: Record<NumberOptions, string> = {
  INTEGER: GlobalTexts.blocks.looks.numbers.int,
  DECIMAL: GlobalTexts.blocks.looks.numbers.decimal,
  RANGE: GlobalTexts.blocks.looks.numbers.range,
};

export const CURRENT_OPTIONS = {
  DIVIDER: formatLooks<DividerLooks>(DIVIDER_LIST_LOOKS),
  RADIO: formatLooks<RadioLooks>(RADIO_LIST_LOOKS),
  NUMBER: formatLooks<NumberOptions>(NUMBER_OPTIONS),
} as const;
