import SubHeader from "./SubHeader.jsx";
import PhotoDetailButton from "./PhotoDetailButton.jsx";

function PhotoCard({photo}) {
    return (
        <article className="shadow-lg shadow-gray-300 flex flex-col gap-3 p-3 rounded">
            <SubHeader>{photo.title}</SubHeader>
            <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" className="w-full rounded" alt=""/>
            <PhotoDetailButton photoId={photo.id}/>
        </article>
    );
}

export default PhotoCard;