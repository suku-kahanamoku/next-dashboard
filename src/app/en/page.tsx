import { useTranslations } from "next-intl";

import { GENERATE_METADATA } from "@/utils/meta";
import { Link } from "@/i18n/routing";
import DialogsCmp from "@/components/ui/examples/Dialogs";
import ThemeCmp from "@/components/ui/Theme";

const meta = { syscode: "home" };

export async function generateMetadata() {
  return await GENERATE_METADATA({ params: meta });
}

export default function HomePage() {
  const t = useTranslations(meta.syscode);

  return (
    <div>
      <ThemeCmp />
      <h1>{t("title")}</h1>
      <Link href="/about">{t("about")}</Link>
      {/* {<ButtonsCmp />} */}
      {/* <DropdownsCmp /> */}
      {<DialogsCmp />}
    </div>
  );
}
