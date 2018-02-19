import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import NoteFormReducer from './NoteFormReducer';
import NoteReducer from './NoteReducer';

export default combineReducers({
auth: AuthReducer,
noteForm: NoteFormReducer,
notes: NoteReducer
});
