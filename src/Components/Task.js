import React from "react";


function Task({ task }) {

  return <div className= {task.completed?'.completed': '.notCompleted'}>{task.id}. {task.event} <AiOutlineCheck/>  <AiFillDelete/></div>;
}

export default Task;
