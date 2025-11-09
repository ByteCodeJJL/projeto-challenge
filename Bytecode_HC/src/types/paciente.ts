export interface Endereco {
  rua: string;
  numero: number;
  complemento?: string;
  cidade: string;
  cep: string;
}

export interface Paciente {
  id: number;
  nome: string;
  idade: number;
  email: string;
  telefone: string;
  endereco: Endereco;
  ativo: boolean;
}