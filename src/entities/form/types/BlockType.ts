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
  startDate: string;
  endDate: string;
}
export interface NumbersRangeType {
  minNumber: number;
  maxNumber: number;
}

// export type RadioLooks = "Плитка" | "В один ряд";

// export type DividerLooks = "Текстовый" | "Линия";

// export type NumberOptions = "Целое" | "Дробное" | "Промежуток";

export type RadioLooks = "TILE" | "ONE_ROW";

export type DividerLooks = "TEXT" | "LINE";

export type NumberOptions = "INTEGER" | "DECIMAL" | "RANGE";
