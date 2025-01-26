import { getMessages, getLocale } from 'next-intl/server';

import '@/assets/styles/globals.css';
import { I18nProvider } from '@/components/providers/I18nProvider';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const locale = await getLocale();
	const messages = await getMessages();

	return (
		<html lang={locale} data-theme="fantasy">
			<body>
				<I18nProvider messages={messages} locale={locale}>
					{children}
				</I18nProvider>
			</body>
		</html>
	);
}
