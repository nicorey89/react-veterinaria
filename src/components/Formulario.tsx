import { FormEvent, SetStateAction } from "react";
import { useFrom } from "../hooks/useForm"
import { InputForm } from "./InputForm"

export interface formValues{
    mascota: string;
    duenio: string;
    email: string;
    raza: string;
}

export const Formulario = ({ setPacientes } : {setPacientes : Dispatch<SetStateAction<formValues[]>> }) => {
    
    const {formValues, handleChange} = useFrom<formValues>({
        mascota: "",
        duenio: "",
        email: "",
        raza: ""
    });
    const handleSubmit = (e : FormEvent) => {
        e.preventDefault();
        setPacientes((prev: formValues[]) => {
            return [...prev, formValues];
        })
    }
    return(
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-bold text-3x1 mb-10 text-center">Registrar <span className="text-indigo-700">Nuevo Paciente</span></h2>
            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg py-10 px-5 mb-10">
                <InputForm 
                    label="Mascota"
                    name="mascota"
                    type="text"
                    placeholder="Nombre de la mascota"
                    onChange={handleChange}
                />
                <InputForm 
                    label="Raza"
                    name="raza"
                    type="text"
                    placeholder="Raza de la mascota"
                    onChange={handleChange}
                />
                <InputForm 
                    label="Dueño"
                    name="duenio"
                    type="text"
                    placeholder="Nombre y apellido del dueño"
                    onChange={handleChange}
                />
                <InputForm 
                    label="Email"
                    name="email"
                    type="text"
                    placeholder="Email"
                    onChange={handleChange}
                />
                <button className="text-white bg-indigo-600 w-full p-3 uppercase font-bold hover:bg-indigo-800 transition-all">
                    Agregar paciente
                </button>
            </form>
        </div>
    )
}