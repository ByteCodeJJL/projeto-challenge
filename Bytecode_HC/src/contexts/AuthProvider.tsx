import { useState, useEffect, ReactNode } from 'react';
import { AuthContext } from './auth';
import { usuarios } from '../data/usuarios';
import { pacientes } from '../data/pacientes';
import { Paciente } from '../types/paciente';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<{ email: string; nome: string; } | null>(null);
  const [paciente, setPaciente] = useState<Paciente | null>(null);

  useEffect(() => {
    const email = localStorage.getItem('email');
    if (email) {
      // Procura primeiro nos usuários pré-cadastrados
      const usuarioNoArquivo = usuarios.find(u => u.email === email);
      if (usuarioNoArquivo) {
        setUser({ email, nome: usuarioNoArquivo.nome });
      } else {
        // Se não encontrar, significa que é um usuário cadastrado pelo formulário
        const nome = localStorage.getItem(nome_${email});
        if (nome) {
          setUser({ email, nome });
        }
      }

      // Procura o paciente correspondente
      const pacienteEncontrado = pacientes.find(p => p.email === email);
      if (pacienteEncontrado) {
        setPaciente(pacienteEncontrado);
      }
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('email');
    setUser(null);
    setPaciente(null);
  };

  return (
    <AuthContext.Provider value={{
      isAuthenticated: !!user,
      user,
      paciente,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
}