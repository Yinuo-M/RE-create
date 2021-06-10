import RecomCard from "./RecomCard";

function Recommendation(props) {
	function handleClick() {
		alert("added to your favourite");
	}

	return (
		<article className="recommendation">
			<h2 className="recommendation__title">
				More from the {props.art.culture} collection
			</h2>
			<RecomCard art={props.art} />
		</article>
	);
}

export default Recommendation;
