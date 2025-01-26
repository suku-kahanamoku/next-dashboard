import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl';

export function I18nProvider({
	children,
	messages,
}: /* locale, */
{
	children: React.ReactNode;
	messages: AbstractIntlMessages;
	locale: string;
}) {
	return (
		<>
			<NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
		</>
	);
}
