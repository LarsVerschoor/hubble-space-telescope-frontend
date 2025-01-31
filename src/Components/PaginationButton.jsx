import {Link} from "react-router";

function paginationButton({page, limit, current, exists, children}) {
    const classes = `bg-black ${!exists && 'bg-gray-500'} text-white px-2 py-1 ${current && 'underline'}`

    if (!exists) {
        return (
            <div className={classes}>{children}</div>
        );
    }

    return (
        <Link to={`/photos?page=${page}&limit=${limit}`} className={classes}>{children}</Link>
    )
}

export default paginationButton;