export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

export const addTaskAction = (payload) => ({
    type: ADD_TASK,
    payload,
})

export const removeTaskAction = (payload) => ({
    type: REMOVE_TASK,
    payload,
})