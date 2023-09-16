import { useState } from 'react';
import { ExternalLinkIcon, GithubIcon } from './icons';
import LaptopMockUp from '../assets/images/LaptopMock.png';

type ProjectCardProps = {
	projectName: string;
	projectType: string;
	projectDescription: string;
	techUsed: string[];
	projectImg: string;
	projectLink: string;
	projectCode: string;
	reverseCard?: boolean;
};

export function ProjectCard(props: ProjectCardProps) {
	const [isHovering, setIsHovering] = useState(false);
	console.log(isHovering);

	const {
		projectName,
		projectType,
		projectDescription,
		techUsed,
		projectImg,
		projectLink,
		projectCode,
		reverseCard,
	} = props;

	return (
		<div className='px-8 py-6 bg-light rounded-[2.5rem] shadow-md mb-12'>
			<div
				className={`flex [@media(min-width:896px)]:flex-row flex-col-reverse   ${
					reverseCard === true
						? '[@media(min-width:896px)]:flex-row-reverse'
						: 'flex-row'
				}  items-center gap-4 `}
			>
				<div className='flex flex-col gap-4'>
					<h4 className='text-xl font-bold'>
						<strong className='font-bold'>{projectName}</strong>
						<span className='block opacity-60 [@media(min-width:425px)]:inline '>
							({projectType})
						</span>
					</h4>
					<p className='font-semibold opacity-60'>{projectDescription}</p>
					<div className='flex flex-col gap-4 [@media(min-width:896px)]:flex-row items-center'>
						<span className='font-semibold opacity-60 '>Tech used</span>
						<div className='flex gap-2'>
							{techUsed.map((tech, index) => (
								<img
									key={index}
									src={tech}
									className='w-10 h-10'
									alt='tech logo'
								/>
							))}
						</div>
					</div>
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
								className={` translate-y-0 ${
									isHovering
										? '-translate-y-[calc(100%-14.7rem)] '
										: 'translate-y-0'
								} absolute  w-full transition duration-[8s] `}
								alt={projectName}
							/>
						</a>
					</div>
				</div>
			</div>
			<div className='flex justify-center gap-6 [@media(min-width:425px)]:gap-12 mt-8 [@media(min-width:896px)]:mt-4'>
				<a
					href={projectCode}
					target='_blank'
					rel='noopener'
					className='flex items-center gap-2 font-semibold transition hover:text-drew'
				>
					<span className='text-base [@media(min-width:390px)]:text-xl'>
						Code
					</span>
					<GithubIcon style='w-7 h-7' />
				</a>
				<a
					href={projectLink}
					target='_blank'
					rel='noopener'
					className='flex items-center gap-2 font-semibold transition hover:text-drew'
				>
					<span className='text-base [@media(min-width:390px)]:text-xl '>
						Live Demo
					</span>
					<ExternalLinkIcon style='w-7 h-7' />
				</a>
			</div>
		</div>
	);
}
