import FavItem from "./FavItem";

export default function FavDisplay(props) {
  let favList = props.favList;

  if (props.filterCriteria === "latest") {
    favList.sort((a, b) => b.date - a.date);
  } else if (props.filterCriteria === "earliest") {
    favList.sort((a, b) => a.date - b.date);
  } else {
    favList.sort(() => (Math.random() > 0.5 ? 1 : -1));
  }

  const displayList = favList.map((fav) => {
    return <FavItem key={fav.id} info={fav} handleClick={props.handleClick} />;
  });

  return <ul className="fav-list">{displayList}</ul>;
}
