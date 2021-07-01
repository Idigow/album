import React from 'react';
import {useDispatch} from "react-redux";
import {selectAlbum} from "../redux/actions";

function Album(props) {
    const dispatch = useDispatch()
    const handleSelectAlbum=()=>{
        dispatch(selectAlbum(props.album.id))
    }
    return (
        <div>
            <li onClick={handleSelectAlbum} className="album">
                {props.album.title}
            </li>
        </div>
    );
}

export default Album;