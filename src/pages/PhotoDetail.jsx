import SubHeader from "../Components/SubHeader.jsx";
import {useParams} from "react-router";
import {useEffect, useState} from "react";

function PhotoDetail() {
    const params = useParams();
    const photoId = params.id;
    const [photo, setPhoto] = useState({});

    useEffect(() => {
        (async () => {
            const response = await fetch(`http://145.24.223.230:8000/photos/${photoId}/`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            });
            setPhoto(await response.json());
        })();
    }, []);

    return (
        <>
            <SubHeader>Details of {photo.title}</SubHeader>
        </>
    )
}

export default PhotoDetail;