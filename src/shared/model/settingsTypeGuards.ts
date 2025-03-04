import { OptionType } from "../types";

export function isBlockWithVariables(
  settings: unknown
): settings is { variables: OptionType[] } {
  return !!settings && typeof settings === "object" && "variables" in settings;
}

export function isBlockWithLooks(
  settings: unknown
): settings is { listLooks: string } {
  return !!settings && typeof settings === "object" && "listLooks" in settings;
}
