import { useState, useEffect } from "react";
import "./Home.scss";
import Loader from "../common/Loader";
import ContentContainer from "./ContentContainer";
import Title from "./Title";
import generateLetter from "../common/Utilitis";

function Home() {
	const [art, setArt] = useState(null);

	async function handleFetchClick() {
		setArt(null);
		const randomLetter = generateLetter();

		const listResponse = await fetch(
			`https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&hasImages=true&q=${randomLetter}`
		);
		const listResult = await listResponse.json();
		const numOfObjects = listResult.total;
		const IDs = listResult.objectIDs;

		let artResult;

		while (true) {
			const randomNum = Math.floor(Math.random() * numOfObjects);
			const randomID = IDs[randomNum];

			const artResponse = await fetch(
				`https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomID}`
			);
			artResult = await artResponse.json();
			if (artResult.culture && !artResult.culture.includes(";")) break;
		}

		setArt(artResult);
	}

	useEffect(() => {
		handleFetchClick();
	}, []);

	return (
		<main className="home-main">
			<Title />
			{!art ? (
				<Loader />
			) : (
				<ContentContainer art={art} handleFetchClick={handleFetchClick} />
			)}
		</main>
	);
}

export default Home;
