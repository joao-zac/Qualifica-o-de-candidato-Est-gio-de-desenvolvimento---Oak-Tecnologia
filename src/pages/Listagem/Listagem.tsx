import "./Listagem.css";
import { Product } from "../../interfaces/productInterface";

interface ListagemProps {
  data: Product[];
}

export const Listagem = ({ data }: ListagemProps) => {

  const porra = data
  const ary: number[] = []

  porra.forEach((prod) => {
    ary.push(prod.valor)
  })

  console.log("flag")
  console.log(ary)
  console.log(ary.sort((a, b) => a - b))


  return (
    <div className="list-container">
      {
        data.length === 0 ? (<span className="empty-data-span">Nenhum dado cadastrado.</span>) 
        :(
          <div className="list-div">
            <h1>Lista de Produtos</h1>

            <table>
              <thead>
                <tr>
                  <th>NOME</th>
                  <th>DESCRIÇÃO</th>
                  <th>VALOR</th>
                  <th>DISPONÍVEL</th>
                </tr>
              </thead>

              <tbody>
                {
                  data.map((item, index) => (
                    <tr key={index}>
                      <td>{item.nome}</td>
                      <td>{item.descricao}</td>
                      <td>R$ {item.valor}</td>
                      <td>{item.disponibilidade ? "Sim" : "Não"}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        )
      }
    </div>
    
  );
};