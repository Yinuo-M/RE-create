import Button from "../common/Button";
import { useState, useEffect, useRef } from "react";
import Loader from "../common/Loader";
import FavButton from "../common/FavButton";
import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";
import arrowLeftSmall from "../assets/arrow-left--small.svg";
import arrowRightSmall from "../assets/arrow-right--small.svg";
import bookmark from "../assets/bookmark-light.svg";
import bookmarkFill from "../assets/bookmark-fill-light.svg";
import "./RecomCard.scss";

export default function RecomCard(props) {
  const [objectInfo, setObjectInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const index = useRef(null);
  const counter = useRef(0);

  useEffect(() => {
    const controller1 = new AbortController();
    const signal1 = controller1.signal;
    const controller2 = new AbortController();
    const signal2 = controller2.signal;
    let cancel = false;

    async function fetchObject() {
      const listResponse = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/search?artistOrCulture=true&hasImages=true&q=${props.art.culture}`,
        signal1
      );
      const listResult = await listResponse.json();
      const numOfObjects = listResult.total;
      if (numOfObjects === 0) {
        props.removeRecommendation();
        return;
      }

      const objectIndex = Math.floor(Math.random() * numOfObjects);
      const objectIDs = listResult.objectIDs;

      const objectID = objectIDs[objectIndex];
      const objectResponse = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`,
        signal2
      );
      const object = await objectResponse.json();
      if (!cancel) {
        index.current = objectIndex;
        setObjectInfo({ object, index: objectIndex, ids: objectIDs });
        setLoading(false);
      }
    }

    fetchObject();

    return () => {
      controller1.abort();
      controller2.abort();
      cancel = true;
    };
  }, [props]);

  async function changeObject(direction) {
    setLoading(true);
    const oldCounter = counter.current;
    counter.current++;
    let newID;

    while (true) {
      if (direction === "prev") {
        index.current--;
      } else {
        index.current++;
      }

      if (index.current < 0) {
        index.current = objectInfo.ids.length - 1;
      } else if (index.current >= objectInfo.ids.length) {
        index.current = 0;
      }

      newID = objectInfo.ids[index.current];
      if (newID !== props.art.objectID) break;
    }
    const objectResponse = await fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${newID}`
    );
    const object = await objectResponse.json();

    if (counter.current - 1 === oldCounter) {
      setObjectInfo({ object, index: index.current, ids: objectInfo.ids });
      setLoading(false);
    }
  }

  return (
    <div className="recommendation__card">
      <Button
        className="recommendation__arrow recommendation__arrow--prev"
        handleClick={changeObject.bind(this, "prev")}
        imgUrl={arrowLeft}
        alt="previous"
      />
      <Button
        className="recommendation__arrow recommendation__arrow--next"
        handleClick={changeObject.bind(this, "next")}
        imgUrl={arrowRight}
        alt="next"
      />

      <div className="recommendation__block">
        {!loading ? (
          <div className="recommendation__info">
            <div className="recommendation__img-wrapper">
              <img
                className="recommendation__img"
                src={objectInfo.object.primaryImageSmall}
                alt={objectInfo.object.title}
              />
              <Button
                className="recommendation__img-arrow recommendation__img-arrow--prev"
                handleClick={changeObject.bind(this, "prev")}
                imgUrl={arrowLeftSmall}
                alt="previous"
              />
              <Button
                className="recommendation__img-arrow recommendation__img-arrow--next"
                handleClick={changeObject.bind(this, "next")}
                imgUrl={arrowRightSmall}
                alt="next"
              />
            </div>
            <div className="recommendation__name-wrapper">
              <FavButton
                art={objectInfo.object}
                className="recommendation__bookmark"
                imgEmpty={bookmark}
                imgFill={bookmarkFill}
              />
              <p className="recommendation__name">
                {objectInfo.object.title.replace(/<\/?i>/g, "")}
              </p>
            </div>
            {objectInfo.object.artistDisplayName &&
              (objectInfo.object.artistWikidata_URL ? (
                <Button
                  href={objectInfo.object.artistWikidata_URL}
                  className="recommendation__artist"
                  text={objectInfo.object.artistDisplayName}
                />
              ) : (
                <p className="recommendation__artist recommendation__artist--no-link">
                  {objectInfo.object.artistDisplayName}
                </p>
              ))}
          </div>
        ) : (
          <Loader className="recom-loader" />
        )}
      </div>
    </div>
  );
}
