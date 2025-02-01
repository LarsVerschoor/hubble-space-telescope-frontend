import {Link} from "react-router";

function paginationButton({page, limit, current, exists, children}) {
    const classes = `bg-black text-white px-3 py-2 rounded ${!exists && 'bg-gray-500 cursor-default'} ${exists && 'hover:bg-gray-800'} ${current && 'underline'}`

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