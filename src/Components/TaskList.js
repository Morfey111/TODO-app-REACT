import React from "react";
import Task from "./Task";

function TaskList({ tasks, deleteTask, chekTask }) {
  return (
    <div >
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            chekTask={chekTask}
          />
        );
      })}
      <br />
      {<h3 style={{color: 'white'}}>Total todos: {tasks.length}</h3>}
    </div>
  );
}

export default TaskList;
