import RecomCard from "./RecomCard";
import { useState } from "react";
import "./Recommendations.scss";

function Recommendation(props) {
	const [recommendExist, setRecommendExist] = useState(true);

	function removeRecommendation() {
		setRecommendExist(false);
	}

	const culture = props.art.culture.replace(/, (probably|possibly).*/gi, "");

	return (
		<div>
			{recommendExist && (
				<article className="recommendation">
					<div className="recommendation__wrapper">
						<h2 className="recommendation__title">
							More from the <span className="recommendation__culture">{culture}</span> collection
						</h2>
						<RecomCard
							art={props.art}
							removeRecommendation={removeRecommendation}
						/>
					</div>
				</article>
			)}
		</div>
	);
}

export default Recommendation;
