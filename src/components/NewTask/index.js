import React from 'react';

import './style.css';

const NewTask = ({content, inputChange, handleSubmit}) => {

return (
    <div className="NewTask mb-5">
      <h1 className="my-4">New Task</h1>
      <form className="input-group mb-5" onSubmit={(evt) => { evt.preventDefault(); handleSubmit(content) }}>
        <input type="text" className="form-control" name="content" placeholder="Add a Task" aria-label="Recipient's username" aria-describedby="button-addon2" value={content}
        onChange={(evt) => {inputChange({ [evt.target.name]: evt.target.value})}}/>
        <button className="btn btn-secondary" type="button" id="button-addon2" onClick={(evt) => { evt.preventDefault(); handleSubmit({'content':content, 'status': 1}) }}>Add</button>
       </form>
    </div>
  );
}
export default NewTask;