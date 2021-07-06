import React from 'react';
import {useSelector} from "react-redux";
import Photo from "./Photo";
import {useParams} from "react-router-dom"

function Photos(props) {
    const photos = useSelector(state => state.photos.photos)
    const id = parseInt(useParams().id)
    console.log(id)

    const filteredPhotos = photos.filter(photo=>{
        if (photo.albumId===id){
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