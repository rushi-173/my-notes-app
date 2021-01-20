import './App.css';
import Nav from './components/Nav';
import {React, useState} from 'react';
let Data = [
  {
    title: "Some Title 1",
    note: "Id exercitation occaecat in officia ipsum Lorem esse nisi. Laborum qui nulla proident occaecat sit sint est anim quis amet irure dolore. Et ea proident enim amet eu aliquip tempor adipisicing ipsum fugiat ipsum deserunt mollit et. Non exercitation non voluptate anim nisi cupidatat voluptate adipisicing labore."
  },
  {
    title: "Some Title 2",
    note: "Id exercitation occaecat in officia ipsum Lorem esse nisi. Laborum qui nulla proident occaecat sit sint est anim quis amet irure dolore. Et ea proident enim amet eu aliquip tempor adipisicing ipsum fugiat ipsum deserunt mollit et. Non exercitation non voluptate anim nisi cupidatat voluptate adipisicing labore."
  }
]

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
    updateNotesData([...NotesData, { title: nnote, note: ntitle}]);
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
      <div className="notes-container">
        { 
          NotesData.map((item) => {
            return(
              <div className="note">
                <h3>{item.title}</h3>
                <p>{item.note}</p>
              </div>
            );
          })
        }
        

    
      </div>
    </div>
  );
}

export default App;
