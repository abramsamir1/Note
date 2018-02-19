import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
NOTE_CREATE,
NOTE_UPDATE,
NOTE_FETCH,
NOTE_SAVE_SUCCESS,
ADD_PRESSED
} from './types';

export const noteUpdate = ({ prop, value }) => {
  return {
    type: NOTE_UPDATE,
    payload: { prop, value }
  };
};

export const noteCreate = ({ header, note }) => {
const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/notes`)
    .push({ header, note })
    .then(() => {
      dispatch({ type: NOTE_CREATE });
      Actions.list({ type: 'reset' });
    });
  };
};

export const notesFetch = () => {
const { currentUser } = firebase.auth();

return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/notes`)
    .on('value', snapshot => {
    dispatch({ type: NOTE_FETCH, payload: snapshot.val() });
    });
  };
};

export const noteSave = ({ header, note, uid }) => {
const { currentUser } = firebase.auth();
return (dispatch) => {
  firebase.database().ref(`/users/${currentUser.uid}/notes/${uid}`)
    .set({ header, note })
    .then(() => {
      dispatch({ type: NOTE_SAVE_SUCCESS });
      Actions.list({ type: 'reset' });
    });
  };
};


export const noteDelete = ({ uid }) => {

  const { currentUser } = firebase.auth();
  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/notes/${uid}`)
    .remove()
    .then(() => {
      Actions.list({ type: 'reset' });
    });
  };
};



export const addPressed = () => {
    return (dispatch) => {
        dispatch({ type: ADD_PRESSED });
    };
};
