import ArtInfo from "./ArtInfo";
import Reload from "./Reload";
import Recommendation from "./Recommendation";

function ContentContainer(props) {
	return (
		<div>
			<ArtInfo art={props.art} />
			<Reload handleClick={props.handleFetchClick} />
			<Recommendation art={props.art} />
		</div>
	);
}

export default ContentContainer;
