import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";
import { UiProvider } from "@/components/providers/UiProvider";

export function I18nProvider({
  children,
  messages,
  locale,
}: {
  children: React.ReactNode;
  messages: AbstractIntlMessages;
  locale: string;
}) {
  return (
    <>
      <NextIntlClientProvider messages={messages}>
        <UiProvider locale={locale}>{children}</UiProvider>
      </NextIntlClientProvider>
    </>
  );
}
