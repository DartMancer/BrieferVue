export type BlockType =
  | "TEXT"
  | "TEXTAREA"
  | "CLEAR_TEXT"
  | "RADIO"
  | "MULTIPLE_SELECT"
  | "COLOR"
  | "DIVIDER"
  | "CHECKBOX"
  | "NUMBER"
  | "CONTACTS"
  | "LINKS"
  | "FILE"
  | "DATE";

export interface RangeValueType {
  startDate: string | undefined;
  endDate: string | undefined;
}
export interface NumbersRangeType {
  minNumber: number;
  maxNumber: number;
}

export type RadioLooks = "TILE" | "ONE_ROW";

export type DividerLooks = "TEXT" | "LINE";

export type NumberOptions = "INTEGER" | "DECIMAL" | "RANGE";
