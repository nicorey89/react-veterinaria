import { Header } from "./components/Header"
import { ListadoPacientes } from "./components/ListadoPacientes"
import { Formulario, formValues } from "./components/Formulario"
import { useState } from "react"

function App() {
  const [pacientes, setPacientes] = useState<formValues[]>([])
  return (
    <div className="container mx-auto mt-10">
      <Header />
      <div className="mt-12 p-3 md:flex">
        <Formulario setPacientes={setPacientes}/>
        <ListadoPacientes pacientes={pacientes}/>
      </div>
    </div>
  )
}

export default App
