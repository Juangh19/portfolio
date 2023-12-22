import { createContext, useContext, useEffect, useState } from 'react';

type Language = 'en' | 'es';

interface LanguageContextProps {
	language: Language;
	setLanguageAndSave: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | null>(null);

export default function LanguageContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [language, setLanguage] = useState<Language>('en');

	console.log(navigator.language);

	useEffect(() => {
		const language = localStorage.getItem('language') as Language;
		let language2 = navigator.language.slice(0, 2);
		if (language2 !== 'es' && language2 !== 'en') {
			language2 = 'en';
		}
		setLanguage(language || language2);
		document.documentElement.lang = language || 'en';
	}, []);

	const setLanguageAndSave = (language: Language) => {
		localStorage.setItem('language', language);
		setLanguage(language);
		document.documentElement.lang = language;
	};

	return (
		<LanguageContext.Provider value={{ language, setLanguageAndSave }}>
			{children}
		</LanguageContext.Provider>
	);
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
	const context = useContext(LanguageContext);

	if (!context) {
		throw new Error('useLanguage must be within a LanguageContextProvider');
	}

	return context;
}
