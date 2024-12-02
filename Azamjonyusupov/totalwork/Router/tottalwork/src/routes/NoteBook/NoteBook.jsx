import React, { useState } from 'react';

export function NoteBook() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState('');
  const [noteTitle, setNoteTitle] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddNote = () => {
    if (noteTitle.trim() === '') return;
    setNotes([...notes, { title: noteTitle, content: currentNote }]);
    setNoteTitle('');
    setCurrentNote('');
  };

  const handleEditNote = (index) => {
    const note = notes[index];
    setNoteTitle(note.title);
    setCurrentNote(note.content);
    setNotes(notes.filter((_, i) => i !== index)); 
  };

  const handleDeleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
    setCurrentNote('');
    setNoteTitle('');
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredNotes = notes.filter(note => 
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Блокнот</h1>
      <div className="container">
        <div className="sidebar">
          <input 
            type="text" 
            placeholder="Поиск..." 
            value={searchTerm} 
            onChange={handleSearch} 
          />
          <ul>
            {filteredNotes.map((note, index) => (
              <li key={index}>
                <button onClick={() => handleEditNote(index)}>
                  {note.title}
                </button>
                <button onClick={() => handleDeleteNote(index)}>Удалить</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="editor">
          <input 
            type="text" 
            placeholder="Название записи" 
            value={noteTitle} 
            onChange={(e) => setNoteTitle(e.target.value)} 
          />
          <textarea 
            rows="10" 
            value={currentNote} 
            onChange={(e) => setCurrentNote(e.target.value)} 
          />
          <button onClick={handleAddNote}>Сохранить запись</button>
        </div>
      </div>
    </div>
  );
}
