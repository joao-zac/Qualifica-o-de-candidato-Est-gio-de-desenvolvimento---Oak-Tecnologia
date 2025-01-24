import "./Listagem.css";
import { Product } from "../../interfaces/productInterface";

interface ListagemProps {
  data: Product[];
}

export const Listagem = ({ data }: ListagemProps) => {

  return (
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
            data.length === 0 ? (
              <p>Nenhum dado cadastrado.</p>
            ) 

            :data.map((item, index) => (
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
  );
};



// (
//   <ul>
//     {
//       data.map((item, index) => (
//         <li key={index}>
//           <strong>Nome:</strong> {item.nome} 
//           <strong>Descrição:</strong> {item.descricao} 
//           <strong>Valor:</strong> {item.valor}
//           <strong>Disponível:</strong> {item.disponibilidade ? "Sim" : "Não"}
//         </li>
//       ))}
//   </ul>
// )