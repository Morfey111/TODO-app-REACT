import "./App.css";
import { useState } from "react";
import Header from "./Components/Header";
import TaskList from "./Components/TaskList";
import FetchData from "./Components/FetchData";

function App() {

  // Въпрос. Може ли в 2 компонента да предадем таскЛист тоест да използваме
  //  стейта в 2 различни кимпонента или да направим ф-я и да я предадем
  
  return (
    <div className="App">
      <h1>App Component</h1>
      <Header  />
      <FetchData />
      <TaskList />
    </div>
  );
}

export default App;
