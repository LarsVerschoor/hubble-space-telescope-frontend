import SubHeader from "./SubHeader.jsx";
import PhotoDetailButton from "./PhotoDetailButton.jsx";

function PhotoCard({photo}) {
    return (
        <article>
            <div className="border-2 border-gray-400 shadow-md shadow-gray-200 bg-white flex flex-col gap-3 p-3 rounded">
                <SubHeader>{photo.title}</SubHeader>
                <img src={photo.imageUrl} className="w-full aspect-square rounded object-cover bg-black" alt=""/>
                <PhotoDetailButton photoId={photo.id}/>
            </div>
        </article>
    );
}

export default PhotoCard;