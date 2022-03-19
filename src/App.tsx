import React, { ChangeEvent, useState } from 'react';

import './App.css';
import { Button, Input } from './components';
import useNotes from './hooks/useNotes';

function App() {
  const { notes, addNote, removeNote } = useNotes();
  const [note, setNote] = useState<string>('');

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  const onCreateNote = () => {
    addNote(note);
    setNote('');
  };

  const onDeleteNote = (index: number) => {
    removeNote(index);
  };

  const Note = (note: string, index: number) => (
    <div key={index} className="note">
      <h4>Note {index + 1}:</h4>
      <p>{note}</p>
      <Button onClick={() => onDeleteNote(index)}>Delete Note</Button>
    </div>
  );

  const Notes = () => {
    if (notes?.length > 0) {
      return <div className="notes">{notes.map(Note)}</div>;
    }

    return <p>No notes yet.</p>;
  };

  return (
    <div className="app">
      <h1>Notes</h1>
      <div>
        <Input name="note" label="Note" value={note} onChange={onChangeInput} />
        <Button onClick={onCreateNote}>Create Note</Button>
      </div>
      <Notes />
    </div>
  );
}

export default App;
