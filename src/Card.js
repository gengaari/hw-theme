import React, { useState } from 'react';
import './Card.css';

export function Card({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="card" onClick={() => setOpen(!open)}>
      <h3>{title}</h3>
      {open && <div className="card-content">{children}</div>}
    </div>
  );
}
