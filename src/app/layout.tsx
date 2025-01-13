import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getLocale } from 'next-intl/server';

import '@/assets/styles/globals.css';
import { Providers } from './providers';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const locale = await getLocale();
	const messages = await getMessages();

	return (
		<html lang={locale}>
			<body>
				<NextIntlClientProvider messages={messages}>
					<Providers locale={locale}>{children}</Providers>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
