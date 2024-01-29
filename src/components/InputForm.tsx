import { ChangeEvent } from "react";

type InputType = "text" | "email" | "password" | "number" | "date";

export interface InputFormProps {
    label: string;
    name: string;
    type: InputType;
    error?: string;
    placeholder?: string;
    className?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const InputForm = ({error, name, label, type, placeholder, className, onChange}: InputFormProps) => {
    return(
        <div className={`mb-5 ${className}`}>
            <label htmlFor={name} className="block text-gray-700 uppercase font-bold">
                {label}
            </label>
            <input
                id={name} 
                name={name} 
                type={type} 
                placeholder={placeholder} 
                className={`border w-full p-2 mt-2 placeholder-gray-500 ${error ? 'border-red-700' : 'border.gray'}`} 
                onChange={onChange}/>
            <p className="text-sm text-red-700 ms-2">{error}</p>
        </div>
    )
}