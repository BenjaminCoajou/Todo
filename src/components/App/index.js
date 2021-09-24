import React from 'react';

import './App.css';
import NewTask from '../../containers/NewTask';
import Tasks from '../../containers/Tasks';
import Filter from '../Filter';

const App = () => (
    <div className="App m-auto">
      <NewTask/>
      <Filter/>
      <Tasks/>
    </div>
  );

export default App;
