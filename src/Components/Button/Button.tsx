interface ButtonProps {
    nome: string;
    label: string;
    value: string;
    onClick: () => void;
}

export const Button = ({ nome, onClick, label, value }: ButtonProps) => {
    return (
        <button onClick={onClick} name={label} value={value} disabled={value === "sim" ? true : false}>
            {nome}
        </button>
    );
};
