import { FormEvent, useContext } from "react";
import { useForm } from "../hooks/useForm"
import { InputForm } from "./InputForm"
import { Paciente, PacientesContext } from "../context/PacientesContext";

type FormValues = Omit<Paciente, 'id'>


export const Formulario = () => {

    const {agregarPaciente} = useContext(PacientesContext)

    const { formValues, handleChange, reset } = useForm<FormValues>({
        mascota: "",
        duenio: "",
        email: "",
        raza: "",
    });

const {mascota, duenio, email, raza} = formValues;

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const newPaciente = {
            id : crypto.randomUUID(),
            ...formValues
        }

        agregarPaciente(newPaciente)
      

        reset()

    }


    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-bold text-3xl mb-10 text-center">Registrar <span className="text-indigo-700">Nuevo Paciente</span></h2>
            <form
                className="bg-white shadow-lg rounded-lg py-10 px-5 mb-10"
                onSubmit={handleSubmit}
            >
                <InputForm
                    label="Mascota"
                    name="mascota"
                    type="text"
                    placeholder="Nombre de la mascota"
                    onChange={handleChange}
                    value={mascota}
                />
                <InputForm
                    label="Raza"
                    name="raza"
                    type="text"
                    placeholder="Raza de la mascota"
                    onChange={handleChange}
                    value={raza}

                />
                <InputForm
                    label="Dueño"
                    name="duenio"
                    type="text"
                    placeholder="Nombre y apellido del dueño"
                    onChange={handleChange}
                    value={duenio}

                />
                <InputForm
                    label="Email"
                    name="email"
                    type="text"
                    placeholder="Email de contacto"
                    onChange={handleChange}
                    value={email}

                />
                <button
                    className="text-white bg-indigo-600 w-full p-3 uppercase font-bold hover:bg-indigo-800 transition-all">Agregar paciente
                </button>
            </form>
        </div>
    )
}