import { useEffect, useState } from 'react';

import axios from 'axios';

export const Fact = () => {
	const [fact, setFact] = useState('');

	useEffect(() => {
		// fetch data from server
		// https://catfact.ninja/fact

		// axios
		// 	.get('https://catfact.ninja/fact')
		// 	.then((res) => {
		// 		// run this function after getting the date
		// 		setFact(res.data.fact);
		// 	})
		// 	.catch((err) => {
		// 		console.log(err);
		// 	});

		fetchData();
	}, []);

	const fetchData = async () => {
		const res = await axios.get('https://catfact.ninja/fact');
		setFact(res.data.fact);
	};

	return <h1>{fact}</h1>;
};
