import { useContext } from "react"
import { PacienteCard } from "./PacientesCard"
import { PacientesContext } from "../context/PacientesContext"

export const ListadoPacientes = () => {

  const {pacientes} = useContext(PacientesContext)

  return (
    <div className="md:w-1/2 lg:w-3/5 px-3">
      <h2 className="font-bold text-3xl mb-10 text-center">
        Listado de{" "}
        <span className="text-indigo-700 font-bold">Pacientes</span>
      </h2>
      <div
        className="h-screen overflow-y-scroll mb-10"
      >
        {
          pacientes.map(paciente => (
            <PacienteCard paciente={paciente}/>
          ))
        }



      </div>

    </div>
    
    
  )
}