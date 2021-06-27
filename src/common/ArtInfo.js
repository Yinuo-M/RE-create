import Button from "./Button";
import FavButton from "./FavButton";
import "./ArtInfo.scss";

function ArtInfo(props) {
	const art = props.art;
	const title = art.title.replace(/<\/?i>/g, "");
	const mediumList = art.medium.split("; ");
	let desc;
	if (art.country && art.objectDate) {
		desc = art.country + ", " + art.objectDate;
	} else {
		desc = art.country + art.objectDate;
	}

	return (
		<article className={`art-info art-info--${props.className}`}>
			<div className="art-info__image-wrapper">
				<img
					className="art-info__image"
					src={art.primaryImage}
					alt={title}
					width="670"
					height="700"
				/>
				<FavButton
					art={art}
					className="art-info__bookmark"
					textAdd="add to my favourites"
					textRemove="remove from my favourites"
				/>
			</div>
			<div className="art-info__text-wrapper">
				<div className="art-info__block art-info__block--header">
					<h2 className="art-info__name">{title}</h2>
					<p className="art-info__text">{desc}</p>
				</div>
				{
					<div className="art-info__block">
						<h3 className="art-info__title">{art.artistRole || "Artist"}</h3>
						<p className="art-info__text art-info__text--italic">
							{art.artistDisplayName || "unknown"}
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
				}
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
