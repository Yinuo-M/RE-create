import FavTitle from "./FavTitle";
import FavDisplay from "./FavDisplay";
import Filter from "./Filter";
import Modal from "./Modal.js";
import EmptyFav from "./EmptyFav";
import { useState } from "react";

export default function Favourites() {
	const [filterCriteria, setFilterCriteria] = useState("latest");
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [artID, setArtID] = useState(null);

	function handleChange(event) {
		setFilterCriteria(event.target.value);
	}

	function handleDisplayClick(id) {
		setModalIsOpen(true);
		setArtID(id);
	}

	function handleExitClick() {
		setModalIsOpen(false);
		setArtID(null);
	}

	return (
		<main className="fav-main">
			{localStorage.length > 0 ? (
				<div>
					{modalIsOpen && <Modal id={artID} handleClick={handleExitClick} />}
					<FavTitle />
					<Filter handleChange={handleChange} filterCriteria={filterCriteria} />
					<FavDisplay
						filterCriteria={filterCriteria}
						handleClick={handleDisplayClick}
					/>
				</div>
			) : (
				<EmptyFav />
			)}
		</main>
	);
}
