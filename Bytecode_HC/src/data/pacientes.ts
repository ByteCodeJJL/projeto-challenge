import { Paciente } from "../types/paciente";


export const pacientes: Paciente[] = [
  {
    id: 1,
    nome: "Ana Carolina",
    idade: 28,
    email: "ana@email.com", 
    telefone: "(11) 98765-4321",
    endereco: {
      rua: "Rua das Flores",
      numero: 123,
      complemento: "Apto 45",
      cidade: "São Paulo",
      cep: "01000-000",
    },
    ativo: true,
  },
  {
    id: 2,
    nome: "Bruno Silva",
    idade: 34,
    email: "bruno@email.com", 
    telefone: "(21) 91234-5678",
    endereco: {
      rua: "Avenida Central",
      numero: 789,
      complemento: "", 
      cidade: "Rio de Janeiro",
      cep: "20000-000",
    },
    ativo: true,
  },
  {
    id: 3,
    nome: "Carla Mendes",
    idade: 45,
    email: "carla@email.com", 
    telefone: "(31) 99999-8888",
    endereco: {
      rua: "Rua da Matriz",
      numero: 10,
      complemento: "Casa",
      cidade: "Belo Horizonte",
      cep: "30000-000",
    },
    ativo: false,
  },
];