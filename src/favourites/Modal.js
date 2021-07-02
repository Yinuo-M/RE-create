import ArtInfo from "../common/ArtInfo";
import Button from "../common/Button";
import { useState, useEffect } from "react";
import Loader from "../common/Loader";
import ReactModal from "react-modal";
import "./Modal.scss";
import exitIcon from "../assets/exit.svg";
ReactModal.setAppElement("#root");

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
    <ReactModal
      isOpen={true}
      aria={{
        labelledby: "art-title",
      }}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.35)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        content: {
          background: "#f5f2ed",
          position: "relative",
          width: "1000px",
          maxWidth: "95%",
          height: "650px",
          maxHeight: "80vh",
          top: "0",
          right: "0",
          left: "0",
          bottom: "0",
          padding: "0",
          border: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      {art ? <ArtInfo className="fav" art={art} /> : <Loader className="fav-loader"/>}
      <Button
        className="exit"
        imgUrl={exitIcon}
        handleClick={props.handleClick}
      />
    </ReactModal>
  );
}
