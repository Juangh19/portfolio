import { LinkedinIconNoBorder, MailIcon } from './icons';

export function Contact() {
	return (
		<section id='contact' className='py-16 bg-light'>
			<div className='flex flex-col items-center [@media(min-width:530px)]:flex-row justify-center max-w-4xl gap-2 [@media(min-width:530px)]:gap-10 px-8 mx-auto'>
				<div className='flex flex-col'>
					<div className='flex items-center gap-4 mb-3 text-xs text-drew'>
						<hr className='w-10 border' />
						<span className='font-bold '>CONTACT ME</span>
					</div>
					<h2 className='mb-6 text-3xl font-bold '>
						Reach Me Here{' '}
						<span className='[@media(min-width:530px)]:hidden inline'>👇</span>
						<span className='[@media(min-width:530px)]:inline hidden'>👉</span>
					</h2>
				</div>
				<div className='flex flex-col gap-6'>
					<div className='flex items-center gap-3'>
						<div className='grid rounded-full shadow-[0_0_5px_0px_rgba(0,0,0,0.25)] w-9 h-9 place-content-center'>
							<MailIcon style='h-4 w-6 ' />
						</div>
						<div className='flex flex-col '>
							<span className='font-semibold '>Email</span>
							<a
								href='mailto:juangarcia7337@gmail.com'
								className='text-sm transition opacity-60 hover:text-drew hover:opacity-100'
							>
								juangarcia7337@gmail.com
							</a>
						</div>
					</div>
					<div className='flex items-center gap-3'>
						<div className='grid rounded-full shadow-[0_0_5px_0px_rgba(0,0,0,0.25)] w-9 h-9 place-content-center'>
							<LinkedinIconNoBorder style='h-6 w-6 ' />
						</div>
						<div className='flex flex-col '>
							<span className='font-semibold '>Linkedin</span>
							<a
								href='https://www.linkedin.com/in/juan-garcia-dev/'
								target='_blank'
								rel='noopener'
								className='text-sm transition opacity-60 hover:text-drew hover:opacity-100'
							>
								in/juan-garcia-dev
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
