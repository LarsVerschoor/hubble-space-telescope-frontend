import MainHeader from "../Components/MainHeader.jsx";
import AddPhotoForm from "../Components/AddPhotoForm.jsx";

function AddPhoto() {
    return (
        <div className="min-w-96 w-1/3 mx-auto">
            <MainHeader>Add a new photo</MainHeader>
            <AddPhotoForm/>
        </div>
    );
}

export default AddPhoto;