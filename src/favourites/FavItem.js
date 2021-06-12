import Button from "../common/Button";

export default function FavItem(props) {
	const image = (
		<img
			src={props.info.image}
			className="fav-list__image"
			alt={props.info.alt}
		/>
	);

	return (
		<li className="fav-list__item">
			<Button
				className="fav-list__button"
				text={image}
				handleClick={props.handleClick.bind(this, props.info.id)}
			/>
		</li>
	);
}
