import {
  NOTE_UPDATE,
  NOTE_CREATE,
  NOTE_SAVE_SUCCESS,
  ADD_PRESSED
} from '../actions/types';

const INITIAL_STATE = {
  header: '',
  note: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NOTE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case NOTE_CREATE:
      return INITIAL_STATE;
    case NOTE_SAVE_SUCCESS:
      return INITIAL_STATE;
    case ADD_PRESSED:
      return INITIAL_STATE;
    default:
      return state;

  }
};
