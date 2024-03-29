import { ProjectCard } from './ProjectCard';
import reactLogo from '../assets/images/techLogos/React.png';
import tsLogo from '../assets/images/techLogos/typescript.png';
import nodeLogo from '../assets/images/techLogos/nodejs.png';
import jsLogo from '../assets/images/techLogos/JavaScript.png';
import tailwindLogo from '../assets/images/techLogos/tailwind.png';
import cssLogo from '../assets/images/techLogos/css.png';
import mongodbLogo from '../assets/images/techLogos/mongodb.png';
import RodamientosRBCPage from '../assets/images/projectsImages/RodamientosRBC.png';
import AttorneyRey from '../assets/images/projectsImages/AttorneyRey.png';
import FurnaPage from '../assets/images/projectsImages/FurnaPage.jpeg';
import CoinityPage from '../assets/images/projectsImages/CoinityPage.png';
import TempoTaskerPage from '../assets/images/projectsImages/TempotaskerPage.jpeg';
import WeatherAppPage from '../assets/images/projectsImages/WeatherAppPage.jpeg';
import { useLanguage } from '../context/Language';
import { RealProjectCard } from './RealProjectCard';

export function Projects() {
	const { language } = useLanguage();
	return (
		<section id='projects' className='min-h-screen py-16 bg-gray scroll-m-10 '>
			<div className='max-w-4xl px-8 mx-auto'>
				<div className='flex items-center gap-4 mb-3 text-xs text-drew'>
					<hr className='w-10 border' />
					<span className='font-bold '>
						{language === 'en'
							? 'PROJECTS'
							: language === 'es'
							? 'PROYECTOS'
							: 'PROJECTS'}
					</span>
				</div>
				<h2 className='mb-6 text-3xl font-bold '>
					{language === 'en'
						? 'Companies that Trusts my Work 💼'
						: language === 'es'
						? 'Empresas que Confían en mi Trabajo 💼 '
						: 'Companies that Trusts my Work 💼'}
				</h2>
				<div className='flex gap-8 mb-12 overflow-x-auto'>
					<RealProjectCard
						projectName='Rodamientos RBC'
						projectDescription='Developed website for Rodamientos y Bocines Caribe S.A.S, emphasizing high-quality auto parts. The sleek design aligns with the 10-year legacy and vision as a leading parts supplier.'
						projectDescriptionES='Desarrollé la web de Rodamientos y Bocines Caribe S.A.S, destacando repuestos de alta calidad. El diseño refleja 10 años de trayectoria y la visión de liderar en el suministro de autopartes.'
						projectImg={RodamientosRBCPage}
						projectLink='https://rodamientosrbc.com/'
					/>
					<RealProjectCard
						projectName='Attorney Reinerio Hernandez, Esq.'
						projectDescription='Crafted website for Reinerio Hernandez, Esq., a lawyer with 25+ years of experience. Spotlighting his proficiency in immigration, bankruptcy, divorces, and probate, the interface conveys empathy and deep knowledge.'
						projectDescriptionES='Creé la web para Reinerio Hernandez, Esq., un abogado con 25+ años de experiencia. Destacando su especialización en inmigración, bancarrota, divorcios y sucesiones, la interfaz transmite empatía y conocimientos sólidos.'
						projectImg={AttorneyRey}
						projectLink='https://attorneyrhernandez.com/'
					/>
				</div>
				<h2 className='mb-6 text-3xl font-bold '>
					{language === 'en'
						? 'Take a Dive into My Projects 🚀'
						: language === 'es'
						? 'Echa un Vistazo a mis Proyectos 🚀'
						: 'Take a Dive into My Projects 🚀'}
				</h2>

				<ProjectCard
					projectName='FURNA 🛒 '
					projectType='E-commerce'
					projectDescription='Furna E-Commerce simplifies furniture shopping with a user-friendly
design. It offers easy navigation and a shopping cart feature for
product management.'
					projectDescriptionES='Furna E-Commerce simplifica las compras de muebles con un diseño fácil de usar. Ofrece una navegación sencilla y una función de carrito de compras para la gestión de productos.'
					techUsed={[tailwindLogo, tsLogo, reactLogo]}
					projectImg={FurnaPage}
					projectCode='https://github.com/Juangh19/furna'
					projectLink='https://juangh19.github.io/furna/'
				/>
				<ProjectCard
					projectName='COINITY 🪙 '
					projectType='Cryptos'
					projectDescription='Coinity is a web application that provides real-time information about cryptocurrencies. Explore the world of digital currencies, check the latest prices, market capitalization, and more.'
					projectDescriptionES='Coinity es una aplicación web que proporciona información en tiempo real sobre criptomonedas. Explore el mundo de las monedas digitales, consulte los últimos precios, la capitalización de mercado y más.'
					techUsed={[tailwindLogo, tsLogo, reactLogo]}
					projectImg={CoinityPage}
					projectCode='https://github.com/Juangh19/coinity'
					projectLink='https://juangh19.github.io/coinity/'
					reverseCard={true}
				/>
				<ProjectCard
					projectName='TempoTasker ⏲️ '
					projectType='Productivity'
					projectDescription='Tempotasker is a Full-Stack web application designed to boost productivity. It allows users to organize tasks, allocate time efficiently, and transition seamlessly between tasks.'
					projectDescriptionES='Tempotasker es una aplicación web Full-Stack diseñada para aumentar la productividad. Permite a los usuarios organizar tareas, asignar tiempo de manera eficiente y hacer la transición entre tareas sin problemas.'
					techUsed={[reactLogo, nodeLogo, mongodbLogo]}
					projectImg={TempoTaskerPage}
					projectCode='https://github.com/Juangh19/TempoTaskerFullStack'
					projectLink='https://tempo-tasker.onrender.com/'
				/>
				<ProjectCard
					projectName='WeatherApp 🌦️ '
					projectType='Weather'
					projectDescription='WeatherApp is a web application dedicated to offering current weather information for different cities, ensuring you are always informed about atmospheric conditions'
					projectDescriptionES='WeatherApp es una aplicación web dedicada a ofrecer información meteorológica actual para diferentes ciudades, asegurando que siempre esté informado sobre las condiciones atmosféricas.'
					techUsed={[cssLogo, jsLogo, reactLogo]}
					projectImg={WeatherAppPage}
					projectCode='https://github.com/Juangh19/weatherApp'
					projectLink='https://juangh19.github.io/weatherApp/'
					reverseCard={true}
				/>
			</div>
		</section>
	);
}
