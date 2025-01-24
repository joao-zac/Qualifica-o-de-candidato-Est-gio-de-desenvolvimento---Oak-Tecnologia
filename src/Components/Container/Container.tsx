import "./Container.css"
import { useState } from "react";
import { Product } from "../../interfaces/productInterface";
import { Cadastro } from "../../pages/Cadastro/Cadastro";
import { Listagem } from "../../pages/Listagem/Listagem";

interface ContainerProps {
    activeView: "cadastro" | "listagem";
    setActiveView: (view: "cadastro" | "listagem") => void;
}

export const Container = ({activeView, setActiveView}: ContainerProps) => {

    const [formData, setFormData] = useState<Product[]>([])

    const handleAddData = (data: Product) => {
        setFormData((prevData) => [...prevData, data])

        setActiveView("listagem")
    }

    return (
        <div className="container">
            {activeView === "cadastro" && <Cadastro onAddData={handleAddData}/>}
            {activeView === "listagem" && <Listagem data={formData} />}
        </div>
    )
}