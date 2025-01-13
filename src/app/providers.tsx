'use client';

import { NextUIProvider } from '@nextui-org/react';

export function Providers({ children, locale }: { children: React.ReactNode; locale: string }) {
	return (
		<div>
			<NextUIProvider locale={locale}>{children}</NextUIProvider>
		</div>
	);
}
