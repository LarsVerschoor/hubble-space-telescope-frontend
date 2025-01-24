import {Outlet} from 'react-router'
import Navbar from "./Components/Navbar.jsx";

function Layout() {
    return (
        <div>
            <Navbar></Navbar>
            <main className="px-60">
                <Outlet/>
            </main>
            <footer></footer>
        </div>
    )
}

export default Layout;