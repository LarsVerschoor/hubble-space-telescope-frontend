import MainHeader from "../Components/MainHeader.jsx";
import {Link} from "react-router";

function NotFound() {
    return (
        <div className="flex flex-col items-center gap-3">
            <MainHeader>404, Not Found</MainHeader>
            <Link to={'/'} className="bg-black text-white p-4 inline-block hover:bg-gray-800">Go back to the homepage</Link>
        </div>
    )
}

export default NotFound;