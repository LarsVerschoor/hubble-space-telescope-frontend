import PhotoDetailButton from "./PhotoDetailButton.jsx";
import PhotoCardHeader from "./PhotoCardHeader.jsx";

function PhotoCard({photo, onDelete}) {
    return (
        <article>
            <div className="border-2 border-gray-400 shadow-md shadow-gray-200 bg-white flex flex-col gap-3 p-3 rounded">

                <PhotoCardHeader photo={photo} onDelete={() => {onDelete(photo.id)}}/>
                <img src={photo.imageUrl} className="w-full aspect-square rounded object-cover bg-black" alt=""/>
                <PhotoDetailButton photoId={photo.id}/>
            </div>
        </article>
    );
}

export default PhotoCard;