import "./Input.css"

interface InputProps {
    type: string;
    name: string;
    label: string;
    data: string | number;
    change: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ type, name, label, data, change }: InputProps) => {
    return (
        <div className="input-div">
            <label htmlFor={name}>{label}</label>
            <input type={type} name={name} id={name} value={data} onChange={change} required/>
        </div>
    );
};
