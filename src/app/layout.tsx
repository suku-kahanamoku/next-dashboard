import { getMessages, getLocale } from "next-intl/server";

import "@/assets/styles/globals.css";
import { I18nProvider } from "@/components/providers/I18nProvider";
import MainMenuCmp from "@/components/ui/MainMenu";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} data-theme="light">
      <body>
        <I18nProvider messages={messages} locale={locale}>
          <MainMenuCmp />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
