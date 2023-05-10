import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import translations from '../utils/translations'

i18n
	.use(LanguageDetector)
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources: translations,

		///////////////////////////
		// Only for English
		// lng: 'en',
		// fallbackLng: 'en',

		// for Korean
		fallbackLng: 'kr',

		///////////////////////////
		debug: true,

		interpolation: {
			escapeValue: false,
		},
	})

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
