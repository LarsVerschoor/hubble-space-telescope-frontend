import SubHeader from "./SubHeader.jsx";
import PhotoCardDeleteButton from "./PhotoCardDeleteButton.jsx";
import PhotoCardEditButton from "./PhotoCardEditButton.jsx";

function PhotoCardHeader({photo, onDelete}) {


    return (
        <div className="flex gap-3 justify-between items-center">
            <SubHeader>{photo.title}</SubHeader>
            <div className="flex gap-3 flex-shrink-0">
                <PhotoCardEditButton/>
                <PhotoCardDeleteButton onDelete={onDelete}/>
            </div>
        </div>
    )
}

export default PhotoCardHeader;