import { useLanguage } from '../context/Language';
import { GithubIcon, LinkedinIcon } from './icons';

export function Footer() {
	const { language } = useLanguage();
	return (
		<section className='py-8 bg-dark text-light '>
			<div className='flex items-center justify-between max-w-4xl gap-12 px-8 mx-auto'>
				<div className='flex flex-col gap-0 opacity-60'>
					<span>Barranquilla, Colombia</span>
					<span>
						Copyright © 2025. Juan Garcia{' '}
						<span className='block [@media(min-width:630px)]:inline'>
							<span className='hidden [@media(min-width:630px)]:inline'>|</span>{' '}
							{language === 'en'
								? 'All rights reserved'
								: language === 'es'
								? 'Todos los derechos reservados'
								: 'All rights reserved'}
						</span>
					</span>
				</div>
				<div className='flex gap-4 '>
					<a
						target='_blank'
						rel='noopener'
						href='https://www.linkedin.com/in/juan-garcia-dev'
					>
						<LinkedinIcon style='hover:text-drew transition opacity-60 hover:opacity-100 ' />
					</a>
					<a target='_blank' rel='noopener' href='https://github.com/Juangh19'>
						<GithubIcon style='hover:text-drew transition opacity-60 hover:opacity-100' />
					</a>
				</div>
			</div>
		</section>
	);
}
