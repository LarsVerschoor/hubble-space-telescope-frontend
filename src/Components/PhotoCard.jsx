import SubHeader from "./SubHeader.jsx";
import PhotoDetailButton from "./PhotoDetailButton.jsx";

function PhotoCard({photo}) {
    return (
        <article>
            <div className="shadow-md flex flex-col gap-3 p-3">
                <SubHeader>{photo.title}</SubHeader>
                <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" className="w-full" alt=""/>
                <PhotoDetailButton photoId={photo.id}/>
            </div>
        </article>
    );
}

export default PhotoCard;