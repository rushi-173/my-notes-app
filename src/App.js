import './App.css';
import Nav from './components/Nav';
import {React, useState} from 'react';
import Notes from './components/Notes';
let Data = require('./data');

const fs = require('fs');

function App() {
  let [ntitle, updateNtitle] = useState();
  let [nnote, updateNnote] = useState();
  let [NotesData, updateNotesData] =useState(Data);
  
  console.log(NotesData);
  function updateNote(e) {
    updateNnote(e.target.value);
  }
  function updateTitle(e) {
    updateNtitle(e.target.value);
  }
  function Add(){
    updateNotesData([...NotesData, { "title": nnote, "note": ntitle}]);
    updateNtitle("");
    updateNnote("");
    fs.writeFile('./data.json', JSON.stringify(NotesData), err => {
      if (err) throw err;
    });
  }
  return (
    <div className="App">
      <Nav title="My Notes"></Nav>
      <div className="input-div">
        <h3>Create A Note</h3>
        <form>
            <label>Note Title :</label>
            <input type="text" id="ntitle" value={ntitle} onChange={updateTitle}></input>
            <label>Note :</label>
            <textarea id="note" value={nnote} onChange={updateNote}></textarea>
            <button onClick={Add}>Add Note+</button>
        </form>   
      </div>   
      <Notes NotesData={NotesData}/>
    </div>
  );
}

export default App;
