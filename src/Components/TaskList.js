import React from "react";
import Task from "./Task";
import FetchData from "./FetchData";

function TaskList({taskList}) {


  return (
    <div>
      {/* Why  render TWO times in a console ???????????????*/}
      {/* {taskList.map((task) => {
        console.log(task);
        return <Task key={task.id} task={task} />;
      })} */}
    </div>
  );
}

export default TaskList;
