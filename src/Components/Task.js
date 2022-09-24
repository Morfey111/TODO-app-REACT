import React from "react";
import { FaTrashAlt, FaCheck } from "react-icons/fa";

function Task({ task, deleteTask, chekTask }) {
  return (
    <div>
      <h3>
        {task.text}
        <FaCheck
          type="chekbox"
          onClick={chekTask}
          style={{ cursor: "pointer", marginLeft: "10px" }}
        />
        <FaTrashAlt
          style={{ cursor: "pointer", marginLeft: "5px" }}
          onClick={() => {
            deleteTask(task.id);
          }}
        />
      </h3>
    </div>
  );
}

export default Task;
