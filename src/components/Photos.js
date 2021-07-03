import React from 'react';
import {useSelector} from "react-redux";
import Photo from "./Photo";

function Photos(props) {
    const photos = useSelector(state => state.photos.photos)
    const selectedAlbumId = useSelector(state => state.albums.selectedAlbumId);

    const filteredPhotos = photos.filter(photo=>{
        if (photo.albumId===selectedAlbumId){
            return true
        }
        return false
    })
    return (
        <div className="photos" >
                {
                    filteredPhotos.map(photo=>{
                        return(
                            <Photo photo={photo} key={photo.id}/>
                        )
                    })
                }
        </div>
    );
}

export default Photos;