import React, {useEffect} from 'react';
import Albums from "./Albums";
import Photos from "./Photos";
import {useDispatch, useSelector} from "react-redux";
import {loadAlbums, loadPhotos} from "../redux/actions";

function App(props) {
    const dispatch=useDispatch()

    const loadingAlbums = useSelector(state=> state.loadingAlbums)
    const loadingPhotos = useSelector(state=> state.loadingPhotos)

    useEffect(()=>{
        dispatch(loadAlbums())
        dispatch(loadPhotos())
    },[])


    if (loadingAlbums||loadingPhotos){
        return (
            <div>
                идет загрузка.....
            </div>
        )
    }



    return (
        <div className="container">
            <Albums/>
            <Photos/>
        </div>
    );
}

export default App;