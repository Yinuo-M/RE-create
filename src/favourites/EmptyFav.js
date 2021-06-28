import { Link } from "react-router-dom";
import "./EmptyFav.scss";

export default function EmptyFav(props) {
  return (
    <div className="message">
      <p className="message__text">
        <span className="message__empty">It's empty here...</span>
        <span className="message__suggestion">
          why not <span className="message__explore">EXPLORE</span> more?
        </span>
      </p>
      <Link className="message__button-wrapper" to="/">
        <span className="message__button-text">view art of the day</span>
      </Link>
    </div>
  );
}
