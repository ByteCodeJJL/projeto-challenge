import { Consulta } from "../types/consulta";
import { pacientes } from "./pacientes";

export const consultas: Consulta[] = [
  {
    id: 1,
    paciente: pacientes[0],
    pacienteId: 1,
    medicoId: 1,
    data: "2025-11-05",
    horario: "10:00",
    tipo: "teleconsulta", 
    status: "marcada",     
  },
  {
    id: 2,
    paciente: pacientes[1],
    pacienteId: 2,
    medicoId: 2,
    data: "2025-11-06",
    horario: "15:30",
    tipo: "presencial",
    status: "realizada", 
  },
];