import React from 'react';

import './App.css';
import NewTask from '../NewTask';
import Tasks from '../Tasks';
import Filter from '../Filter';

const App = () => (
    <div className="App m-auto">
      <NewTask/>
      <Filter/>
      <Tasks/>
    </div>
  );

export default App;
