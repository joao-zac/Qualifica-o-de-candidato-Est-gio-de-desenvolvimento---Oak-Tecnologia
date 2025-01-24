import "./Listagem.css";
import { Product } from "../../interfaces/productInterface";

interface ListagemProps {
  data: Product[];
}

export const Listagem = ({ data }: ListagemProps) => {

  return (
    <div className="list-div">
      <h1>Lista de Produtos</h1>

      <div className="prod-div">
        {
          data.length === 0 ? (
            <p>Nenhum dado cadastrado.</p>
          ) 

          : (
              <ul>
                
                  {
                    data.map((item, index) => (
                      <li key={index}>
                        <strong>Nome:</strong> {item.nome} 
                        <strong>Descrição:</strong> {item.descricao} 
                        <strong>Valor:</strong> {item.valor}
                        <strong>Disponibilidade:</strong> {item.disponibilidade}
                      </li>
                  ))}
                
                
              </ul>
            )
        }
      </div>
      
    </div>
  );
};