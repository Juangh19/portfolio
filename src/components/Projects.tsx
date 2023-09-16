import { ProjectCard } from './ProjectCard';
import reactLogo from '../assets/images/techLogos/React.png';
import tsLogo from '../assets/images/techLogos/typescript.png';
import jsLogo from '../assets/images/techLogos/JavaScript.png';
import tailwindLogo from '../assets/images/techLogos/tailwind.png';
import cssLogo from '../assets/images/techLogos/css.png';
import FurnaPage from '../assets/images/projectsImages/FurnaPage.jpeg';
import CoinityPage from '../assets/images/projectsImages/CoinityPage.png';
import TempoTaskerPage from '../assets/images/projectsImages/TempoTaskerPage.jpeg';
import WeatherAppPage from '../assets/images/projectsImages/WeatherAppPage.jpeg';

export function Projects() {
	return (
		<section id='projects' className='min-h-screen py-16 bg-gray scroll-m-10 '>
			<div className='max-w-4xl px-8 mx-auto'>
				<div className='flex items-center gap-4 mb-3 text-xs text-drew'>
					<hr className='w-10 border' />
					<span className='font-bold '>PROJECTS</span>
				</div>
				<h2 className='mb-6 text-3xl font-bold '>
					Take a Dive into My Projects 🚀
				</h2>

				<ProjectCard
					projectName='FURNA 🛒 '
					projectType='E-commerce'
					projectDescription='Furna E-Commerce simplifies furniture shopping with a user-friendly
design. It offers easy navigation and a shopping cart feature for
product management.'
					techUsed={[tailwindLogo, tsLogo, reactLogo]}
					projectImg={FurnaPage}
					projectCode='https://github.com/Juangh19/furna'
					projectLink='https://juangh19.github.io/furna/'
				/>
				<ProjectCard
					projectName='COINITY 🪙 '
					projectType='Cryptos'
					projectDescription='Coinity is a web application that provides real-time information about cryptocurrencies. Explore the world of digital currencies, check the latest prices, market capitalization, and more.'
					techUsed={[tailwindLogo, tsLogo, reactLogo]}
					projectImg={CoinityPage}
					projectCode='https://github.com/Juangh19/coinity'
					projectLink='https://juangh19.github.io/coinity/'
					reverseCard={true}
				/>
				<ProjectCard
					projectName='TempoTasker ⏲️ '
					projectType='Productivity'
					projectDescription='Tempotasker is a task management web application designed to boost productivity. It allows users to organize tasks, allocate time efficiently, and transition seamlessly between tasks.'
					techUsed={[cssLogo, tsLogo, reactLogo]}
					projectImg={TempoTaskerPage}
					projectCode='https://github.com/Juangh19/coinity'
					projectLink='https://juangh19.github.io/coinity/'
				/>
				<ProjectCard
					projectName='WeatherApp 🌦️ '
					projectType='Weather'
					projectDescription='WeatherApp is a web application dedicated to offering current weather information for different cities, ensuring you are always informed about atmospheric conditions'
					techUsed={[cssLogo, jsLogo, reactLogo]}
					projectImg={WeatherAppPage}
					projectCode='https://github.com/Juangh19/coinity'
					projectLink='https://juangh19.github.io/coinity/'
					reverseCard={true}
				/>
			</div>
		</section>
	);
}
