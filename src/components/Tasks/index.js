import React from 'react';

import './style.css';

const Tasks = () => {
  let date = new Date()

  return (
    <div className="Tasks">
      <h2 className="mb-4">My Tasks</h2>
      <div className="card flex-row align-items-baseline">
        <div className="card-body">
          Do something interesting !!
        </div>

        <div className="card-button d-flex align-self-center">
        <button type="button" className="btn btn-success mx-1 d-flex align-items-center"><span className="material-icons">check_circle</span></button>
        <button type="button" className="btn btn-primary mx-1 d-flex align-items-center"><span className="material-icons">edit</span></button>
        <button type="button" className="btn btn-danger mx-1 d-flex align-items-center"><span className="material-icons">delete</span></button>
        </div>
      </div>
        <div className="mb-4 ms-1">
          <p>le {('0'+date.getDate()).slice(-2)+"/"+('0'+(date.getMonth()+1)).slice(-2)+"/"+date.getFullYear()}</p>
        </div>
    </div>
  );
}
export default Tasks;