import { useState } from "react";
import Button from "./Button";
import "./FavButton.scss";

export default function FavButton(props) {
  const id = props.art.objectID;

  const [added, setAdded] = useState(localStorage.getItem(id) ? true : false);

  let text;
  if (added) {
    text = props.textRemove;
  } else {
    text = props.textAdd;
  }

  let img;
  if (added) {
    img = props.imgFill;
  } else {
    img = props.imgEmpty;
  }

  function handleClick() {
    if (added) {
      localStorage.removeItem(id);
      text = props.textAdd;
      img = props.imgFill;
      setAdded(false);
      return;
    }

    const title = props.art.title.replace(/<\/?i>/g, "");

    const info = {
      id,
      image: props.art.primaryImageSmall,
      date: Date.now(),
      alt: title,
    };
    localStorage.setItem(id, JSON.stringify(info));
    text = props.textRemove;
    img = props.imgEmpty;
    setAdded(true);
  }

  return (
    <Button
      className={`fav-button ${props.className} fav-button--${added}`}
      added={added}
      text={text}
      handleClick={handleClick}
      imgUrl={img}
    />
  );
}
