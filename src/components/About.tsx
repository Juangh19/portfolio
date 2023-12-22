import AboutImg from '../assets/images/AboutImg.png';
import { useLanguage } from '../context/Language';

export function About() {
	const { language } = useLanguage();
	return (
		<section id='about' className='py-16 bg-light scroll-mt-10'>
			<div className='flex flex-col items-center max-w-4xl gap-12 px-8 mx-auto md:flex-row '>
				<div className='flex-1 max-w-sm border-[3px] rounded-[4rem] overflow-hidden '>
					<img
						className='w-full  aspect-[211∶141]'
						src={AboutImg}
						alt='Working on a Laptop'
					/>
				</div>
				<div className='flex-1 max-w-sm '>
					<div className='flex items-center gap-4 mb-3 text-xs text-drew'>
						<hr className='w-10 border' />
						<span className='font-bold '>
							{language === 'en'
								? 'ABOUT ME'
								: language === 'es'
								? 'SOBRE MI'
								: 'ABOUT ME'}
						</span>
					</div>
					<h2 className='mb-6 text-3xl font-bold '>
						{language === 'en'
							? 'An enthusiast Web Developer 💻'
							: language === 'es'
							? 'Un entusiasta desarrollador web 💻'
							: 'An enthusiast Web Developer 💻'}
					</h2>
					<p className='opacity-80'>
						{language === 'en'
							? "As a Web Developer, I possess a versatile skill set, including HTML, CSS, JavaScript, TypeScript, React, Redux, Tailwind, Node.js, Express, MongoDB, and Next.js. I'm highly proficient in Figma, translating designs into functional websites. My dedication to efficient code, adherence to industry standards, and strong communication skills enable me to collaborate effectively within diverse teams, ensuring exceptional web applications."
							: language === 'es'
							? 'Como desarrollador web, poseo un conjunto de habilidades versátiles, que incluyen HTML, CSS, JavaScript, TypeScript, React, Redux, Tailwind, Node.js, Express, MongoDB y Next.js. Soy muy competente en Figma, traduciendo diseños en sitios web funcionales. Mi dedicación al código eficiente, el cumplimiento de los estándares de la industria y las sólidas habilidades de comunicación me permiten colaborar de manera efectiva dentro de equipos diversos, asegurando aplicaciones web excepcionales.'
							: "As a Web Developer, I possess a versatile skill set, including HTML, CSS, JavaScript, TypeScript, React, Redux, Tailwind, Node.js, Express, MongoDB, and Next.js. I'm highly proficient in Figma, translating designs into functional websites. My dedication to efficient code, adherence to industry standards, and strong communication skills enable me to collaborate effectively within diverse teams, ensuring exceptional web applications."}
					</p>
				</div>
			</div>
		</section>
	);
}
