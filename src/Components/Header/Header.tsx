import "./Header.css"
import OAKlogo from "../../../public/oak-logo.png"

interface propsTypes {
  setActiveView: (view: "cadastro" | "listagem") => void;
}

export const Header = ({ setActiveView }: propsTypes) => {
  return (
    <header>
      <img src={OAKlogo} alt="OAKlogo" />
            
      <nav>
        <a onClick={() => setActiveView("cadastro")}>Cadastro</a>
        <a onClick={() => setActiveView("listagem")}>Listagem</a>
      </nav>
    </header>
  )
}