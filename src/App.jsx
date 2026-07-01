import { useState } from "react"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([])


  function onTaskClick(id) {
    const newTasks = tasks.map((task) => {
      if (task.id == id) {
        return { ...task, isCompleted: !task.isCompleted }
      }

      return task
    });

    setTasks(newTasks)
  }

  function onButtonTrashClick(id) {
    const newTasks = tasks.filter((task) => task.id !== id)

    setTasks(newTasks)
  }

  function addTask(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      isCompleted: false,
    }

    setTasks([...tasks, newTask])
  }

  return (
    <div className="bg-gray-600 w-screen h-screen flex flex-col gap-4">
      <h1 className="text-white text-2xl text-center font-bold p-5">Gerenciador de Tarefas</h1>
      <AddTask addTask={addTask} />
      <Tasks arrayLength={tasks.length} tasks={tasks} onTaskClick={onTaskClick} onButtonTrashClick={onButtonTrashClick} />
    </div>
  )
}

export default App