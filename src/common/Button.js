function Button(props) {
	if (props.href) {
		return (
			<a
				target="_blank"
				rel="noreferrer"
				className={`standard-button ${props.className}`}
				href={props.href}
			>
				{props.text}
			</a>
		);
	}

	return (
		<button className={`standard-button ${props.className}`} onClick={props.handleClick}>
			{props.text}
		</button>
	);
}

export default Button;
