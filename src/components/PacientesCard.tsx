import { Paciente } from "../context/PacientesContext";


export const PacienteCard = ({
  paciente: { mascota, duenio, raza, email },
}: {
  paciente: Paciente;
}) => {
  return (
    <div className="md:flex">
      <div className="bg-white shadow-sm px-5 py-10 rounded mb-3 mx-3">
        <p className="block mb-3 text-gray-700 uppercase font-bold">
          Mascota: <span className="font-normal normal-case">{mascota}</span>
        </p>
      
        <p className="block mb-3 text-gray-700 uppercase font-bold">
          Raza: <span className="font-normal normal-case">
            {raza}
          </span>
        </p>
        <p className="block mb-3 text-gray-700 uppercase font-bold">
          Dueño: <span className="font-normal normal-case">{duenio}</span>
        </p>
        <p className="block mb-3 text-gray-700 uppercase font-bold">
          Email: <span className="font-normal normal-case">{email}</span>
        </p>
      </div>
      <div className="flex items-center justify-center">
        <form>
        <button
          className="text-white bg-indigo-600 w-full p-3 uppercase font-bold hover:bg-indigo-800 transition-all">Eliminar Registro
        </button>
        </form>
      </div>
    </div>
  );
};