import { hydrate, prerender as ssr } from 'preact-iso';
import Navbar from './Components/Navbar';
import preactLogo from './assets/preact.svg';
import './style.css';
import { useState } from 'preact/hooks';
import Dice from './Components/Dice';


export function App() {

	const [d4, setD4] = useState(0);
	const [d6, setD6] = useState(0);
	const [d8, setD8] = useState(0);
	const [d10, setD10] = useState(0);
	const [d12, setD12] = useState(0);
	const [d20, setD20] = useState(0);

	return (
		<div>
			<Navbar />
			<Dice count={d4} setCount={setD4} faces={4} src="/D4.png" />
			<Dice count={d6} setCount={setD6} faces={6} src="/D6.png" />
			<h1>ciao</h1>
		</div>
	);
}

// function Resource(props) {
// 	return (
// 		<a href={props.href} target="_blank" class="resource">
// 			<h2>{props.title}</h2>
// 			<p>{props.description}</p>
// 		</a>
// 	);
// }

if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
