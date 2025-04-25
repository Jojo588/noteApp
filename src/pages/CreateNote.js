import React from 'react';
import { useNavigate } from 'react-router-dom';

const CreateNote = ({ noteText, setNoteText, editingIndex, setEditingIndex, setNotes, notes }) => {
  const navigate = useNavigate();

  function handleChange(event) {
    setNoteText(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  }

  function updateLocalStorage(updatedNotes) {
    localStorage.setItem('savedNotes', JSON.stringify(updatedNotes));
  }

  function handleSubmit(event) {
    event.preventDefault();

    let updatedNotes;

    if (editingIndex !== null) {
      updatedNotes = notes.map((note, index) =>
        index === editingIndex ? noteText : note
      );
      setNotes(updatedNotes);
      setEditingIndex(null);
    } else {
      updatedNotes = [...notes, noteText];
      setNotes(updatedNotes);
    }

    updateLocalStorage(updatedNotes); 

    setNoteText({ header: "", note: "" });

    navigate('/');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        id='topic'
        type='text'
        name='header'
        placeholder='type topic here...'
        value={noteText.header}
        onChange={handleChange}
        required
      />
      <br />
      <textarea
        name="note"
        placeholder='type note here...'
        value={noteText.note}
        onChange={handleChange}
        autoCapitalize="sentences"
      ></textarea>
      <input
        type='submit'
        value={editingIndex !== null ? 'Update Note' : 'Add Note'}
        style={{
          fontSize: "20px",
          textTransform: "capitalize",
          borderRadius: "10px",
          padding: "5px",
          cursor: 'pointer',
          background: "transparent"
        }}
      />
    </form>
  );
};

export default CreateNote;
