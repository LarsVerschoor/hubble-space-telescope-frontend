import PhotoCard from "./PhotoCard.jsx";
import Pagination from "./Pagination.jsx";
import {usePhotosContext} from "../Contexts/PhotosContext.jsx";

function PhotoList() {
    const {photos} = usePhotosContext()

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