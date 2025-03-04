import { OptionType } from "../types";

export const formatOptions = (looks: string[]): OptionType[] => {
  return looks.map(
    (look) =>
      <OptionType>{
        value: look,
        label: look,
      }
  );
};
