import { createContext } from 'react';
import { Paciente } from '../types/paciente';

interface AuthContextType {
  isAuthenticated: boolean;
  user: {
    email: string;
    nome: string;
  } | null;
  paciente: Paciente | null;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  paciente: null,
  logout: () => {},
});