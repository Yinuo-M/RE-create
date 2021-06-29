import Button from "../common/Button";
import "./FavItem.scss"

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
				imgUrl={props.info.image}
				alt={props.info.alt}
				handleClick={props.handleClick.bind(this, props.info.id)}
			/>
		</li>
	);
}
