import services from '../services'
import jwt_decode from 'jwt-decode'
import setAuthToken  from '../utils/setAuthToken'

export const LOGGEDIN_SUCCESSFULLY = 'LOGGEDIN_SUCESSFULLY'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGIN_RESET = 'LOGIN_RESET'

const initialState = {
    token : {},
    authenticated: false,   
    error: null
};

//Actions
const userLoggedIn = token => {
    return {
        type:LOGGEDIN_SUCCESSFULLY ,
        token: token
    }
}

const userLoginFailure = error => {
    return {
        tyoe:LOGIN_FAILURE,
        error: error
        
    }
}

const userLoginReset = () => {
    return {
        type:LOGIN_RESET
    }
}

function login (state = initialState , action) {
    switch(action.type){
        case LOGGEDIN_SUCCESSFULLY:
            return{
                ...state,
                token: action.token,
                authenticated: true
            }
        
        case LOGIN_FAILURE:
            return{
                error: action.error,
                authenticated: false
            }

        case LOGIN_RESET:
            return{
                ...initialState
            }
        default:
            return state;
    }
}

export const userlogin = body =>  async (dispatch) => {
    try {
        const response = await services.login(body);
        const { token } = response.data;

        localStorage.setItem('jwtToken' , token )
        setAuthToken(token)

        const decoded = jwt_decode(token)

        dispatch(userLoggedIn(decoded));
    } catch (err) {
        dispatch(userLoginFailure(err.message));
    }
}

export const loginReset = () => dispatch => {
    dispatch(userLoginReset());
}


export default login

