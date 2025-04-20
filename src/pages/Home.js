import React from 'react';
import Header from '../componets/Header';
import NoteSection from '../componets/NoteSection';

const Home = ({ notes, setNotes, setNoteText, setEditingIndex, searchTerm, setSearchTerm, filteredNotes }) => {
  return (
    <>
      <Header
        notes={notes}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <NoteSection
        filteredNotes ={filteredNotes}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        notes={notes}
        setNotes={setNotes}
        setNoteText={setNoteText}
        setEditingIndex={setEditingIndex}
      />
    </>
  );
};

export default Home;
