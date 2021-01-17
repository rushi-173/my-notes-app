import React from 'react';
import './Nav.css';

export default function Nav(props) {
  return (
    <div className="nav">
      <h1>{props.title}</h1>
    </div>
  );
}
