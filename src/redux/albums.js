import {ALBUM_SELECT, ALBUMS_LOAD_START, ALBUMS_LOAD_SUCCESS} from "./types";

const initAlbums = {
    albums: [],
    loading: false,
    selectedAlbumId: null,
}


export const albums =(state =initAlbums, action)=>{
    switch (action.type){

        case ALBUMS_LOAD_START:
            return{
                ...state,
                loading: true
            }
        case ALBUMS_LOAD_SUCCESS:
            return {
                ...state,
                albums: action.payload,
                loading: false
            }
        case ALBUM_SELECT:
            return {
                ...state,
                selectedAlbumId: action.payload
            }
        default:
            return {
                ...state
            }
    }
}