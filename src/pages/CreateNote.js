import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
    <div style={{margin:'0px 20px'}}>
     
    <form onSubmit={handleSubmit}>
      <div style={{display:'flex', gap:"20px", borderBottom: "2px solid black"}}>
       
      <Link to="/" style={{textDecoration:'none'}}><div style={{fontSize: "40px", fontWeight: 'bolder', cursor: 'pointer', color: 'black', marginTop:'-10px'}} title='return to home page'
      className='back'>&lt;
        </div></Link>



      <input
        id='topic'
        type='text'
        name='header'
        placeholder='type topic here...'
        value={noteText.header}
        onChange={handleChange}
        required
      />
      </div>
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
        value={editingIndex !== null ? 'Update Note' : 'Save Note'}
        style={{
          fontSize: "20px",
          textTransform: "capitalize",
          borderRadius: "10px",
          padding: "5px",
          cursor: 'pointer',
          background: "transparent"
        }}
        className='submit'
      />
    </form>
    </div>
  );
};

export default CreateNote;
