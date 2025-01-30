import {Link} from "react-router";

function NavLink({route, children}) {
    return (
        <Link className="text-white text-center" to={route}>{ children }</Link>
    )
}

export default NavLink;