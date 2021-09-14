import {UPDATE_STATE} from "../typs/menusTypes";

const initialState = {
    open: false,
}

export const menusReducer = (state = initialState, action) => {
    if (action.type === UPDATE_STATE){
        return {
            ...state,
            ...action.payload
        }
    }

    return state

};