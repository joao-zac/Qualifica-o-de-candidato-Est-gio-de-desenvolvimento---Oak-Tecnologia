import "./Listagem.css";
import { Product } from "../../interfaces/productInterface";
import { useList } from "../../hooks/UseList";

interface ListagemProps {
  data: Product[];
}

export const Listagem = ({ data }: ListagemProps) => {

  const sortedData = useList(data)

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
                  sortedData.map((item, index) => (
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