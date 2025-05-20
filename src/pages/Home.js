import React from 'react';
import Header from '../componets/Header';
import NoteSection from '../componets/NoteSection';
import { Link } from 'react-router-dom';

const Home = ({ notes, setNotes, setNoteText, setEditingIndex, searchTerm, setSearchTerm, filteredNotes }) => {
  return (
    <>
      <Header
        notes={notes}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <div style={{marginTop:'30px'}}/>

      <div
        style={{padding:'20px'
        }}>

        <Link
        to="/createnote" >
        <button onClick={()=>{setNoteText({ header: "", note: "" });}} style={{marginTop:"20px", fontSize:"20px", textTransform:"capitalize", borderRadius:"10px", padding: "5px", cursor: 'pointer', background:"transparent"}} title='create new note'>
            + new note  
        </button>
        </Link>
        
      <NoteSection
        filteredNotes ={filteredNotes}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        notes={notes}
        setNotes={setNotes}
        setNoteText={setNoteText}
        setEditingIndex={setEditingIndex}
      />
        
      </div>
    </>
  );
};

export default Home;
