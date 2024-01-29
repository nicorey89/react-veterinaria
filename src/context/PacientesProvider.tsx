import { PropsWithChildren, useState } from "react"
import { Paciente, PacientesContext } from "./PacientesContext"


export const PacientesProvider = ({children} : PropsWithChildren) => {
    
    const [pacientes, setPacientes] = useState<Paciente[]>([])

    const agregarPaciente = (paciente : Paciente) => {

        setPacientes((prev: Paciente[]) => {
            return [...prev, paciente];
        });
    }

    return (
        <PacientesContext.Provider value={{
            pacientes,
            agregarPaciente
        }}>
            {children}
        </PacientesContext.Provider>
    )
}