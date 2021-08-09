import {actionTypes} from '../actionTypes';


const initialState = {
    coinsList : []
}

export const coinReducer = (state = initialState,action)=>{
    switch(action.type){
        case actionTypes.GET_ALL_COINS:
            return{
                ...state,

            }
        default:
            return state
    }
}