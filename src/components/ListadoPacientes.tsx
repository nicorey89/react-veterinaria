import { formValues } from "./Formulario"

export const ListadoPacientes = ({pacientes} : {pacientes : formValues[]}) => {
    return(
        <>
        <h2 className="font-bold text-3x1 mb-10 text-center">Listado de pacientes</h2>
        <div>
        {pacientes.map((paciente, index) => (
            <p key={index}>{paciente.mascota}</p>
        ))}
        </div>
        </>
    )
}