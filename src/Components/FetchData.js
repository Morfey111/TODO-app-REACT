import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function FetchData() {
  const [taskList, setTasklist] = useState([]);

  let url = "http://localhost:3000/todos";

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
        {list.title}
      </ul>
    );
  });
  return (
    <div>
      FetchData
      {arr}
    </div>
  );
}

export default FetchData;
