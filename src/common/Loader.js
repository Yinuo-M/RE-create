import PulseLoader from "react-spinners/PuffLoader";

function Loader(props) {
	return (
		<div className={`loader ${props.className}`}>
			<PulseLoader color="#9c5d5d" size={70}/>
		</div>
	);
}

export default Loader;
