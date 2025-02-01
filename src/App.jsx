import {createBrowserRouter, RouterProvider} from "react-router";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import Photos from "./pages/Photos.jsx";
import AddPhoto from "./pages/AddPhoto.jsx";
import About from "./pages/About.jsx";
import PhotoModal from "./Components/PhotoModal.jsx";
import {PhotoListProvider} from "./Contexts/PhotosContext.jsx";
import EditPhoto from "./pages/EditPhoto.jsx";
import NotFound from "./pages/NotFound.jsx";

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
                element: (
                    <PhotoListProvider>
                        <Photos/>
                    </PhotoListProvider>
                ),
                children: [
                    { path: ':id', element: <PhotoModal/> }
                ]
            },
            {
                path: '/photos/create',
                element: <AddPhoto/>
            },
            {
                path: '/photos/:id/edit',
                element: <EditPhoto/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '*',
                element: <NotFound/>
            }
        ]
    }
]);

function App() {
    return (
        <RouterProvider router={router}/>
    );
}

export default App
