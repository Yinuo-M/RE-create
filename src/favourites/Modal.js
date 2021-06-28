import ArtInfo from "../common/ArtInfo";
import Button from "../common/Button";
import { useState, useEffect } from "react";
import Loader from "../common/Loader";

export default function Modal(props) {
  const [art, setArt] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    let cancel = false;

    async function fetchArt() {
      const artResponse = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${props.id}`,
        signal
      );
      const artResult = await artResponse.json();
      if (!cancel) setArt(artResult);
    }

    fetchArt();

    return () => {
      controller.abort();
      cancel = true;
    };
  }, [props.id]);

  return (
    <article className="modal">
      {art ? (
        <ArtInfo className="fav" art={art} />
      ) : (
        <Loader />
      )}
      <Button className="exit" handleClick={props.handleClick} />
    </article>
  );
}
