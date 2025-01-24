import {Link} from "react-router";

function NavLink({route, children}) {
    return (
        <Link className="text-white" to={route}>{ children }</Link>
    )
}

export default NavLink;