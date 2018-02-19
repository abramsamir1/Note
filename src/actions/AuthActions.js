import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  SIGN_USER,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGIN_USER
} from './types';


export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
    };
};

export const passwordChanged = (text) => {
  return {
  type: PASSWORD_CHANGED,
  payload: text
    };
};

export const signUp = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: SIGN_USER }); //used for the spinner
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => SignUserSuccess(dispatch, user))
      .catch(() => SignUserFail(dispatch));
  };
};

const SignUserSuccess = (dispatch, user) => {
  dispatch({
    type: SIGN_UP_SUCCESS,
    payload: user
  });
};

const SignUserFail = (dispatch) => {
  dispatch({ type: SIGN_UP_FAIL });
};

export const logIn = ({ email, password }) => {
return (dispatch) => {
  dispatch({ type: LOGIN_USER });
  firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => loginUserFail(dispatch));
    };
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_SUCCESS,
    payload: user
  });
  Actions.main();
};
