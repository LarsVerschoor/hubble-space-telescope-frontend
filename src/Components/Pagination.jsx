import PaginationButton from "./PaginationButton.jsx";
import {usePhotosContext} from "../Contexts/PhotosContext.jsx";

function Pagination () {
    const {pagination, page, limit} = usePhotosContext();
    if (!pagination || !page || !limit) return null;

    const {currentPage, totalPages} = pagination;

    if (currentPage < 1 || currentPage > totalPages) return null;

    const pagesToDisplay = [];

    if (totalPages < 3) {
        pagesToDisplay.push(...Array.from({length: totalPages}, (value, i) => i + 1));
    } else if (currentPage === 1) {
        pagesToDisplay.push(...[1, 2, 3]);
    } else if (currentPage === totalPages) {
        pagesToDisplay.push(...[currentPage - 2, currentPage - 1, currentPage]);
    } else {
        pagesToDisplay.push(...[currentPage - 1, currentPage, currentPage + 1])
    }

    return (
        <div className="mt-8 flex justify-between items-center">
            <PaginationButton page={page - 1} current={false} exists={!!pagination?._links?.previous}>Back</PaginationButton>
            <div className="flex gap-3">
                <div className={`${pagesToDisplay[0] !== 1 ? 'text-black' : 'text-transparent select-none'}`}>...</div>
                {

                    pagesToDisplay.map((page) => (
                        <PaginationButton page={page} key={page} current={page === currentPage} exists={true}>{page}</PaginationButton>
                    ))
                }
                <div className={`${pagesToDisplay.length === 3 && pagesToDisplay[2] !== totalPages ? 'text-black' : 'text-transparent select-none'}`}>...</div>
            </div>
            <PaginationButton page={page + 1} current={false} exists={!!pagination?._links?.next}>Next</PaginationButton>
        </div>
    );
}

export default Pagination;