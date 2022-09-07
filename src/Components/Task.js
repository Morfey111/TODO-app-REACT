import React from "react";
import { AiFillDelete, AiOutlineCheck } from "react-icons/ai";


function Task({ task }) {

  return <div className= {task.completed?'.completed': '.notCompleted'}>{task.id}. {task.event} <AiOutlineCheck/>  <AiFillDelete/></div>;
}

export default Task;
