import { Link } from "react-router-dom";
import "./EmptyFav.scss";

export default function EmptyFav(props) {
  return (
    <div className="background-wrapper">
      <p className="message">
        <span className="message__empty">It's empty here...</span>
        <span className="message__suggestion">
          why not <span className="message__explore">EXPLORE</span> more?
        </span>
      </p>
      <Link to="/">view art of the day</Link>
    </div>
  );
}
