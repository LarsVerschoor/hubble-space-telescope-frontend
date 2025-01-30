import {Link} from "react-router";
import NavLink from "./NavLink.jsx";

function Navbar() {
    return (
        <nav className="bg-black sticky top-0 left-0 py-4">
            <div className="flex flex-col items-center px-10 gap-5 md:gap-0 md:flex-row w-full max-w-[1100px] mx-auto">
                <div>
                    <Link to={'/'}>
                        <img src="/logo-white.png" alt="Hubble Logo" className="w-16" />
                    </Link>
                </div>
                <div className="flex-grow flex justify-center space-x-10">
                    <NavLink route={'/photos'}>Photo&#39;s</NavLink>
                    <NavLink route={'/photos/create'}>Add a photo</NavLink>
                    <NavLink route={'/about'}>About Hubble</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;