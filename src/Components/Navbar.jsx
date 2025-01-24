import {Link} from "react-router";
import NavLink from "./NavLink.jsx";

function Navbar() {
    return (
        <nav className="bg-black sticky top-0 left-0 py-4 flex items-center px-60">
            {/* Logo on the left */}
            <div>
                <Link to={'/'}>
                    <img src="/logo-white.png" alt="Hubble Logo" className="w-16" />
                </Link>
            </div>

            {/* Links in the center */}
            <div className="flex-grow flex justify-center space-x-10">
                <NavLink route={'/photos'}>Photo&#39;s</NavLink>
                <NavLink route={'/photos/create'}>Add a photo</NavLink>
                <NavLink route={'/about'}>About Hubble</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;