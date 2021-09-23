import React from 'react';

import './style.css';

const Filter = () => (
<ul class="nav nav-pills mb-4">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">All</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Do</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">To Do</a>
  </li>
</ul>
  );

export default Filter;