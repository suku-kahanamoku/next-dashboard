import { useTranslations } from 'next-intl';

import { GENERATE_METADATA } from '@/utils/meta';
import { Link } from '@/i18n/routing';
import ButtonCmp from '@/components/ui/Button';

const meta = { syscode: 'home' };

export async function generateMetadata() {
	return await GENERATE_METADATA({ params: meta });
}

export default function HomePage() {
	const t = useTranslations(meta.syscode);

	return (
		<div>
			<h1>{t('title')}</h1>
			<Link href="/about">{t('about')}</Link>
			<ButtonCmp />
		</div>
	);
}
