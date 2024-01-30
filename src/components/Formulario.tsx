import { FormEvent, useContext, useState } from "react";
import { useForm } from "../hooks/useForm"
import { InputForm } from "./InputForm"
import { Paciente, PacientesContext } from "../context/PacientesContext";
import { SchemaFormAddPaciente } from "../validations/SchemaFormAddPaciente";

type FormValues = Omit<Paciente, 'id'>

//export const Formulario = ({ setPacientes }: { setPacientes: Dispatch<SetStateAction<Paciente[]>> }) => {

export const Formulario = () => {

    const {agregarPaciente} = useContext(PacientesContext);

    const [errors, setErrors] = useState<FormValues>({} as FormValues)

    const { formValues, handleChange, reset } = useForm<FormValues>({
        mascota: "",
        duenio: "",
        email: "",
        raza: "",
    });

const {mascota, duenio, email, raza} = formValues;

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const result = SchemaFormAddPaciente.validate(formValues, {
            abortEarly : false
        });

        if(result.error){
            
            setErrors(result.error.details.reduce((acc, err) => {
                const inputName = err.context?.key as string;
                const message = err.message;
                return {
                  ...acc,
                  [inputName]: message,
                };
              }, {} as FormValues));
            
              return
        }

        const newPaciente = {
            id : crypto.randomUUID(),
            ...formValues
        }

        agregarPaciente(newPaciente)
        setErrors({} as FormValues)

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
                    error={errors.mascota}
                />
                <InputForm
                    label="Raza"
                    name="raza"
                    type="text"
                    placeholder="Raza de la mascota"
                    onChange={handleChange}
                    value={raza}
                    error={errors.raza}

                />
                <InputForm
                    label="Dueño"
                    name="duenio"
                    type="text"
                    placeholder="Nombre y apellido del dueño"
                    onChange={handleChange}
                    value={duenio}
                    error={errors.duenio}
                />
                <InputForm
                    label="Email"
                    name="email"
                    type="text"
                    placeholder="Email de contacto"
                    onChange={handleChange}
                    value={email}
                    error={errors.email}
                />
                <button
                    className="text-white bg-indigo-600 w-full p-3 uppercase font-bold hover:bg-indigo-800 transition-all">Agregar paciente
                </button>
            </form>
        </div>
    )
}