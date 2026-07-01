import { useState } from "react"
import Tasks from "./components/Tasks"

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

  return (
    <div className="bg-gray-600 w-screen h-screen">
      <h1 className="text-white text-2xl text-center font-bold p-5">Gerenciador de Tarefas</h1>
      <Tasks tasks={tasks} onTaskClick={onTaskClick} />
    </div>
  )
}

export default App