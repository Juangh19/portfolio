import { useState } from 'react';
import { HamburguerIcon, XMarkIcon } from './icons';

export function NavBar() {
	const [showMobileMenu, setShowMobileMenu] = useState(false);

	const toggleMobileMenu = () => {
		setShowMobileMenu(!showMobileMenu);
	};

	return (
		<header className='bg-[#fcfcfc] sticky top-0 z-50 shadow-md     border-b border-[#e9e9e9]'>
			<div className='flex items-center justify-between h-16 max-w-4xl px-8 py-4 mx-auto'>
				<h2 className='text-xl font-semibold'>juan-garcia</h2>
				<nav className='hidden gap-5 font-medium sm:flex'>
					<a href='#home ' className='transition hover:text-drew '>
						Home
					</a>
					<a href='#about ' className='transition hover:text-drew '>
						About
					</a>
					<a href='#projects ' className='transition hover:text-drew '>
						Projects
					</a>
					<a href='#contact ' className='transition hover:text-drew '>
						Contact
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
							Home
						</a>
					</li>
					<li>
						<a
							onClick={toggleMobileMenu}
							href='#about'
							className='text-2xl font-semibold hover:opacity-70 '
						>
							About
						</a>
					</li>
					<li>
						<a
							onClick={toggleMobileMenu}
							href='#projects'
							className='text-2xl font-semibold hover:opacity-70 '
						>
							Projects
						</a>
					</li>
					<li>
						<a
							onClick={toggleMobileMenu}
							href='#contact'
							className='text-2xl font-semibold hover:opacity-70 '
						>
							Contact
						</a>
					</li>
				</ul>
			</div>
		</header>
	);
}
