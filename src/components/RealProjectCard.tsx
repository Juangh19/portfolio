import { useState } from 'react';
import LaptopMockUp from '../assets/images/LaptopMock.png';
import { useLanguage } from '../context/Language';

type ProjectCardProps = {
	projectName: string;
	projectDescription: string;
	projectDescriptionES: string;

	projectImg: string;
	projectLink: string;
};

export function RealProjectCard(props: ProjectCardProps) {
	const [isHovering, setIsHovering] = useState(false);
	const { language } = useLanguage();

	const {
		projectName,
		projectDescription,
		projectDescriptionES,
		projectImg,
		projectLink,
	} = props;

	return (
		<div className='px-8 py-6 max-w-lg  bg-light rounded-[2.5rem] shadow-md mb-4'>
			<div className={`flex  flex-col-reverse  items-center gap-4 `}>
				<div className='flex flex-col gap-4'>
					<div>
						<h4 className='text-xl font-bold'>
							<strong className='font-bold'>{projectName}</strong>
						</h4>
						<a
							href={projectLink}
							className='text-sm underline text-[rgb(255,166,0)] '
							target='_blank'
							rel='noopener'
						>
							{language === 'en'
								? 'Go to Website'
								: language === 'es'
								? 'Visitar Sitio Web'
								: 'Go to Website'}
						</a>
					</div>
					<p className='font-semibold opacity-60'>
						{language === 'en'
							? projectDescription
							: language === 'es'
							? projectDescriptionES
							: projectDescription}
					</p>
				</div>
				<div className=' w-[15rem] [@media(min-width:425px)]:w-[22rem] [@media(min-width:585px)]:min-w-[30rem] relative '>
					<img src={LaptopMockUp} className='w-full' alt='Laptop Mockup' />
					<div
						className='absolute -translate-x-1/2 overflow-hidden 
          w-[11.7rem] top-[0.65rem] left-[49.75%] h-[7.3rem] 
          
          [@media(min-width:425px)]:w-[17.2rem]   [@media(min-width:425px)]:top-[0.95rem] [@media(min-width:425px)]:h-[10.8rem]  [@media(min-width:425px)]:left-[49.9%] 
          [@media(min-width:585px)]:w-[23.4rem]   [@media(min-width:585px)]:top-[1.31rem] [@media(min-width:585px)]:h-[14.6rem]  [@media(min-width:585px)]:left-[49.8%] '
					>
						<a href={projectLink} target='_blank' rel='noopener'>
							<img
								src={projectImg}
								onMouseEnter={() => setIsHovering(true)}
								onMouseLeave={() => setIsHovering(false)}
								className={`  ${
									isHovering
										? '-translate-y-[calc(100%-14.7rem)] '
										: 'translate-y-0'
								} absolute  w-full transition duration-[7s] `}
								alt={projectName}
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
