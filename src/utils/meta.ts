import { getLocale, getTranslations } from "next-intl/server";

export async function GENERATE_METADATA({
  params,
}: {
  params: { syscode: string };
}) {
  const locale = await getLocale();
  const t = await getTranslations({ locale });

  return {
    title: t(`${params.syscode}.title`) || "Default Title",
    description: t(`${params.syscode}.description`) || "Default Title",
  };
}
