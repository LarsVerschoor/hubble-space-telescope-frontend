import {useEffect, useState} from "react";
import PhotoCard from "./PhotoCard.jsx";

function PhotoList() {
    const [photos, setPhotos] = useState([]);

    const loadPhotos = async () => {
        try {
            const response = await fetch('http://145.24.223.230:8000/photos', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            });
            const items = (await response.json()).items;
            setPhotos(items);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {loadPhotos()}, []);

    return (
        <section className="grid grid-cols-auto-fit gap-3 md:gap-5 mt-8">
            {
                photos.map((photo) => (
                    <PhotoCard key={photo.id} photo={photo}/>
                ))
            }
        </section>
    )
}

export default PhotoList;