import { ChevronRight } from "lucide-react"

function Tasks(props){
    return (
        <div className="bg-slate-200 p-4 mx-[400px] rounded-md space-y-2">
            {props.tasks.map((task) => {
                return(
                    <div key={task.id} className="flex flex-row gap-2">
                        <h2  onClick={() => {props.onTaskClick(task.id)}} className={`bg-slate-500 w-full text-white cursor-pointer p-2 rounded-md ${task.isCompleted ? "line-through" : ""}`}>{task.title}</h2>

                        <button className="bg-slate-500 text-white p-2 rounded-md"><ChevronRight /></button>
                    </div>
                )
            })}
        </div>
    )
}

export default Tasks