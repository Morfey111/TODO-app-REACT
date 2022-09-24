import React from "react";
import Task from "./Task";

function TaskList({ tasks, deleteTask, chekTask }) {
  return (
    <div>
      {tasks.map((task) => {
        // const id = Math.floor(Math.random() * 10000) + 1;
        return (
          <Task
            key={task.id  /*id*/}
            task={task}
            deleteTask={deleteTask}
            chekTask={chekTask}
          />
        );
        //  <h3 key={task.id}>{task.title}</h3>;
      })}
      <br />
      {<h3>Total todos: {tasks.length}</h3>}
    </div>
  );
}

export default TaskList;
