import React from "react";
import "./App.css";
import Header from "./Components/Header";
import TaskList from "./Components/TaskList";
import AddTask from "./Components/AddTask";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const addTaskFunct = async (task) => {
    

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = res.json();

    setTasks([...tasks, data]);
  };

  const chekTask = () => {};

  let url = "http://localhost:5000/tasks/";

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };

  return (
    <div className="App">
      <h1>App Component</h1>
      <Header />
      <br />
      <AddTask addTaskFunct={addTaskFunct} />
      {tasks.length > 0 ? (
        <TaskList tasks={tasks} deleteTask={deleteTask} chekTask={chekTask} />
      ) : (
        <h3>No Tasks To Do</h3>
      )}
    </div>
  );
}

export default App;
