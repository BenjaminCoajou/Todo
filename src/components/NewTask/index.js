import React from 'react';

import './style.css';

const NewTask = () => (
    <div className="NewTask mb-5">
      <h1 className="my-4">New Task</h1>
      <div className="input-group mb-5">
        <input type="text" className="form-control" placeholder="Add a Task" aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <button className="btn btn-secondary" type="button" id="button-addon2">Add</button>
       </div>
    </div>
  );

export default NewTask;