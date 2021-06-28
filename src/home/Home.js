import { useState, useEffect } from "react";
import "./Home.scss";
import Loader from "../common/Loader";
import ContentContainer from "./ContentContainer";
import Title from "./Title";
import generateLetter from "../common/Utilitis";

function Home(props) {
  const [art, setArt] = useState(null);
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter((prevCounter) => prevCounter + 1);
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    props.removeBgImg();
    setArt(null);
    let cancel = false;
    const controller1 = new AbortController();
    const signal1 = controller1.signal;
    const controller2 = new AbortController();
    const signal2 = controller2.signal;

    async function fetchArt() {
      const randomLetter = generateLetter();

      const listResponse = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&hasImages=true&q=${randomLetter}`,
        signal1
      );
      const listResult = await listResponse.json();
      const numOfObjects = listResult.total;
      const IDs = listResult.objectIDs;

      let artResult;

      while (true) {
        const randomNum = Math.floor(Math.random() * numOfObjects);
        const randomID = IDs[randomNum];

        const artResponse = await fetch(
          `https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomID}`,
          signal2
        );
        artResult = await artResponse.json();
        if (artResult.culture && !artResult.culture.includes(";")) break;
      }

      if (!cancel) setArt(artResult);
    }

    fetchArt();

    return () => {
      cancel = true;
      controller1.abort();
      controller2.abort();
    };
  }, [counter, props]);

  return (
    <main className="home-main">
      <Title />
      {!art ? (
        <Loader className="home-loader" />
      ) : (
        <ContentContainer art={art} handleFetchClick={handleClick} />
      )}
    </main>
  );
}

export default Home;
