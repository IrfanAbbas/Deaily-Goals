import React from 'react';

export default function Task({ Title, Description, onDelete }){
  return (
    <div className="task">
      <div className="task__title">
        <h3>{Title}</h3>
        <span>{Description}</span>
      </div>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}
