import React from 'react';
import './Notes.css';

export default function Notes(props) {
  return (
    <div className="nav">
      <h1>{props.title}</h1>
    </div>
  );
}
