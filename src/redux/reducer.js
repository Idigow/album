import {ALBUM_SELECT, ALBUMS_LOAD_START, ALBUMS_LOAD_SUCCESS, PHOTOS_LOAD_START, PHOTOS_LOAD_SUCCESS} from "./types";

const initialState = {
    photos: [],
    albums: [],
    albumsLoading: false,
    photosLoading: false,
    selectedAlbumId: null,
}


export const reducer =(state =initialState, action)=>{
    switch (action.type){

        case ALBUMS_LOAD_START:
            return{
                ...state,
                albumsLoading: true
            }
        case ALBUMS_LOAD_SUCCESS:
            return {
                ...state,
                albums: action.payload,
                albumsLoading: false
            }
        case ALBUM_SELECT:
            return {
                ...state,
                selectedAlbumId: action.payload
            }
        case PHOTOS_LOAD_START:
            return {
                ...state,
                photosLoading: true,
            }
        case PHOTOS_LOAD_SUCCESS:
            return {
                ...state,
                photos: action.payload,
                photosLoading: false
            }
        default:
            return {
                ...state
            }
    }
}