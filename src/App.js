import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState, useEffect } from 'react';
import AddTask from "./components/Add_Tasks";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Name_SubHeader from "./components/Name_SubHeader";
import TaskDb from "./repositories/db";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTaskList = async () => {
      const getTasksFromServer = await getTasks();
      setTasks(getTasksFromServer);
    };
    getTaskList();
  }, [])
  const getTask = async (id) => {
    return TaskDb.getTask(id);
  };

  const updateTask = () => {
    console.log('Inside update show set task');
    setShowAddTask(!showAddTask);
  };

  const getTasks = async () => {
    return TaskDb.getAllTasks();
  };
  const addTasks = async (task) => {
    console.log('adding', JSON.stringify(task));
    TaskDb.addTask(task.name, task.dueDate, task.assignedTo);
    const getTasksFromServer = await getTasks();
    setTasks(getTasksFromServer);
  };

  return (
    <Router>
      <div className="container">
        <Header />
        <Name_SubHeader name = "Amandeep Barwal_A00452906" />

        <Route path='/' exact render={(props) => (<>
            <AddTask onAdd={addTasks} />
            <Tasks tasks={tasks} />
          </>)
        } />

      </div>
    </Router>
  );
}

export default App;
