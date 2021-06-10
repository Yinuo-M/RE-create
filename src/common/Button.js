function Button(props) {
	if (props.href) {
		return (
			<a
				target="_blank"
				className={`${props.className} ${
					props.icon && props.className + "--" + props.icon
				}`}
				href={props.href}
			>
				{props.text}
			</a>
		);
	}

	return (
		<button
			className={`${props.className} ${
				props.icon && props.className + "--" + props.icon
			}`}
			onClick={props.handleClick}
		>
			{props.text}
		</button>
	);
}

export default Button;
