import { createContext } from "react";

export interface Paciente {
    id: string;
    mascota: string;
    duenio: string;
    email: string;
    raza: string;
}

export interface PacientesContextProps {
    pacientes: Paciente[];
    agregarPaciente: (paciente: Paciente) => void;
    eliminarPaciente?: (id: string) => void;
}

export const PacientesContext = createContext<PacientesContextProps>({} as PacientesContextProps);