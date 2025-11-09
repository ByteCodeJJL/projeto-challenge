import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { consultas as consultasIniciais } from "../../data/consultas";
import { medicos } from "../../data/medicos";
import { pacientes } from "../../data/pacientes";
import { Consulta } from "../../types/consulta";
import { Medico } from "../../types/medico";
import { Paciente } from "../../types/paciente";

export default function DetalhesConsulta() {
  const { id } = useParams<{ id: string }>();
  const [consulta, setConsulta] = useState<Consulta | undefined>();
  const [medico, setMedico] = useState<Medico | undefined>();
  const [paciente, setPaciente] = useState<Paciente | undefined>();

  useEffect(() => {
    document.title = "Detalhes da Consulta";

    const consultaEncontrada = consultasIniciais.find(
      (c) => c.id === parseInt(id || "0")
    );

    if (consultaEncontrada) {
      setConsulta(consultaEncontrada);

      const medicoEncontrado = medicos.find((m) => m.id === consultaEncontrada.medicoId);
      setMedico(medicoEncontrado);

      const pacienteEncontrado = pacientes.find((p) => p.id === consultaEncontrada.pacienteId);
      setPaciente(pacienteEncontrado);
    }
  }, [id]);

  if (!consulta) {
    return (
      <main className="flex items-center justify-center min-h-screen text-center p-4">
        <div>
          <h1 className="text-3xl font-bold mb-4">Consulta não encontrada</h1>
          <Link to="/teleconsulta" className="text-blue-600 hover:underline">
            Voltar para agendamentos
          </Link>
        </div>
      </main>
    );
  }

  const datePart = consulta.data;
  const timePart = consulta.horario || "00:00:00";
  const dataFormatada = new Date(`${datePart}T${timePart}`).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const horario = timePart.slice(0, 5);

  return (
    <main className="bg-gradient-to-r from-[var(--cor-primaria-clara)] to-[var(--cor-primaria)] py-14 min-h-screen px-4 text-white">
      <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-lg shadow-lg border-2 border-[var(--cor-destaque)]">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6">Detalhes da Consulta</h1>
        <div className="space-y-4 text-lg">
          <p>
            <strong>Status:</strong>{" "}
            <span className="capitalize px-3 py-1 bg-blue-500 rounded-full text-sm font-medium">{consulta.status}</span>
          </p>
          <p>
            <strong>Paciente:</strong> {paciente ? paciente.nome : "..."}
          </p>
          <p>
            <strong>Data:</strong> {dataFormatada}
          </p>
          <p>
            <strong>Horário:</strong> {horario}
          </p>
          <p>
            <strong>Tipo:</strong> {consulta.tipo}
          </p>
          <hr className="opacity-30 !my-6" />
          <h2 className="text-2xl font-bold pt-4">Profissional</h2>
          <p>
            <strong>Nome:</strong> Dr(a). {medico ? medico.nome : "..."}
          </p>
          <p>
            <strong>Especialidade:</strong> {medico ? medico.especialidade : "..."}
          </p>
          <p>
            <strong>CRM:</strong> {medico ? medico.crm : "..."}
          </p>
        </div>
        <Link to="/teleconsulta" className="inline-block mt-8 py-3 px-6 bg-[var(--cor-destaque)] text-white font-bold rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
          Voltar
        </Link>
      </div>
    </main>
  );
}