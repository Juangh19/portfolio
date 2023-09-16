import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { NavBar } from './components/NavBar';
import { Projects } from './components/Projects';

function App() {
	return (
		<div className='min-h-[100dvh] font-Poppins text-dark     bg-slate-200 '>
			<NavBar />
			<Hero />
			<About />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
