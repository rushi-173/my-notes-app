import React from 'react';
import './Notes.css';

export default function Notes(props) {
  return (
    <div className="notes">
        { 
          props.NotesData.map((item) => {
            return(
              <div className="note">
                <h3>{item.title}</h3>
                <p>{item.note}</p>
              </div>
            );
          })
        }    
      </div>
  );
}
