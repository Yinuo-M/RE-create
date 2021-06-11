import FavTitle from "./FavTitle";
import FavDisplay from "./FavDisplay";
import Filter from "./Filter";
import { useState } from "react";

export default function Favourites() {
	const [filterCriteria, setFilterCriteria] = useState("latest");
	function handleChange(event) {
		setFilterCriteria(event.target.value);
	}

	return (
		<main className="fav-main">
			<FavTitle />
			<Filter handleChange={handleChange} filterCriteria={filterCriteria} />
			<FavDisplay filterCriteria={filterCriteria} />
		</main>
	);
}
