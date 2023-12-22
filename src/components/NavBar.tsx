import { useEffect, useRef, useState } from 'react';
import { ArrowDownIcon, HamburguerIcon, WorldIcon, XMarkIcon } from './icons';
import { useLanguage } from '../context/Language';

export function NavBar() {
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const [showLanguagesOptions, setShowLanguagesOptions] = useState(false);

	const toggleMobileMenu = () => {
		setShowMobileMenu(!showMobileMenu);
	};

	const { language, setLanguageAndSave } = useLanguage();

	const refOne = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const checkIfClickedOutside = (e: MouseEvent) => {
			// If the menu is open and the clicked target is not within the menu,
			// then close the menu
			if (
				showLanguagesOptions &&
				refOne.current &&
				!refOne.current.contains(e.target as Node)
			) {
				setShowLanguagesOptions(false);
			}
		};
		document.addEventListener('click', checkIfClickedOutside);
		return () => {
			// Cleanup the event listener
			document.removeEventListener('click', checkIfClickedOutside);
		};
	}, [showLanguagesOptions]);

	return (
		<header className='bg-[#fcfcfc] sticky top-0 z-50 shadow-md     border-b border-[#e9e9e9]'>
			<div className='flex items-center justify-between h-16 max-w-4xl px-8 py-4 mx-auto'>
				<div className='flex items-center gap-1'>
					<a href='#home'>
						<h2 className='text-xl font-semibold'>juan-garcia</h2>
					</a>
					<div
						ref={refOne}
						className='relative flex items-center gap-1 px-2 text-sm cursor-pointer md:gap-1 md:text-base'
						onClick={() => {
							console.log(2);

							setShowLanguagesOptions(!showLanguagesOptions);
						}}
					>
						<WorldIcon className='w-6 h-6' />
						<span>
							{language === 'en'
								? 'English'
								: language === 'es'
								? 'Español'
								: ''}
						</span>
						<ArrowDownIcon
							className={`w-6 transition duration-75 h-6 ${
								showLanguagesOptions ? 'rotate-180' : ''
							}`}
						/>
						<div
							className={` ${
								showLanguagesOptions === false ? 'hidden' : 'block'
							} absolute left-0 bg-white shadow-md  rounded-lg top-[calc(100%+0.5rem)]  w-full`}
						>
							<ul className='flex flex-col gap-2 px-2 py-2'>
								<li onClick={() => setLanguageAndSave('en')}>English</li>
								<li onClick={() => setLanguageAndSave('es')}>Español</li>
							</ul>
						</div>
					</div>
				</div>
				<nav className='hidden gap-5 font-medium sm:flex'>
					<a href='#home ' className='transition hover:text-drew '>
						{language === 'en' ? 'Home' : language === 'es' ? 'Inicio' : 'Home'}
					</a>
					<a href='#about ' className='transition hover:text-drew '>
						{language === 'en'
							? 'About'
							: language === 'es'
							? 'Sobre mí'
							: 'About'}
					</a>
					<a href='#projects ' className='transition hover:text-drew '>
						{language === 'en'
							? 'Projects'
							: language === 'es'
							? 'Proyectos'
							: 'Projects'}
					</a>
					<a href='#contact ' className='transition hover:text-drew '>
						{language === 'en'
							? 'Contact'
							: language === 'es'
							? 'Contacto'
							: 'Contact'}
					</a>
				</nav>
				<button className='block sm:hidden' onClick={toggleMobileMenu}>
					<HamburguerIcon />
				</button>
			</div>
			<div
				className={`absolute ${
					showMobileMenu ? ' translate-x-0 ' : '  -translate-x-full '
				} transition top-0   flex  items-center justify-center w-full h-screen opacity-95 bg-light`}
			>
				<button
					className='absolute w-10 h-10 top-5 right-5 hover:opacity-70 0'
					onClick={toggleMobileMenu}
				>
					<XMarkIcon />
				</button>
				<ul className='flex flex-col items-center gap-8'>
					<button></button>
					<li>
						<a
							onClick={toggleMobileMenu}
							href='#home'
							className='text-2xl font-semibold hover:opacity-70 '
						>
							{language === 'en'
								? 'Home'
								: language === 'es'
								? 'Inicio'
								: 'Home'}
						</a>
					</li>
					<li>
						<a
							onClick={toggleMobileMenu}
							href='#about'
							className='text-2xl font-semibold hover:opacity-70 '
						>
							{language === 'en'
								? 'About'
								: language === 'es'
								? 'Sobre mí'
								: 'About'}
						</a>
					</li>
					<li>
						<a
							onClick={toggleMobileMenu}
							href='#projects'
							className='text-2xl font-semibold hover:opacity-70 '
						>
							{language === 'en'
								? 'Projects'
								: language === 'es'
								? 'Proyectos'
								: 'Projects'}
						</a>
					</li>
					<li>
						<a
							onClick={toggleMobileMenu}
							href='#contact'
							className='text-2xl font-semibold hover:opacity-70 '
						>
							{language === 'en'
								? 'Contact'
								: language === 'es'
								? 'Contacto'
								: 'Contact'}
						</a>
					</li>
				</ul>
			</div>
		</header>
	);
}
