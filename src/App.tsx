import "./App.css"
import OAKlogo from "../public/oak-logo.png"
import { Input } from "./Components/Input/Input"
import { Button } from "./Components/Button/Button"
import { useState } from "react"

function App() {
  const [data, setData] = useState({
    nome: "",
    descricao: "",
    valor: "",
    disponibilidade: ""
  })
  // const [disponibilidade, setDisponibilidade] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setData({
      ...data,
      [name]: value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(data)
  }

  return (
    <main>
      <header>
        <img src={OAKlogo} alt="OAKlogo" />
        
        <nav>
          <a href="#Cadastro">Cadastro</a>
          <a href="#Cadastro">Listagem</a>
        </nav>
      </header>
      
      <section>
        <h1>Cadastro</h1>
        <form onSubmit={handleSubmit}>

          <Input label="Nome" name="nome" type="text" data={data.nome} change={handleChange}/>
          <Input label="Descrição" name="descricao" type="text" data={data.descricao} change={handleChange}/>
          <Input label="Valor" name="valor" type="number" data={data.valor} change={handleChange}/>

          <label htmlFor="disponibilidade">Disponível para venda</label>
          <Button nome="Sim" label="disponibilidade" value="sim" onClick={() => setData({ ...data, disponibilidade: "sim" })} />
          <Button nome="Não" label="disponibilidade" value="nao" onClick={() => setData({ ...data, disponibilidade: "nao" })} />

          <button type="submit">Cadastrar</button>
        </form>
      </section>
    </main>
  )
}

export default App
