import { isBlockWithVariables, isDateBlockSettings } from "@/shared/model";

export const prepareBlockData = (settings: unknown) => {
  if (isBlockWithVariables(settings)) {
    settings.variables = settings.variables.filter(
      (variable) => !!variable.label
    );
  }

  if (isDateBlockSettings(settings)) {
    if (!settings.isLimitRange) settings.dateRange = undefined;
  }
};
