'use client';

import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/routing';
import { Calendar } from '@nextui-org/react';
import {today, getLocalTimeZone} from "@internationalized/date";

export default function HomePage() {
	const t = useTranslations('HomePage');
	let defaultDate = today(getLocalTimeZone());

	return (
		<div>
			<h1>{t('title')}</h1>
			<Link href="/about">{t('about')}</Link>

			<div >
				<Calendar  value={defaultDate} />
			</div>
		</div>
	);
}
