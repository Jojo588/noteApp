import React from 'react';
import { useNavigate } from 'react-router-dom'; // import useNavigate

const CreateNote = ({ noteText, setNoteText, editingIndex, setEditingIndex, setNotes, notes }) => {
  const navigate = useNavigate(); // initialize navigate function

  function handleChange(event) {
    setNoteText(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  }
  function handleSubmit(event) {
    event.preventDefault();

    if (editingIndex !== null) {
      const updatedNotes = notes.map((note, index) =>
        index === editingIndex ? noteText : note
      );
      setNotes(updatedNotes);
      setEditingIndex(null);
    } else {
      setNotes(prevNotes => [...prevNotes, noteText]);
    }

    setNoteText({ header: "", note: "" });

    navigate('/'); // navigate to home page
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
        autocapitalize="sentences"
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
