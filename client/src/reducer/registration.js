import services from '../services';

export const USER_REGISTERED = 'USER_REGISTERED';
export const USER_REGISTRATION_FAILED = 'USER_REGISTRATION_FAILED';
export const USER_REGISTRATION_RESET = 'USER_REGISTRATION_RESET';


const initialState = {
    message: null,    
    error: null
};


// Action dispatcher.
const userRegistered = (message) => {
    return {
      type: USER_REGISTERED,
      message: message
    }
}
  
const registrationFailure = (error) => {
    return {
        type: USER_REGISTRATION_FAILED,
        error: error
    }
}

const registrationReset = () => {
    return {
        type: USER_REGISTRATION_RESET
    }
}

// Reducer
function registration (state = initialState , action) {
    switch(action.type){
        case USER_REGISTERED:
            return {
                ...state,
                message: action.message
            }
        case USER_REGISTRATION_FAILED:
            return {
                ...state,
                error: action.error
            }
        case USER_REGISTRATION_RESET:
            return {
                ...initialState
            }
        default:
            return state;
    }
}

export const register = body =>  async (dispatch) => {
    try {
        const response = await services.register(body);
        dispatch(userRegistered(response.message));
    } catch (err) {
        dispatch(registrationFailure(err.message));
    }
}

export const registerReset = () => dispatch => {
    dispatch(registrationReset());
}

export default registration;