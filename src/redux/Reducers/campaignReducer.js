import { CAMPAIGN } from '../Actions/types';


const campaignReducer = (state = { }, action) => {
    switch (action.type) {
        case CAMPAIGN : {
            return {
                ...state,
                campaign: action.payload
            }
        }
        default: {
              return state
        }
    }
}

export default campaignReducer;