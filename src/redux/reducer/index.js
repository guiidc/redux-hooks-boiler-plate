import { combineReducers } from "redux";

import { ADD_TASK, REMOVE_TASK } from "../actions";

const INITIAL_STATE = [];

const taskReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TASK:
            return [...state, action.payload];
        case REMOVE_TASK:
            const tempState = [...state];
            tempState.splice(action.payload, 1);
            return [...tempState];
        default:
            return state;
    }
}

const rootReducer = combineReducers({ taskReducer });
export default rootReducer;