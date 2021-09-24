import React from 'react';

import './style.css';

const Filter = () => (
<ul className="nav nav-pills mb-4">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">All</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Do</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">To Do</a>
  </li>
</ul>
  );

export default Filter;