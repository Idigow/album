import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectAlbum} from "../redux/actions";

function Album(props) {
    const dispatch = useDispatch()
    const selectedAlbumId =useSelector(state => state.albums.selectedAlbumId)
    const handleSelectAlbum=()=>{
        dispatch(selectAlbum(props.album.id))
    }
    const selected = props.album.id === selectedAlbumId

    return (
        <div>
            <li onClick={handleSelectAlbum} className={selected ? "album selected": "album" }>
                {props.album.title}
            </li>
        </div>
    );
}

export default Album;