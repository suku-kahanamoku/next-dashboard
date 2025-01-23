import { useTranslations } from "next-intl";

import { GENERATE_METADATA } from "@/utils/meta";
import { Link } from "@/i18n/routing";

const meta = { syscode: "about" };

export async function generateMetadata() {
  return await GENERATE_METADATA({ params: meta });
}

export default function AboutPage({
  children,
}: {
  children?: React.ReactNode;
}) {
  const t = useTranslations(meta.syscode);

  return (
    <div>
      <h1>{t("title")}</h1>
      <Link href="/">{t("title")}</Link>
      {children}
    </div>
  );
}