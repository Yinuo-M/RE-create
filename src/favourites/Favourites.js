import FavTitle from "./FavTitle";
import FavDisplay from "./FavDisplay";
import Filter from "./Filter";
import Modal from "./Modal.js";
import EmptyFav from "./EmptyFav";
import { useState, useEffect } from "react";

export default function Favourites(props) {
  const [filterCriteria, setFilterCriteria] = useState("latest");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [artID, setArtID] = useState(null);

  let favs = [];
  for (let key in localStorage) {
    if (key === "length") continue;
    if (!localStorage.hasOwnProperty(key)) continue;
    const favItem = JSON.parse(localStorage.getItem(key));

    favs.push(favItem);
  }
  const [favList, setFavList] = useState(favs);

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

    let favs = [];
    for (let key in localStorage) {
      if (key === "length") continue;
      if (!localStorage.hasOwnProperty(key)) continue;
      const favItem = JSON.parse(localStorage.getItem(key));

      favs.push(favItem);
    }
    setFavList(favs);
  }

  useEffect(() => {
    if (favList.length > 0) {
      props.removeBgImg();
    } else {
      props.addBgImg();
    }
  }, [favList, props]);

  return (
    <main className={`fav-main ${modalIsOpen ? "fav-main--modal" : ""}`}>
      {localStorage.length > 0 ? (
        <div>
          {modalIsOpen && <Modal id={artID} handleClick={handleExitClick} />}
          <FavTitle />
          <Filter handleChange={handleChange} filterCriteria={filterCriteria} />
          <FavDisplay
            filterCriteria={filterCriteria}
            handleClick={handleDisplayClick}
            favList={favList}
          />
        </div>
      ) : (
        <EmptyFav />
      )}
    </main>
  );
}
