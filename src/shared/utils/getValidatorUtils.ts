import GlobalTexts from "@/app/locale";

export const getValidatorUtils = (validator: string) => {
  switch (validator) {
    case GlobalTexts.icons.mailIcon:
      return (defaultValue: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (defaultValue && !emailRegex.test(defaultValue as string)) {
          return false;
        }
        return true;
      };
    case GlobalTexts.icons.linkIcon:
      return (defaultValue: string) => {
        const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/;
        return !defaultValue || urlRegex.test(defaultValue);
      };
    case GlobalTexts.icons.phoneIcon:
      return (defaultValue: string) => {
        const phoneRegex = /^\+?[1-9]\d{1,14}$/;
        return !defaultValue || phoneRegex.test(defaultValue);
      };
    case GlobalTexts.icons.innIcon:
      return (defaultValue: string) => {
        const innRegex = /^\d{10,12}$/;
        return !defaultValue || innRegex.test(defaultValue);
      };
    default:
      return () => true;
  }
};
