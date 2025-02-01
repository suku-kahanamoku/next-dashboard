import { GET_ROUTES, IRoutes } from "@/utils/routes";
import { langItems } from "@/i18n/routing";

const localeRoutes: Record<string, IRoutes> = {}
langItems?.forEach(lang => {
  localeRoutes[lang.value] = GET_ROUTES(lang.value);
});

export default function useRoutes(locale: string) {
  const routes = localeRoutes[locale];
  return { localeRoutes, routes }
}
