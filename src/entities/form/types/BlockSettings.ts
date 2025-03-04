import {
  ContactsBlockSettings,
  DateBlockSettings,
  DividerBlockSettings,
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
  blockTitle: string;
  icon: string;
  supportText: string;
  question?: string;
  commentary?: string;
  requiredField?: boolean;
  settings: T;
  isSpecial?: boolean;
}

export interface StandartBlock extends BlockBase {
  type: "CLEAR_TEXT" | "CHECKBOX" | "COLOR";
}
export interface TextBlock extends BlockBase<TextBlockSettings> {
  type: "TEXT" | "TEXTAREA";
}
export interface RadioBlock extends BlockBase<RadioBlockSettings> {
  type: "RADIO";
}
export interface MultipleSelectBlock extends BlockBase<MultipleSelectSettings> {
  type: "MULTIPLE_SELECT";
}
export interface DividerBlock extends BlockBase<DividerBlockSettings> {
  type: "DIVIDER";
}
export interface NumberBlock extends BlockBase<NumberBlockSettings> {
  type: "NUMBER";
}
export interface ContactsBlock extends BlockBase<ContactsBlockSettings> {
  type: "CONTACTS";
}
export interface LinksBlock extends BlockBase<LinksBlockSettings> {
  type: "LINKS";
}
export interface DateBlock extends BlockBase<DateBlockSettings> {
  type: "DATE";
}
export interface FileBlock extends BlockBase<FileBlockSettings> {
  type: "FILE";
}

export type BlockConfiguration =
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

export type BlockSettings =
  | TextBlockSettings
  | RadioBlockSettings
  | MultipleSelectSettings
  | DividerBlockSettings
  | NumberBlockSettings
  | ContactsBlockSettings
  | LinksBlockSettings
  | DateBlockSettings
  | FileBlockSettings;
