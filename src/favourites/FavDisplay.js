export default function FavDisplay(props) {
	let favList = [];
	for (let key in localStorage) {
		if (key === "length") continue;
		if (!localStorage.hasOwnProperty(key)) continue;
		const favItem = JSON.parse(localStorage.getItem(key));

		favList.push(favItem);
	}


	if (props.filterCriteria === "latest") {
		favList.sort((a, b) => b.date - a.date);
	} else if (props.filterCriteria === "earliest") {
		favList.sort((a, b) => a.date - b.date);
	} else {
		favList.sort(() => (Math.random() > 0.5 ? 1 : -1));
	}

	const displayList = favList.map((fav) => {
		return (
			<li className="fav-list__item" key={fav.id}>
				<img src={fav.image} className="fav-list__image" />
			</li>
		);
	});

	return <ul className="fav-list">{displayList}</ul>;
}
