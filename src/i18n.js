import i18next from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';

import en from '@translations/en';
import pt from '@translations/pt';

i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en,
      pt,
    },

    lng: 'en',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    },
  });

class I18n {
  static changeLanguage(lang) {
    const { i18n } = useTranslation();

    return i18n.changeLanguage(lang);
  }

  static t(key) {
    const { t } = useTranslation();

    return t(key);
  }
}

export default I18n;
