import React, { useState, useEffect } from 'react';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import CreateNote from './pages/CreateNote.js';
import Home from './pages/Home.js';
import NoPage from './pages/NoPage.js'

const App = () => {
  const [noteText, setNoteText] = useState(
    {
       header: "", note: "" 
    }
  );
  const [editingIndex, setEditingIndex] = useState(null);
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  // Filter notes by header
  const filteredNotes = notes.filter(note =>
    note.header.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  useEffect(() => {
    const saved = localStorage.getItem('savedNotes');
    if (saved) {
      setNotes(JSON.parse(saved));
    }
  }, []);

  return (
    <HashRouter>
      <Routes>
          <Route
            index
            element={
              <Home
                filteredNotes ={filteredNotes}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                notes={notes}
                setNotes={setNotes}
                noteText={noteText}
                setNoteText={setNoteText}
                editingIndex={editingIndex}
                setEditingIndex={setEditingIndex}
              />
            }
          />
          <Route
            path='createnote'
            element={
              <CreateNote
                noteText={noteText}
                setNoteText={setNoteText}
                editingIndex={editingIndex}
                setEditingIndex={setEditingIndex}
                notes={notes}
                setNotes={setNotes}
              />
            }
          />
          <Route path='*' element={<NoPage />}/>
      </Routes>
    </HashRouter>
  );
};

export default App;
