import React from 'react';

import './style.css';

const Tasks = ({ todo, inputClick }) => {
  let date = new Date()

  return (
    <div className="Tasks">
      <h2 className="mb-4">My Tasks</h2>
      {todo ? todo.map((todotask) => (
        <div>
          {
            todotask.status ? <div>
              <div className="card flex-row align-items-baseline" key={todotask.content}>

                <div className="card-body">
                  {todotask.content}
                </div>

                <div className="card-button d-flex align-self-center">
                  <button type="button" className="btn btn-success mx-1 d-flex align-items-center" onClick={(evt) => { evt.preventDefault(); inputClick(todotask.status = 0) }}><span className="material-icons">check_circle</span></button>
                  <button type="button" className="btn btn-primary mx-1 d-flex align-items-center"><span className="material-icons">edit</span></button>
                  <button type="button" className="btn btn-danger mx-1 d-flex align-items-center"><span className="material-icons">delete</span></button>
                </div>

              </div>
              <div className="mb-4 ms-1">
                <p>le {('0' + date.getDate()).slice(-2) + "/" + ('0' + (date.getMonth() + 1)).slice(-2) + "/" + date.getFullYear()}</p>
              </div>
            </div>

              : <div>
                <div className="card flex-row align-items-baseline bg-success" key={todotask.content}>

                  <div className="card-body text-decoration-line-through">
                    {todotask.content}
                  </div>

                  <div className="card-button d-flex align-self-center">
                    <button type="button" className="btn btn-warning mx-1 d-flex align-items-center" onClick={(evt) => { evt.preventDefault(); inputClick(todotask.status = 1) }}><span class="material-icons">reply</span></button>
                    <button type="button" className="btn btn-primary mx-1 d-flex align-items-center"><span className="material-icons">edit</span></button>
                    <button type="button" className="btn btn-danger mx-1 d-flex align-items-center"><span className="material-icons">delete</span></button>
                  </div>

                </div>
                <div className="mb-4 ms-1">
                  <p>le {('0' + date.getDate()).slice(-2) + "/" + ('0' + (date.getMonth() + 1)).slice(-2) + "/" + date.getFullYear()}</p>
                </div>
              </div>}
        </div>
      )) : ''
      }
    </div >
  );
}
export default Tasks;