import SubHeader from "./SubHeader.jsx";
import PhotoDetailButton from "./PhotoDetailButton.jsx";

function PhotoCard({photo}) {
    return (
        <article>
            <article className="shadow-lg shadow-gray-300 bg-white flex flex-col gap-3 p-3 rounded">
                <SubHeader>{photo.title}</SubHeader>
                <img src={photo.imageUrl} className="w-full rounded object-contain" alt=""/>
                <PhotoDetailButton photoId={photo.id}/>
            </article>
        </article>
    );
}

export default PhotoCard;