export const SUBMIT_TASK = 'SUBMIT_TASK';
export const INPUT_CHANGE = 'INPUT_CHANGE';

export const submitTask = (payload) => ({
    type: SUBMIT_TASK,
    payload,
})

export const inputChange = (payload) => ({
    type: INPUT_CHANGE,
    payload,
});