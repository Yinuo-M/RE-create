import ArtInfo from "../common/ArtInfo";
import Reload from "./Reload";
import Recommendation from "./Recommendation";

function ContentContainer(props) {
  return (
    <div>
      <ArtInfo art={props.art} className="home" />
      <Reload handleClick={props.handleFetchClick} />
      <Recommendation art={props.art} />
    </div>
  );
}

export default ContentContainer;
