import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { NavBar } from './components/NavBar';
import { Projects } from './components/Projects';
import LanguageContextProvider from './context/Language';

function App() {
	return (
		<LanguageContextProvider>
			<div className='min-h-[100dvh] font-Poppins text-dark     bg-slate-200 '>
				<NavBar />
				<Hero />
				<About />
				<Projects />
				<Contact />
				<Footer />
			</div>
		</LanguageContextProvider>
	);
}

export default App;
