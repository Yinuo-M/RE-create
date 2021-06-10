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

		localStorage.setItem(id, props.art.primaryImageSmall);
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
