import { getRequestConfig } from 'next-intl/server';
import { defaultLocale, Locale } from './settings';

export default getRequestConfig(async () => {
    const locale: Locale = defaultLocale;

    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default,
        timeZone: 'Asia/Dhaka'
    };
});
