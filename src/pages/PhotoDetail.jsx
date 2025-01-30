import {useParams} from "react-router";
import {useEffect, useState} from "react";
import MainHeader from "../Components/MainHeader.jsx";

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
            <MainHeader>Details of {photo.title}</MainHeader>
        </>
    )
}

export default PhotoDetail;