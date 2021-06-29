import FavItem from "./FavItem";
import "./FavDisplay.scss";

export default function FavDisplay(props) {
  let favList = props.favList;

  if (props.filterCriteria === "latest") {
    favList.sort((a, b) => b.date - a.date);
  } else if (props.filterCriteria === "earliest") {
    favList.sort((a, b) => a.date - b.date);
  } else {
    favList.sort(() => (Math.random() > 0.5 ? 1 : -1));
  }

  const averageLength = Math.round(favList.length / 3);
  let column1 = [],
    column2 = [],
    column3 = [];
  if (favList.length <= averageLength * 3) {
    column1 = favList.slice(0, averageLength);
    column2 = favList.slice(averageLength, averageLength * 2);
    column3 = favList.slice(averageLength * 2);
  } else {
    column1 = favList.slice(0, favList.length - averageLength * 2);
    column2 = favList.slice(column1.length, column1.length + averageLength);
    column3 = favList.slice(column1.length + averageLength);
  }

  const displayList1 = column1.map((fav) => {
    return <FavItem key={fav.id} info={fav} handleClick={props.handleClick} />;
  });
  const displayList2 = column2.map((fav) => {
    return <FavItem key={fav.id} info={fav} handleClick={props.handleClick} />;
  });
  const displayList3 = column3.map((fav) => {
    return <FavItem key={fav.id} info={fav} handleClick={props.handleClick} />;
  });

  return (
    <ul className="fav-list">
      <li className="fav-list__column">
        <ul className="fav-list__sub-list">{displayList1}</ul>
      </li>
      <li className="fav-list__column">
        <ul className="fav-list__sub-list">{displayList2}</ul>
      </li>
      <li className="fav-list__column">
        <ul className="fav-list__sub-list">{displayList3}</ul>
      </li>
    </ul>
  );
}
