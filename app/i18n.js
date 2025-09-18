import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '@/locales/en/common.json';
import ar from '@/locales/ar/common.json';

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: { common: en },
        ar: { common: ar },
      },
      lng: 'en',
      fallbackLng: 'en',
      interpolation: { escapeValue: false },
      ns: ['common'],
      defaultNS: 'common',
      detection: {
        order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
        caches: ['cookie'],
      },
    });
}

export default i18n; 