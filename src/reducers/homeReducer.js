import { GET_MONSTER, FETCH_SUCCESS, FETCH_FAIL } from "../actions/homeActions";

export const initialState = {
   monster: {},
    isFetching: false,
    error: ''
}

 const reducer = ( state = initialState, action ) => {
    switch(action.type){
        case GET_MONSTER:
            return ({
                ...state,
                monster: action.payload,
                isFetching: true
            })
        case FETCH_SUCCESS:
            return ({
                ...state,
                monster: action.payload,
                isFetching: false
            })
        case FETCH_FAIL:
            return ({
                ...state,
                isFetching: false,
                error: action.payload                
            })
        default:
            return state;
    }
}

export default reducer;