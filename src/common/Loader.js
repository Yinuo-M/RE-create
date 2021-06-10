import "./Loader.scss";
import RingLoader from "react-spinners/RingLoader";

function Loader() {
	return (
		<div className="loader">
			<RingLoader color="#9c5d5d" size={160} />
		</div>
	);
}

export default Loader;
