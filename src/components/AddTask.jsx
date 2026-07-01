import { useState } from "react"

function AddTask(props){
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    return(
        <div className="bg-slate-200 p-4 mx-100 rounded-md space-y-2 flex flex-col gap-2">
            <input value={title} onChange={(event) => setTitle(event.target.value)} type="text" placeholder="Digite o título da tarefa" className="bg-slate-50 border-2 border-slate-500 rounded-md outline-0 p-1" />
            <input value={description} onChange={(event) => setDescription(event.target.value)} type="text" placeholder="Digite a descrição da tarefa" className="bg-slate-50 border-2 border-slate-500 rounded-md outline-0 p-1" />
            <button onClick={() => {
                props.addTask(title, description)
                setDescription('')
                setTitle('')
            }} className="bg-slate-500 text-white rounded-md p-2 cursor-pointer">Adicionar</button>
        </div>
    )
}

export default AddTask