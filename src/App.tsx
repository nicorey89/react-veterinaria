import { Formulario } from "./components/Formulario"
import { Header } from "./components/Header"
import { ListadoPacientes } from "./components/ListadoPacientes"
import { PacientesProvider } from "./context/PacientesProvider"

function App() {

  return (
    <PacientesProvider>
      <div className="container mx-auto mt-10">
        <Header />
        <div className="mt-12 p-3 md:flex">
          <Formulario />
          <ListadoPacientes />
        </div>
      </div>
    </PacientesProvider>

  )
}

export default App