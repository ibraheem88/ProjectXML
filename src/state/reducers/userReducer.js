import { SET_USER_INFO} from '../actions/userActions';
import { SET_First_Time } from '../actions/userActions';

const initialState = {
  user: {token: null},
  firstTime: true
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    // case SET_TOKEN_ID: {
    //   return {
    //     ...state,
    //     user: {
    //       ...state.user,
    //       token: action.payload.token,
    //       lastLogin: moment(new Date()),
    //       userId: action.payload.userId,
    //     },
    //   };
    // }
    case SET_USER_INFO: {
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    }
    case SET_First_Time: {
      return {
        ...state,
        firstTime: action.payload
      };
    }
    default:
      return state;
  }
}

export default userReducer;