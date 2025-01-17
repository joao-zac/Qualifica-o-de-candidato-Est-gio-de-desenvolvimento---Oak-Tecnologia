import "./App.css"
import OAKlogo from "../public/oak-logo.png"
import { Input } from "./Components/Input/Input"
import { useState } from "react"

function App() {
  const [data, setData] = useState({
    nome: "",
    descricao: "",
    valor: "",
    disponibilidade: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
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
          <select name="disponibilidade" id="disponibilidade" onChange={handleChange}>
            <option value="true">Sim</option>
            <option value="false">Não</option>
          </select>

          <button type="submit">Cadastrar</button>
        </form>
      </section>
    </main>
  )
}

export default App
