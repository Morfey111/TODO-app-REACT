import React from "react";
import { useState } from "react";

function AddTask({ addTaskFunct }) {
  const [text, setText] = useState("");
  const [completed, setChek] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please add a Task");
      return;
    }
    addTaskFunct({ text, completed });
    setText("");
    setChek(false);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label />
          <input className='input-field'
            type="text"
            placeholder="Add a Task"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <button type="submit" className="buttonAdd">Add</button>
        </div>
      </form>
    </div>
  );
}

export default AddTask;
