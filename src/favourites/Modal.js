import ArtInfo from "../common/ArtInfo";
import Button from "../common/Button";
import { useState, useEffect } from "react";
import Loader from "../common/Loader";

export default function Modal(props) {
	const [art, setArt] = useState(null);

	useEffect(() => {
		async function fetchArt() {
			const artResponse = await fetch(
				`https://collectionapi.metmuseum.org/public/collection/v1/objects/${props.id}`
			);
			const artResult = await artResponse.json();
			console.log(artResult);
			setArt(artResult);
		}

		fetchArt();
	}, [props.id]);

	return (
		<article className="modal">
			{art ? <ArtInfo className="fav" art={art} /> : <Loader />}
			<Button className="exit" handleClick={props.handleClick} />
		</article>
	);
}
