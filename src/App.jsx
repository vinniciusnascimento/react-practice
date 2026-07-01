import { useState } from "react"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        title: "Estudar programação",
        description: "Estudar react e nodejs",
        isCompleted: false,
      },
      {
        id: 2,
        title: "Estudar programação",
        description: "Estudar react e nodejs",
        isCompleted: true,
      },
    ]
  )


  function onTaskClick(id) {
    const newTasks = tasks.map((task) => {
      if (task.id == id) {
        return { ...task, isCompleted: !task.isCompleted }
      }

      return task
    });

    setTasks(newTasks)
  }

  function onButtonTrashClick(id){
    const newTasks = tasks.filter((task) => task.id !== id)

    setTasks(newTasks)
  }

  return (
    <div className="bg-gray-600 w-screen h-screen flex flex-col gap-4">
      <h1 className="text-white text-2xl text-center font-bold p-5">Gerenciador de Tarefas</h1>
      <AddTask />
      <Tasks arrayLength={tasks.length} tasks={tasks} onTaskClick={onTaskClick} onButtonTrashClick={onButtonTrashClick} />
    </div>
  )
}

export default App