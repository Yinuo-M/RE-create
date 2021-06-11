function Button(props) {
	if (props.href) {
		return (
			<a
				target="_blank"
				rel="noreferrer"
				className={props.className}
				href={props.href}
			>
				{props.text}
			</a>
		);
	}

	return (
		<button className={props.className} onClick={props.handleClick}>
			{props.text}
		</button>
	);
}

export default Button;
