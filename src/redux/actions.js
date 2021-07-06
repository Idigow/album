import { ALBUMS_LOAD_START, ALBUMS_LOAD_SUCCESS, PHOTOS_LOAD_START, PHOTOS_LOAD_SUCCESS} from "./types";

export const loadAlbums=()=>{
    return (dispatch)=>{
        dispatch({
            type: ALBUMS_LOAD_START
        })
        fetch("https://jsonplaceholder.typicode.com/albums/?_limit=10")
            .then(response=>response.json())
            .then(json=>{
                dispatch({
                    type: ALBUMS_LOAD_SUCCESS,
                    payload: json
                })
            })
    }
}

export const loadPhotos=()=>{
    return (dispatch)=>{
        dispatch({
            type: PHOTOS_LOAD_START
        })
        fetch("https://jsonplaceholder.typicode.com/photos/?_limit=500")
            .then(response=>response.json())
            .then(json=>{
                dispatch({
                    type: PHOTOS_LOAD_SUCCESS,
                    payload: json
                })
            })
    }
}

