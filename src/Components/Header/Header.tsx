import "./Header.css"
import OAKlogo from "../../../public/oak-logo.png"
import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <header>
            <img src={OAKlogo} alt="OAKlogo" />
            
            <nav>
                <Link to="/">Cadastro</Link>
                <Link to="/dashboard">Dashboard</Link>
            </nav>
    </header>
  )
}