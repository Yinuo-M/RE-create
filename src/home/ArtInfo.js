import Button from "../common/Button";
import FavButton from "../common/FavButton";

function ArtInfo(props) {
	const art = props.art;
	const title = props.art.title.replace("<i>", " ");
	const mediumList = art.medium.split("; ");

	return (
		<article className="art-info">
			<img
				className="art-info__image"
				src={art.primaryImage}
				alt={title + " " + art.artistDisplayName + " " + art.objectName}
			/>
			<FavButton
				art={art}
				className="art-info__bookmark"
				textAdd="add to my favourites"
				textRemove="remove from my favourites"
			/>
			<div className="art-info__wrapper">
				<div className="art-info__block">
					<h2 className="art-info__name">{title}</h2>
					<p className="art-info__text">{art.objectDate}</p>
				</div>
				{art.artistRole && (
					<div className="art-info__block">
						<h3 className="art-info__title">{art.artistRole}</h3>
						<p className="art-info__text art-info__text--italic">
							{art.artistDisplayName}
						</p>
						<p className="art-info__text">{art.artistDisplayBio}</p>
						{art.artistWikidata_URL && (
							<Button
								className="art-info__button"
								text="artist's wiki"
								href={art.artistWikidata_URL}
							/>
						)}
					</div>
				)}
				<div className="art-info__block">
					<h3 className="art-info__title">Details</h3>
					{mediumList.map((medium) => (
						<p className="art-info__text" key={medium}>
							{medium}
						</p>
					))}
					<Button
						text="more about this piece"
						href={art.objectURL}
						className="art-info__button"
					/>
				</div>
			</div>
		</article>
	);
}

export default ArtInfo;
