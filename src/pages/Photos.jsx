import MainHeader from "../Components/MainHeader.jsx";
import PhotoList from "../Components/PhotoList.jsx";
import {Outlet} from "react-router";

function Photos() {
    return (
        <>
            <MainHeader>A collection of Hubble&#39;s best discoveries!</MainHeader>
            <PhotoList/>
            <Outlet/>
        </>
    );
}

export default Photos;