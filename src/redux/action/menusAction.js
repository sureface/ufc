import {UPDATE_STATE} from "../typs/menusTypes"

export function updateState(data) {
    return {
        type: UPDATE_STATE,
        payload: data
    }
}