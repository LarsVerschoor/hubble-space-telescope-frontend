import {useEffect, useState} from "react";
import PhotoCard from "./PhotoCard.jsx";
import {Outlet, useSearchParams} from "react-router";
import Pagination from "./Pagination.jsx";

function PhotoList() {
    const [photos, setPhotos] = useState([]);
    const [pagination, setPagination] = useState(null);
    const [searchParams] = useSearchParams();

    const pageParsed = parseInt(searchParams.get('page'));
    const limitParsed = parseInt(searchParams.get('limit'));
    const page = typeof pageParsed === 'number' && !isNaN(pageParsed) ? pageParsed : 1;
    const limit = typeof limitParsed === 'number' && !isNaN(limitParsed) ? limitParsed : 6;

    const loadPhotos = async () => {
        try {
            const response = await fetch(`http://145.24.223.230:8000/photos?limit=${limit}&page=${page}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            });
            const result = await response.json();
            setPhotos(result.items);
            setPagination(result.pagination);
        } catch (error) {
            console.error(error);
        }
    }

    const handleDelete = async (id) => {
        try {
            const photo = photos.find(photo => photo.id === id);
            const response = await fetch(photo._links.self.href, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json'
                }
            });
            if (response.status !== 204) throw new Error(`Failed to delete photo: ${response.status}, ${response.statusText}`);
            setPhotos(prevPhotos => prevPhotos.filter(photo => photo.id !== id));
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        loadPhotos()
    }, [page, limit]);

    return (
        <section className="my-8">
            <div className="grid grid-cols-auto-fit gap-3 md:gap-5">
                {
                    photos.map((photo) => (
                        <PhotoCard key={photo.id} photo={photo} onDelete={handleDelete}/>
                    ))
                }
            </div>
            <Pagination pagination={pagination} page={page} limit={limit}/>
            <Outlet/>
        </section>
    )
}

export default PhotoList;