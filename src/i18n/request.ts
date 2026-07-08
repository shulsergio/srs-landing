
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
 
  let locale = await requestLocale;
 
  if (!locale) {
    locale = 'uk'; 
  }

  return {
    locale,
    // Путь к твоим JSON файлам (убедись, что папка messages лежит в корне проекта)
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});