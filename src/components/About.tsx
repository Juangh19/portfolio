import AboutImg from '../assets/images/AboutImg.png';

export function About() {
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
						<span className='font-bold '>ABOUT ME</span>
					</div>
					<h2 className='mb-6 text-3xl font-bold '>
						An enthusiast Web Developer 💻
					</h2>
					<p className='opacity-80'>
						As a Web Developer, I possess a versatile skill set, including HTML,
						CSS, JavaScript, TypeScript, React, Tailwind, Node.js, Express,
						MongoDB, and Next.js. I'm highly proficient in Figma, translating
						designs into functional websites. My dedication to efficient code,
						adherence to industry standards, and strong communication skills
						enable me to collaborate effectively within diverse teams, ensuring
						exceptional web applications.
					</p>
				</div>
			</div>
		</section>
	);
}
