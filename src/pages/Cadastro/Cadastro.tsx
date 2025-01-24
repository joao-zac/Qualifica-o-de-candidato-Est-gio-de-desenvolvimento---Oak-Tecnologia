import "./Cadastro.css"
import { Input } from "../../Components/Input/Input"
import { Product } from "../../interfaces/productInterface"
import { useState } from "react"

interface CadastroProps {
  onAddData: (data: Product) => void;
} 

export const Cadastro = ({onAddData}: CadastroProps) => {
  const [form, setForm] = useState({
    nome: "",
    descricao: "",
    valor: "",
    disponibilidade: "true",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddData(form);

    setForm({ nome: "", descricao: "", valor: "", disponibilidade: "" }); 

    alert("Produto cadastrado com sucesso!")
  };


  return (
    <>
      <section>
        <h1>Cadastro</h1>
        <form onSubmit={handleSubmit}>

          <Input label="Nome" name="nome" type="text" data={form.nome} change={handleChange}/>
          <Input label="Descrição" name="descricao" type="text" data={form.descricao} change={handleChange}/>
          <Input label="Valor" name="valor" type="number" data={form.valor} change={handleChange}/>

          <div className="menu-div">
            <label htmlFor="disponibilidade">Disponível para venda</label>

            <select name="disponibilidade" id="disponibilidade" onChange={handleChange} >
                <option value="true">Sim</option>
                <option value="false">Não</option>
            </select>
          </div>
          
          <button type="submit">Cadastrar</button>
        </form>
      </section>

      {/* {alert ? <span>Produto cadastrado com sucesso!</span> : null} */}
    </>
  )
}
