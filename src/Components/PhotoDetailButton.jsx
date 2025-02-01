import {Link, useSearchParams} from "react-router";

function PhotoDetailButton({photoId}) {
    const [searchParams] = useSearchParams();
    return (
        <Link className="bg-black w-full block text-center text-white py-4 hover:bg-gray-800 rounded" to={`/photos/${photoId}?${searchParams.toString()}`}>Discover this photo</Link>
    )
}

export default PhotoDetailButton;