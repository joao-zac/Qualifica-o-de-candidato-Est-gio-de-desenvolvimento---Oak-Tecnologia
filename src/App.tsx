import { Header } from "./Components/Header/Header"
import { Container } from "./Components/Container/Container"
import { useState } from "react"

export const App = () => {
    const [activeView, setActiveView] = useState<"cadastro" | 'listagem'>("cadastro")

    return (
        <>
            <Header setActiveView={setActiveView}/>
            <Container activeView={activeView} setActiveView={setActiveView}/>
        </>
    )
}
