import { CodeIcon, GithubIcon, LinkedinIcon } from './icons';
import htmlLogo from '../assets/images/techLogos/html.png';
import cssLogo from '../assets/images/techLogos/css.png';
import jsLogo from '../assets/images/techLogos/JavaScript.png';
import reactLogo from '../assets/images/techLogos/React.png';
import tsLogo from '../assets/images/techLogos/typescript.png';
import figmaLogo from '../assets/images/techLogos/Figma.png';
import tailwindLogo from '../assets/images/techLogos/tailwind.png';
import HeroImg from '../assets/images/HeroImg.png';

export function Hero() {
	return (
		<section id='home' className='bg-gray scroll-mt-28 '>
			<div className='max-w-4xl px-8 py-8 [@media(min-width:700px)]:py-16 mx-auto'>
				<div className='flex [@media(min-width:700px)]:flex-row mb-8 [@media(min-width:700px)]:mb-0  flex-col-reverse items-center gap-4 '>
					<div className='flex flex-col flex-1 gap-8 [@media(min-width:700px)]:text-left text-center min-w'>
						<div className='relative'>
							<h1 className='relative z-10 text-4xl [@media(min-width:700px)]:text-5xl font-bold '>
								Front-end Web Developer
							</h1>
							<div className='hidden [@media(min-width:700px)]:block absolute z-0 w-32 h-32 -bottom-8 left-[12rem]'>
								<CodeIcon />
							</div>
						</div>
						<p className='opacity-80 '>
							Hi, I’m Juan Garcia, A passionate Front-end Developer from
							Barranquilla, Colombia 📍
						</p>
						<div className='flex [@media(min-width:700px)]:justify-start  justify-center gap-4'>
							<a
								target='_blank'
								rel='noopener'
								href='https://www.linkedin.com/in/juan-garcia-dev'
							>
								<LinkedinIcon style='hover:text-drew transition' />
							</a>
							<a
								target='_blank'
								rel='noopener'
								href='https://github.com/Juangh19'
							>
								<GithubIcon style='hover:text-drew transition' />
							</a>
						</div>
					</div>
					<div className='flex-1 border-[3px] rounded-[80%] overflow-hidden w-full max-w-[300px] [@media(min-width:700px)]:max-w-[350px]'>
						<img
							src={HeroImg}
							alt='Juan Camilo Garcia Hernandez'
							className='w-full aspect-square'
						/>
					</div>
				</div>
				<div className='mx-auto text-center w-fit'>
					<span className='text-xl font-medium opacity-80'>Tech Stack</span>
					<hr className='w-48 mx-auto mt-2 mb-6 opacity-80 ' />
					<div className='flex flex-wrap justify-center gap-6'>
						<img
							src={htmlLogo}
							className='transition duration-200 hover:scale-105'
							alt='html logo'
						/>
						<img
							src={cssLogo}
							className='transition duration-200 hover:scale-105'
							alt='css logo'
						/>
						<img
							src={tailwindLogo}
							className='transition duration-200 hover:scale-105'
							alt='tailwind logo'
						/>
						<img
							src={jsLogo}
							className='transition duration-200 hover:scale-105'
							alt='js logo'
						/>
						<img
							src={reactLogo}
							className='transition duration-200 hover:scale-105'
							alt='react logo'
						/>
						<img
							src={tsLogo}
							className='transition duration-200 hover:scale-105'
							alt='ts logo'
						/>
						<img
							src={figmaLogo}
							className='transition duration-200 hover:scale-105'
							alt='figma logo'
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
