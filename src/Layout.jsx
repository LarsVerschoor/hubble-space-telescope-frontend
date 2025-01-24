import {Link, Outlet} from 'react-router'

function Layout() {
    return (
        <div>
            <nav>
                <Link to={'/'}>Hubble logo</Link>
                <Link to={'/photos'}>Photo&#39;s</Link>
                <Link to={'/photos/create'}>Add a photo</Link>
                <Link to={'/about'}>About hubble</Link>
            </nav>
            <main>
                <Outlet/>
            </main>
            <footer></footer>
        </div>
    )
}

export default Layout;