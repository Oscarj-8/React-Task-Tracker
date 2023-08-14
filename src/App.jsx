import "./App.css";
import { useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Go to Cinema",
      day: "Feb 23, 3:00 PM",
      reminder: true,
    },
    {
      id: 2,
      title: "Buy Microwave",
      day: "Aub 13, 1:30 PM",
      reminder: true,
    },
    {
      id: 3,
      title: "Watch Chelsea game",
      day: "AUg 04, 2:00 PM",
      reminder: false,
    },
  ]);

  const deletTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deletTask} />
      ) : (
        "No tasks to show"
      )}
    </div>
  );
}

export default App;
