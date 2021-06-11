import { useState } from "react";
import Button from "./Button";

export default function FavButton(props) {
	const id = props.art.objectID;

	const [added, setAdded] = useState(localStorage.getItem(id) ? true : false);

	let text;
	if (added) {
		text = props.textRemove;
	} else {
		text = props.textAdd;
	}

	function handleClick() {
		if (added) {
			localStorage.removeItem(id);
			text = props.textAdd;
			setAdded(false);
			return;
		}

		const info = {
			id,
			image: props.art.primaryImageSmall,
			date: Date.now(),
		};
		localStorage.setItem(id, JSON.stringify(info));
		text = props.textRemove;
		setAdded(true);
	}

	return (
		<Button
			className={`${props.className} ${props.className}--${added}`}
			added={added}
			text={text}
			handleClick={handleClick}
		/>
	);
}
