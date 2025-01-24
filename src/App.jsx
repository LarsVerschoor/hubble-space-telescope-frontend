import {createBrowserRouter, RouterProvider} from "react-router";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import Photos from "./pages/Photos.jsx";
import AddPhoto from "./pages/AddPhoto.jsx";
import About from "./pages/About.jsx";
import PhotoDetail from "./pages/PhotoDetail.jsx";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/photos',
                element: <Photos/>
            },
            {   path: '/photos/:id',
                element: <PhotoDetail/>
            },
            {
                path: '/photos/create',
                element: <AddPhoto/>
            },
            {
                path: '/about',
                element: <About/>
            }
        ]
    }
]);

function App() {
    return <RouterProvider router={router}/>
}

export default App
