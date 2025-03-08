import { BlockType } from "./BlockType";

export interface FieldBlockBase<T = unknown> {
  id: string;
  type: BlockType;
  question?: string;
  commentary?: string;
  requiredField?: boolean;
  settings: T;
  isSpecial?: boolean;
  value: any;
}
