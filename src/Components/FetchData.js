import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaTrashAlt, BsFillFileCheckFill} from 'react-icons/fa';



function FetchData() {
  const [taskList, setTasklist] = useState([]);

  let url = 'http://localhost:8000/todos';

  useEffect(() => {
    axios.get(url)
      .then((res) => {
        console.log(res);
        // useState([]) ли ги птрави на Арей нали уж е json ??????
        setTasklist(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  let arr = taskList.map((list) => {
    return (
      <ul key={list.id}>
        {list.id}. { list.title} <FaTrashAlt /> <FaTrashAlt />
      </ul>
    );
  });

  let numTodos = taskList.length

  return (
    <div>
      <h4> {arr} </h4>
      <h3>Total todos : {numTodos}</h3>
    </div>
  );
}

export default FetchData;
