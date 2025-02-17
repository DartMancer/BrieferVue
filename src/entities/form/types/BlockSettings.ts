import {
  ContactsBlockSettings,
  DateBlockSettings,
  DividerBlockSetting,
  FileBlockSettings,
  LinksBlockSettings,
  MultipleSelectSettings,
  NumberBlockSettings,
  RadioBlockSettings,
  TextBlockSettings,
} from "./BlocksSettings";
import { BlockType } from "./BlockType";

export interface BlockBase<T = unknown> {
  id: string;
  type: BlockType;
  icon: string;
  title: string;
  subtitle?: string;
  supportText: string;
  requiredField?: boolean;
  settings?: T;
  isSpecial?: boolean;
}

export interface StandartBlock extends BlockBase {
  type: "clear_text" | "checkbox" | "color";
}
export interface TextBlock extends BlockBase<TextBlockSettings> {
  type: "text" | "textarea";
}
export interface RadioBlock extends BlockBase<RadioBlockSettings> {
  type: "radio";
}
export interface MultipleSelectBlock extends BlockBase<MultipleSelectSettings> {
  type: "multiple_select";
}
export interface DividerBlock extends BlockBase<DividerBlockSetting> {
  type: "divider";
}
export interface NumberBlock extends BlockBase<NumberBlockSettings> {
  type: "number";
}
export interface ContactsBlock extends BlockBase<ContactsBlockSettings> {
  type: "contacts";
}
export interface LinksBlock extends BlockBase<LinksBlockSettings> {
  type: "links";
}
export interface DateBlock extends BlockBase<DateBlockSettings> {
  type: "date";
}
export interface FileBlock extends BlockBase<FileBlockSettings> {
  type: "file";
}

export type BlockSettings =
  | StandartBlock
  | TextBlock
  | RadioBlock
  | MultipleSelectBlock
  | DividerBlock
  | NumberBlock
  | ContactsBlock
  | LinksBlock
  | DateBlock
  | FileBlock;
