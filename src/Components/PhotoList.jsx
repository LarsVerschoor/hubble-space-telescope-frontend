import {useEffect, useState, useMemo} from "react";
import PhotoCard from "./PhotoCard.jsx";
import {useLocation} from "react-router";
import Pagination from "./Pagination.jsx";

function useQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
}

function PhotoList() {
    const [photos, setPhotos] = useState([]);
    const [pagination, setPagination] = useState(null);
    const query = useQuery()
    const pageParsed = parseInt(query.get('page'));
    const limitParsed = parseInt(query.get('limit'));
    console.log(limitParsed)
    const page = typeof pageParsed === 'number' && !isNaN(pageParsed) ? pageParsed : 1;
    const limit = typeof limitParsed === 'number' && !isNaN(limitParsed) ? limitParsed : 3;
    console.log(limit)

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

    useEffect(() => {
        loadPhotos()
    }, [page, limit]);

    return (
        <section className="my-8">
            <div className="grid grid-cols-auto-fit gap-3 md:gap-5">
                {
                    photos.map((photo) => (
                        <PhotoCard key={photo.id} photo={photo}/>
                    ))
                }
            </div>
            <Pagination pagination={pagination} page={page} limit={limit}/>
        </section>
    )
}

export default PhotoList;