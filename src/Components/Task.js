import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import { FaTrashAlt, FaCheck } from "react-icons/fa";

function Task({ task, deleteTask, chekTask }) {
  return (
    <div>
      <h3 className="task">
        <span className={task.completed ? "done" : ""}>{task.id}.{task.text}</span>
        <FaCheck
        className = 'chek'
          type="chekbox"
          onClick={() => {
            chekTask(task.id);
          }}
        />
        <FaTrashAlt
        className = 'trash'
          onClick={() => {
            deleteTask(task.id);
          }}
        />
      </h3>
    </div>
  );
}

export default Task;
