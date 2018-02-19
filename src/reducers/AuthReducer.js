import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  SIGN_UP_FAIL,
  SIGN_UP_SUCCESS,
  SIGN_USER,
  LOGIN_USER,
  LOGIN_FAIL,
  LOGIN_SUCCESS
} from '../actions/types';


const INITIAL_STATE = {
  email: '',
  password: '',
  loadingOne: false,
  loadingTwo: false,
  error: '',
  user: null
};

export default(state = INITIAL_STATE, action) => {
switch (action.type) {
  case EMAIL_CHANGED:
    return { ...state, email: action.payload, error: '' };
  case PASSWORD_CHANGED:
    return { ...state, password: action.payload, error: '' };
  case SIGN_UP_SUCCESS:
    return { ...state, ...INITIAL_STATE, user: action.payload };
  case SIGN_UP_FAIL:
    return { ...state, error: 'Sign Up Failed', password: '', loadingOne: false };
  case SIGN_USER:
    return { ...state, loadingOne: true, error: '' };
  case LOGIN_USER:
    return { ...state, loadingTwo: true, error: '' };
  case LOGIN_SUCCESS:
    return { ...state, ...INITIAL_STATE, error: '', user: action.payload };
  case LOGIN_FAIL:
    return { ...state, error: 'Sign In Failed', loadingTwo: false };
  default:
    return state;
  }
};
