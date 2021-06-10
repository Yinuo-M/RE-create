import Button from "../common/Button";
import { useState, useEffect } from "react";
import Loader from "../common/Loader";
import FavButton from "../common/FavButton";

export default function RecomCard(props) {
	const [objectInfo, setObjectInfo] = useState(null);

	useEffect(() => {
		async function fetchObject() {
			const listResponse = await fetch(
				`https://collectionapi.metmuseum.org/public/collection/v1/search?artistOrCulture=true&hasImages=true&q=${props.art.culture}`
			);
			const listResult = await listResponse.json();
			const numOfObjects = listResult.total;
			const objectIndex = Math.floor(Math.random() * numOfObjects);
			const objectIDs = listResult.objectIDs;

			const objectID = objectIDs[objectIndex];
			const objectResponse = await fetch(
				`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`
			);
			const object = await objectResponse.json();
			console.log(object);
			setObjectInfo({ object, index: objectIndex, ids: objectIDs });
		}

		fetchObject();
	}, [props.art.culture]);

	async function changeObject(direction) {
		setObjectInfo(null);
		let index = objectInfo.index;
    let newID

		while (true) {
			if (direction === "prev") {
				index--;
			} else {
				index++;
			}

			if (index < 0) {
				index = objectInfo.ids.length - 1;
			} else if (index >= objectInfo.ids.length) {
				index = 0;
			}

			newID = objectInfo.ids[index];
      if (newID !== props.art.objectID) break;
		}
		const objectResponse = await fetch(
			`https://collectionapi.metmuseum.org/public/collection/v1/objects/${newID}`
		);
		const object = await objectResponse.json();

		setObjectInfo({ object, index, ids: objectInfo.ids });
	}

	return (
		<div>
			{objectInfo ? (
				<div className="recommendation__card">
					<Button
						className="recommendation__arrow recommendation__arrow--prev"
						handleClick={changeObject.bind(this, "prev")}
					/>
					<img
						className="recommendation__img"
						src={objectInfo.object.primaryImageSmall}
						alt={
							objectInfo.object.title +
							" " +
							objectInfo.object.artistDisplayName +
							" " +
							objectInfo.object.objectName
						}
					/>
					<Button
						className="recommendation__arrow recommendation__arrow-next"
						handleClick={changeObject.bind(this, "next")}
					/>
					<div className="recommendation__name-wrapper">
						<FavButton
							className="recommendation__bookmark"
							art={objectInfo.object}
						/>
						<p className="recommendation__name">{objectInfo.object.title}</p>
					</div>
					{objectInfo.object.artistDisplayName && (
						<Button
							href={objectInfo.object.artistWikidata_URL}
							className="recommendation__artist"
							text={objectInfo.object.artistDisplayName}
						/>
					)}
				</div>
			) : (
				<Loader />
			)}
		</div>
	);
}
