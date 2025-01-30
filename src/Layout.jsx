import {Outlet} from 'react-router'
import Navbar from "./Components/Navbar.jsx";

function Layout() {
    return (
        <div>
            <Navbar></Navbar>
            <main className="w-[1100px] max-w-full px-10 mx-auto">
                <Outlet/>
            </main>
            <footer></footer>
        </div>
    )
}

export default Layout;