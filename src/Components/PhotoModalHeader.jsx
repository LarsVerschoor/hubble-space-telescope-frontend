import SubHeader from "./SubHeader.jsx";
import ModalCloseIcon from "./ModalCloseIcon.jsx";

function PhotoModalHeader({photo, onClose}) {
    return (
        <div className="flex justify-between gap-3 items-center p-3">
            <SubHeader>{photo.title}</SubHeader>
            <ModalCloseIcon onClose={onClose}/>
        </div>
    );

}

export default PhotoModalHeader;