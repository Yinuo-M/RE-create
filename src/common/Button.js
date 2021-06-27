import "./Button.scss";

function Button(props) {
	if (props.href) {
		return (
			<a
				target="_blank"
				rel="noreferrer"
				className={`standard-button ${props.className}`}
				href={props.href}
			>
				<span className="standard-button__text">{props.text}</span>
			</a>
		);
	}

	return (
		<button
			className={`standard-button ${props.className}`}
			onClick={props.handleClick}
		>
			<span className="standard-button__text">{props.text}</span>
			{props.imgUrl && (
				<img
					className="standard-button__img"
					src={props.imgUrl}
					alt={props.alt}
				/>
			)}
		</button>
	);
}

export default Button;
