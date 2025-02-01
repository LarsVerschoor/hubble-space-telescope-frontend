import {createContext, useContext, useEffect, useState} from "react";
import {useSearchParams} from "react-router";

const PhotoListContext = createContext(undefined);

function PhotoListProvider({ children }) {
    const [photos, setPhotos] = useState([]);
    const [pagination, setPagination] = useState(null);
    const [searchParams] = useSearchParams();

    const pageParsed = parseInt(searchParams.get('page'));
    const limitParsed = parseInt(searchParams.get('limit'));
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(6);
    const pageUrl = typeof pageParsed === 'number' && !isNaN(pageParsed) ? pageParsed : 1;
    const limitUrl = typeof limitParsed === 'number' && !isNaN(limitParsed) ? limitParsed : 6;

    if (page !== pageUrl) {
        setPage(pageUrl);
    }

    if (limit !== limitUrl) {
        setLimit(limitUrl);
    }

    useEffect(() => {
        (async () => {
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
        })();
    }, [page, limit]);

    const addPhoto = (newPhoto) => {
        setPhotos([...photos, newPhoto]);
    }

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://145.24.223.230:8000/photos/${id}`, {
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

    const changePage = (newPage) => {
        setPage(newPage);

    }

    const changeLimit = (newLimit) => {
        setLimit(newLimit);
    }

    return (
        <PhotoListContext.Provider value={{ photos, pagination, page, limit, setPhotos, handleDelete, changePage, changeLimit, addPhoto }}>
            {children}
        </PhotoListContext.Provider>
    )
}

function usePhotosContext() {
    const photos = useContext(PhotoListContext);

    if (photos === undefined) {
        throw new Error('usePhotosContext must be used with a PhotoListContext');
    }

    return photos;
}


export { PhotoListProvider, usePhotosContext };