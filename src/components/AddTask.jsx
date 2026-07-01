function AddTask(){
    return(
        <div className="bg-slate-200 p-4 mx-100 rounded-md space-y-2 flex flex-col gap-2">
            <input type="text" placeholder="Digite o título da tarefa" className="bg-slate-50 border-2 border-slate-500 rounded-md outline-0 p-1" />
            <input type="text" placeholder="Digite a descrição da tarefa" className="bg-slate-50 border-2 border-slate-500 rounded-md outline-0 p-1" />
            <button className="bg-slate-500 text-white rounded-md p-2 cursor-pointer">Adicionar</button>
        </div>
    )
}

export default AddTask