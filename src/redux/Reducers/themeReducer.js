import { THEME } from '../Actions/types';


const themeReducer = (state = { }, action) => {
    switch (action.type) {
        case THEME : {
            return {
                ...state,
                darkTheme: action.payload
            }
        }
        default: {
              return state
        }
    }
}

export default themeReducer;