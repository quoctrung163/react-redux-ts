import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { NotesState } from './interface';
import { addNote } from './action';

import {NewNoteInput } from './NewNoteInput';

function App() {
    const notes = useSelector<NotesState, NotesState['notes']>(
        (state) => state.notes
    );
    const dispatch = useDispatch();

    const onAddNote = (note: string) => {
        dispatch(addNote(note));
    };

    return (
        <>
            <NewNoteInput
                addNote={onAddNote}
            />
            <hr />
            <ul>
                {notes.map(note => {
                    return <li
                        key={note}
                    >{note}</li>
                })}
            </ul>
        </>    
    );
}

export default App;
