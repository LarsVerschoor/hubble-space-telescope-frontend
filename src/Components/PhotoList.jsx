import PhotoCard from "./PhotoCard.jsx";
import {useSearchParams} from "react-router";
import Pagination from "./Pagination.jsx";
import {usePhotosContext} from "../Contexts/PhotosContext.jsx";

function PhotoList() {
    const [searchParams] = useSearchParams();

    const {photos, setPhotos} = usePhotosContext()

    const pageParsed = parseInt(searchParams.get('page'));
    const limitParsed = parseInt(searchParams.get('limit'));
    const page = typeof pageParsed === 'number' && !isNaN(pageParsed) ? pageParsed : 1;
    const limit = typeof limitParsed === 'number' && !isNaN(limitParsed) ? limitParsed : 6;

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

    return (
        <section className="my-8">
            {
                !photos ? (
                    <div>Loading...</div>
                ) : (
                    <>
                        <div className="grid grid-cols-auto-fit gap-3 md:gap-5">
                            {
                                photos.map((photo) => (
                                    <PhotoCard key={photo.id} photo={photo}/>
                                ))
                            }
                        </div>
                        <Pagination/>
                    </>
                )
            }

        </section>
    )
}

export default PhotoList;