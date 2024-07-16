import './App.css';

import { useState } from 'react';
import { Fact } from './components/Fact';

function App() {
	const [show, setShow] = useState(false);

	return (
		<div className="App">
			<button onClick={() => setShow(!show)}>get a cat fact</button>
			{show && <Fact />}
		</div>
	);
}

export default App;
