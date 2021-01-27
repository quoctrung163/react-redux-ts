import { ADD_NOTE } from './type';

import { Action } from './interface';

export const addNote = (note: string): Action => ({
    type: ADD_NOTE,
    payload: note
});
