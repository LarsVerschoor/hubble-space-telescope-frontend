import {useNavigate, useParams} from "react-router";
import MainHeader from "../Components/MainHeader.jsx";
import EditPhotoForm from "../Components/EditPhotoForm.jsx";
import {useEffect, useState} from "react";

function EditPhoto() {
    const {id} = useParams();
    const [photo, setPhoto] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`http://145.24.223.230:8000/photos/${id}`, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                if (response.status !== 200) {
                    throw new Error(`Failed to load photo: ${response.status}, ${response.statusText}`);
                }
                const result = await response.json();
                setPhoto(result);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);

    const handleSubmit = async (formData) => {
        try {
            const response = await fetch(`http://145.24.223.230:8000/photos/${id}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.status !== 200 && response.status !== 201) {
                throw new Error(`Failed to edit photo: ${response.status}, ${response.statusText}`);
            }
            const result = await response.json();
            navigate(`/photos/${result.id}`);
        } catch(error) {
            console.error(error);
        }
    }

    return (
        <>
            <MainHeader>Edit photo {id}</MainHeader>
            {
                photo === null ? (
                    <div>Loading...</div>
                ) : (
                    <EditPhotoForm photo={photo} onSubmit={handleSubmit}/>
                )
            }
        </>
    );
}

export default EditPhoto;