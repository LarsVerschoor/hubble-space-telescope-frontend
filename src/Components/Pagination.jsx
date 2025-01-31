import PaginationButton from "./PaginationButton.jsx";

function Pagination ({pagination, page, limit}) {
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

    console.log(pagesToDisplay)

    return (
        <div className="mt-8 flex justify-between items-center">
            <PaginationButton page={page - 1} limit={limit} current={false} exists={!!pagination?._links?.previous}>Previous</PaginationButton>
            <div className="flex gap-3">
            {
                pagesToDisplay.map((page) => (
                    <PaginationButton page={page} limit={limit} key={page} current={page === currentPage} exists={true}>{page}</PaginationButton>
                ))
            }
            </div>
            <PaginationButton page={page + 1} limit={limit} current={false} exists={!!pagination?._links?.next}>Next</PaginationButton>
        </div>
    );
}

export default Pagination;