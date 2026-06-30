import { useState } from "react"

function App(){
  const [message, setMessage] = useState("Clique no botão")
  return (
    <div>
      <h1 className="text-pink-500">{message}</h1>
      <button onClick={() => {
        setMessage("Fui clicado!")
      }}>Clique aqui</button>

    </div>
  )
}

export default App