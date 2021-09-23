import React from 'react';

import './App.css';
import NewTask from '../NewTask';
import Tasks from '../Tasks';

const App = () => (
    <div className="App">
      <NewTask/>
      <Tasks/>
    </div>
  );

export default App;
