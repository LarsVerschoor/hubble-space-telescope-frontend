import {Link} from "react-router";

function PhotoDetailButton({photoId}) {
    return (
        <Link className="bg-black w-full block text-center text-white py-4 hover:bg-gray-800" to={`/photos/${photoId}`}>Discover this photo</Link>
    )
}

export default PhotoDetailButton;