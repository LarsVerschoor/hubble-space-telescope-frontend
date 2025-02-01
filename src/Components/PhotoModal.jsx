import {useRef, useEffect, useState} from "react";
import {useNavigate, useParams, useSearchParams} from "react-router";
import PhotoModalHeader from "./PhotoModalHeader.jsx";
import ModalCloseButton from "./ModalCloseButton.jsx";
import TertiaryHeader from "./TertiaryHeader.jsx";
import PhotoCardEditButton from "./PhotoCardEditButton.jsx";
import PhotoCardDeleteButton from "./PhotoCardDeleteButton.jsx";
import SubHeader from "./SubHeader.jsx";

function PhotoModal() {
    const [searchParams] = useSearchParams();
    const {id} = useParams();
    const [photo, setPhoto] = useState(null);
    const [imageLoaded, setImageLoaded] = useState(false);
    const navigate = useNavigate();
    const modalRef = useRef(null);
    const [notFound, setNotFound] = useState(false);

    const loadPhoto = async () => {
        try {
            const response = await fetch(`http://145.24.223.230:8000/photos/${id}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            });
            if (response.status !== 200) {
                if (response.status === 404) {
                    return setNotFound(true);
                }
                throw new Error(`Failed to load photo: ${response.status}, ${response.statusText}`);
            }
            const result = await response.json();

            if (!result.imageUrl) {
                setPhoto(result)
                setImageLoaded(true);
            }

            const img = new Image();
            img.src = result.imageUrl;
            img.addEventListener('load', () => {
                setPhoto(result);
                setImageLoaded(true);
            });
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        loadPhoto()

        if (modalRef.current) {
            modalRef.current.showModal();
        }
    }, []);

    const handleClose = () => {
        modalRef.current.close();
        navigate(`/photos?${searchParams.toString()}`);
    }

    return (
        <dialog ref={modalRef} onClose={handleClose} className="dialog-backdrop rounded border-2 border-gray-400 flex flex-col">
            {
                notFound ? (
                    <div className="p-3 flex flex-col gap-3">
                        <SubHeader>404 not found</SubHeader>
                        <button onClick={handleClose} className="bg-black text-white p-4 hover:bg-gray-800">Close</button>
                    </div>

                ) : (
                    photo === null || !imageLoaded ? (
                        <div>Loading...</div>
                    ) : (
                        <>
                            <PhotoModalHeader photo={photo} onClose={handleClose} />
                            <div className="px-3 flex flex-col gap-3 max-h-[500px] overflow-auto">
                                {
                                    photo.imageUrl && (
                                        <img width="400px" height="400px" src={photo.imageUrl} alt="Photo"
                                             className="aspect-square object-cover rounded"/>
                                    )
                                }
                                <div className="flex flex-col gap-1">
                                    <TertiaryHeader>Description</TertiaryHeader>
                                    <p className="max-w-[400px]">{photo.description}</p>
                                </div>

                                <div className="flex gap-1">
                                    <TertiaryHeader>Distance: </TertiaryHeader>
                                    <div className="max-w-[400px]">{photo.distance} light-years</div>
                                </div>
                                <div className="flex gap-3">
                                    <PhotoCardEditButton id={photo.id} />
                                    <PhotoCardDeleteButton id={photo.id} onClick={handleClose} />
                                </div>
                            </div>
                            <ModalCloseButton onClose={handleClose} />
                        </>
                    )
                )
            }
        </dialog>
    );

}

export default PhotoModal;