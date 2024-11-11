import i18n from 'i18next';
import translationFR from "./locales/fr.json"
import translationEN from "./locales/en.json"
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'en', // if you're using a language detector, do not define the lng option
  fallbackLng: 'en', // Si la langue n'est pas disponible, utiliser par défaut le français
  interpolation: {
    escapeValue: false, // React gère déjà la protection contre les XSS
  },
  debug: true,
  resources: {
    fr: { 
      translation: translationFR 
    },
    en: { 
      translation: translationEN  
    }
  },
});

export default i18n;