import {tagsAPI} from '../API/api';

// constants
const SET_TAGS_DATA = 'one-tag/tags/SET_TAGS_DATA'

// randomId

function randomId(length) {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');

    if (! length) {
        length = Math.floor(Math.random() * chars.length);
    }

    let id = '';
    for (let i = 0; i < length; i++) {
        id += chars[Math.floor(Math.random() * chars.length)];
    }
    return id;
}


// state
let initialState = {
    tags: [],
}

// cases
const tagsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TAGS_DATA:
            return {
                ...state,
                tags: action.data
            }
        default:
            return state

    }
}

// actionCreators
export const setTagsData = (data) => ({type: SET_TAGS_DATA, data})


// thunks
export const getAllTags = () => async (dispatch) => {
    try {
        const data = await tagsAPI.getAllTags()
        dispatch(setTagsData(data.data))
    } catch (e) {
        console.log('Ошибка ', e)
    }
}
export const changeRateOnTag = (id, newRate) => async (dispatch) => {
    try {
        await tagsAPI.changeRate(id, newRate)
        dispatch(getAllTags())
    } catch (e) {
        console.log('Ошибка ', e)
    }
}
export const addTag = (name) => async (dispatch) => {
    try {
        await tagsAPI.addNewTag(randomId(4), name)
        dispatch(getAllTags())
    } catch (e) {
        console.log('Ошибка ', e)
    }
}

export default tagsReducer