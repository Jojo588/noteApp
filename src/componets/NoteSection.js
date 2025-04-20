import React from 'react';
import { useNavigate } from 'react-router-dom';

const NoteSection = ({ notes, setNotes, setEditingIndex, setNoteText,filteredNotes }) => {
  const navigate = useNavigate();

  function handleDelete(index) {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  }

  function handleEdit(index) {
    setNoteText(notes[index]);
    setEditingIndex(index);
    navigate('/createnote');
  }

  return (
    <div className="noteContainer">

        {filteredNotes.length === 0 ? (
          <p>No notes found</p>
        ) : (
          filteredNotes.map((note, index) => (
            <div
              key={index}
              onClick={() => handleEdit(notes.indexOf(note))}
              className='noteSection'
              style={{ cursor: 'pointer', marginBottom: '10px' }}
            >
              <div>
              <h3 style={{textTransform:'capitalize'}}>{note.header}</h3>
              <p>{(note.note).length > 90 ? (note.note).substring(0, 90) + '...': (note.note)}
</p>
              </div>
              <div>
              <button
              style={{color:'red', padding:'3px',backgroundColor:'white', border:'1px solid', borderRadius:'5px',cursor:'pointer' }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(notes.indexOf(note));
                }}
              >
                Delete
              </button>
              </div>
            </div>
          ))
        )}
    </div>
  );
};

export default NoteSection;
