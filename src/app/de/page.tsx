'use client';

import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/routing';
import { Calendar } from '@nextui-org/react';
import { useRef } from 'react';

export default function HomePage() {
	const t = useTranslations('HomePage');
	const calendarRef = useRef(null);

	return (
		<div>
			<h1>{t('title')}</h1>
			<Link href="/about">{t('about')}</Link>

			<div >
				<Calendar ref={calendarRef} />
			</div>
		</div>
	);
}
