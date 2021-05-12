import { ADD_PROFILE } from '../Actions/types';

// const initialState = {
//   placeName: '',
//   places: []
// };


//##### ESTE BLOQUE CONCATENA LO QUE LE PASES EN EL ACTION Y NECESITA TENER DECLARADO LA CONSTANTE DE ARRIBA

// const placeReducer = (state = initialState, action) => {
//   switch(action.type) {
//     case ADD_PLACE:
//       return {
//         ...state,
//         places: state.places.concat({
//           key: Math.random(),
//           value: action.payload
//         })
//       };
//     default:
//       return state;
//   }
// }

const profileReducer = (state = { }, action) => {
    switch (action.type) {
        case ADD_PROFILE : {
            return {
                ...state,
                profile: action.payload
            }
        }
        default: {
              return state
        }
    }
}

export default profileReducer;