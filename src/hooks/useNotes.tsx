import { useState } from 'react';

const useNotes = () => {
  const [notes, setNotes] = useState<string[]>([]);

  const addNote = (note: string) => {
    if (note !== '') {
      const newArray = notes;
      newArray.push(note);
      setNotes(newArray);
    }
  };

  const removeNote = (index: number) => {
    setNotes((prevState) => {
      return prevState.filter((_note, _index) => _index !== index);
    });
  };

  return { notes, addNote, removeNote };
};

export default useNotes;
