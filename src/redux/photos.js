import {PHOTOS_LOAD_START, PHOTOS_LOAD_SUCCESS} from "./types";

const initPhoto = {
    photos: [],
    loading: false
}

export const photos = (state =initPhoto, action)=>{
    switch (action.type){
        case PHOTOS_LOAD_START:
            return {
                ...state,
                loading: true,
            }
        case PHOTOS_LOAD_SUCCESS:
            return {
                ...state,
                photos: action.payload,
                loading: false
            }
        default:
            return state
    }
}