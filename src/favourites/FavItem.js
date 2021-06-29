import Button from "../common/Button";
import "./FavItem.scss"

export default function FavItem(props) {

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
