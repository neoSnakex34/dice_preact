import { hydrate, prerender as ssr } from 'preact-iso';
import Navbar from './Components/Navbar';
import './style.css';
import Main from './Components/Main';

export function App() {


	return (
		<div>
			<Navbar />
			<Main />	

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
