import { combineReducers } from 'redux';
import usersReducer from './users_reducer';

// Keeps track of all of our relational data for Kicker.
// Combine our reducers that handle relational data

const entitiesReducer = combineReducers({
    usersReducer: usersReducer
});

export default entitiesReducer;