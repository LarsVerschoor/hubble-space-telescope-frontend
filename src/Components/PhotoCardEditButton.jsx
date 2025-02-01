import {Link} from "react-router";

function PhotoCardEditButton({id}) {
    return (
        <Link to={`/photos/${id}/edit`} className="bg-black p-2 rounded hover:bg-gray-800"><img src="/icon_edit.svg" width="22px" alt="Edit this photo"/></Link>
    )
}

export default PhotoCardEditButton;