import { AVATAR } from '../Actions/types';


const avatarReducer = (state = { }, action) => {
    switch (action.type) {
        case AVATAR : {
            return {
                ...state,
                setAvatar: action.payload
            }
        }
        default: {
              return state
        }
    }
}

export default avatarReducer;