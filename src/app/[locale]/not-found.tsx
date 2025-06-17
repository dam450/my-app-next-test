import { getTranslations } from 'next-intl/server';

export default async function NotFoundPage() {
  const t = await getTranslations('NotFoundPage');
  return <h1>{t('title')}</h1>;
}
