import { Paciente } from "./paciente";

export type TipoConsulta = "teleconsulta" | "presencial";
export type StatusConsulta = "marcada" | "realizada" | "cancelada";

export interface Consulta {
  id: number;
  paciente: Paciente;
  pacienteId: number;
  medicoId: number;
  data: string;
  horario: string;

  tipo: TipoConsulta;
  status: StatusConsulta;
}