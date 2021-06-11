import RecomCard from "./RecomCard";
import { useState } from "react";

function Recommendation(props) {
	const [recommendExist, setRecommendExist] = useState(true);

	function removeRecommendation() {
		setRecommendExist(false);
	}

	return (
		<div>
			{recommendExist && (
				<article className="recommendation">
					<h2 className="recommendation__title">
						More from the {props.art.culture} collection
					</h2>
					<RecomCard
						art={props.art}
						removeRecommendation={removeRecommendation}
					/>
				</article>
			)}
		</div>
	);
}

export default Recommendation;
