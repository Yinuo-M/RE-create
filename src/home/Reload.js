import Button from "../common/Button";

function Reload(props) {
	return (
		<article className="reload">
			<h2 className="reload__title">
				<span className="reload__title1">Looking for more</span>{" "}
				<span className="reload__title2">inspiration?</span>
			</h2>
			<Button
				className="reload__button"
				text="discover a new piece"
				handleClick={props.handleClick}
			/>
		</article>
	);
}

export default Reload;
