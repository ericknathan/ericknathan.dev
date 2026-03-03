import { getRequestConfig } from "next-intl/server";
import { appLocales } from "./src/config";

export default getRequestConfig(async (params) => {
  const { requestLocale } = params;
  const locale = (await requestLocale) ?? appLocales[0].name;

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
