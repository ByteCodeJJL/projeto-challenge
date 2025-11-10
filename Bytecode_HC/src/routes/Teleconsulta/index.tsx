import { useEffect, useState } from "react";
import { medicos } from "../../data/medicos";
import { pacientes } from "../../data/pacientes";
import { Consulta } from "../../types/consulta";
import { Paciente } from "../../types/paciente";

interface PosConsultaData {
  id: number;
  id_consulta: number;
  diagnostico: string;
  prescricao: string;
  orientacoes: string;
  exames_solicitados: string;
}

interface ChecklistData {
  id: number;
  id_consulta: number;
  ambiente_silencioso: boolean;
  camera_funcionando: boolean;
  microfone_funcionando: boolean;
  conexao_internet_estavel: boolean;
  local_privativo: boolean;
  documentos_em_maos: boolean;
}

export default function Teleconsulta() {
  const [consultas, setConsultas] = useState<Consulta[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pacienteLogado, setPacienteLogado] = useState<Paciente | undefined>(undefined);

  const [dadosPosConsulta, setDadosPosConsulta] = useState<PosConsultaData | null>(null);
  const [loadingPosConsulta, setLoadingPosConsulta] = useState(true);
  const [errorPosConsulta, setErrorPosConsulta] = useState<string | null>(null);

  const [checklist, setChecklist] = useState<ChecklistData | null>(null);
  const [loadingChecklist, setLoadingChecklist] = useState(true);
  const [errorChecklist, setErrorChecklist] = useState<string | null>(null);

  useEffect(() => {
    const emailLogado = localStorage.getItem("email");
    if (emailLogado) {
      const pacienteEncontrado = pacientes.find(
        (p) => p.email === emailLogado
      );
      setPacienteLogado(pacienteEncontrado);
    }
  }, []);


  useEffect(() => {
    const fetchConsultas = async () => {
      if (!pacienteLogado) {
        setLoading(false);
        return;
      }
      
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(`https://apiteleconsulta.onrender.com/consultas/por-paciente/${pacienteLogado.id}`);
        
        if (!response.ok) {
          if (response.status === 404) {
            setConsultas([]);
            return;
          }
          throw new Error(`Erro ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        if (Array.isArray(data)) {
          setConsultas(data);
        } else {
          setConsultas([]);
          console.warn('Resposta da API não é um array:', data);
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Erro desconhecido';
        setError(`Erro ao carregar consultas: ${errorMessage}. Tente novamente mais tarde.`);
        console.error('Erro ao buscar consultas:', err);
        setConsultas([]);
      } finally {
        setLoading(false);
      }
    };

    const fetchPosConsulta = async () => {
      try {
        setLoadingPosConsulta(true);
        const response = await fetch('https://apiteleconsulta.onrender.com/consultas/3/pos-consulta', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        
        if (!response.ok) {
          throw new Error('Falha ao buscar dados pós-consulta');
        }

        const data = await response.json();
        setDadosPosConsulta(data);
        setErrorPosConsulta(null);
      } catch (err) {
        setErrorPosConsulta('Erro ao carregar dados pós-consulta. Tente novamente mais tarde.');
        console.error('Erro ao buscar dados pós-consulta:', err);
      } finally {
        setLoadingPosConsulta(false);
      }
    };

    const fetchChecklist = async () => {
      try {
        setLoadingChecklist(true);
        const response = await fetch('https://apiteleconsulta.onrender.com/consultas/1/checklist', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        
        if (!response.ok) {
          throw new Error('Falha ao buscar checklist');
        }

        const data = await response.json();
        setChecklist(data);
        setErrorChecklist(null);
      } catch (err) {
        setErrorChecklist('Erro ao carregar checklist. Tente novamente mais tarde.');
        console.error('Erro ao buscar checklist:', err);
      } finally {
        setLoadingChecklist(false);
      }
    };

    fetchConsultas();
    fetchPosConsulta();
    fetchChecklist();
  }, [pacienteLogado]);

  const cardInfoClasses =
    "text-white p-6 rounded-[var(--raio-borda-caixa)] shadow-[var(--sombra-card)] border-2 border-[var(--cor-destaque)] bg-white/10 backdrop-blur-md transition-transform duration-500 hover:scale-[1.02] hover:bg-white/20";

  return (
    <main className="bg-gradient-to-r from-[var(--cor-primaria-clara)] to-[var(--cor-primaria)] py-14 min-h-screen px-4">
      <header className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl text-white font-extrabold drop-shadow-lg">
          Teleconsulta
        </h1>
        <p className="text-white/90 mt-3 text-base md:text-lg max-w-3xl mx-auto">
          {pacienteLogado 
            ? `Olá, ${pacienteLogado.nome}! Aqui você pode acompanhar suas consultas,
               verificar o checklist pré-consulta e ver informações pós-consulta.`
            : "Entenda como funciona o processo de teleconsulta no Hospital das Clínicas — do agendamento ao acompanhamento pós-atendimento."}
        </p>
      </header>

      <section
        className="space-y-8 max-w-5xl mx-auto"
        aria-label="Informações da consulta"
      >
        <article className={cardInfoClasses}>
          <h2 className="text-2xl font-bold mb-4 text-[var(--cor-fundo-hover)] flex items-center gap-2">
            📅 Consultas Marcadas
          </h2>
          <div className="space-y-4">
            {loading ? (
              <div className="text-center text-white py-4">
                <p>Carregando consultas...</p>
              </div>
            ) : error ? (
              <div className="text-center text-red-400 py-4">
                <p>{error}</p>
              </div>
            ) : consultas.length > 0 ? (
              <div className="space-y-4">
                {consultas.map((consulta) => {
                  const medico = medicos.find((m) => m.id === consulta.medicoId);
                  const dataHora = new Date(`${consulta.data}T${consulta.horario || '00:00:00'}`);
                  const data = dataHora.toLocaleDateString();
                  const horario = dataHora.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                  
                  return (
                    <div key={consulta.id} className="bg-white/10 p-4 rounded-lg">
                      <div className="grid gap-2">
                        <p className="text-white">
                          <span className="text-white/80">Data:</span>{" "}
                          {data}
                        </p>
                        <p className="text-white">
                          <span className="text-white/80">Horário:</span>{" "}
                          {horario}
                        </p>
                        <p className="text-white">
                          <span className="text-white/80">Médico:</span>{" "}
                          {medico?.nome}
                        </p>
                        <p className="text-white">
                          <span className="text-white/80">Especialidade:</span>{" "}
                          {medico?.especialidade}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center text-white/80 py-4">
                <p>Nenhuma consulta marcada.</p>
              </div>
            )}
          </div>
        </article>

        <article className={cardInfoClasses}>
          <h2 className="text-2xl font-bold mb-4 text-[var(--cor-fundo-hover)] flex items-center gap-2">
            ✓ Checklist da Consulta
          </h2>
          <div className="space-y-4">
            {loadingChecklist ? (
              <div className="text-center text-white py-4">
                <p>Carregando checklist...</p>
              </div>
            ) : errorChecklist ? (
              <div className="text-center text-red-400 py-4">
                <p>{errorChecklist}</p>
              </div>
            ) : checklist ? (
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="grid gap-3">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={checklist.ambiente_silencioso}
                      readOnly
                      className="h-5 w-5"
                    />
                    <label className="text-white">Ambiente silencioso</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={checklist.camera_funcionando}
                      readOnly
                      className="h-5 w-5"
                    />
                    <label className="text-white">Câmera funcionando</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={checklist.microfone_funcionando}
                      readOnly
                      className="h-5 w-5"
                    />
                    <label className="text-white">Microfone funcionando</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={checklist.conexao_internet_estavel}
                      readOnly
                      className="h-5 w-5"
                    />
                    <label className="text-white">Conexão de internet estável</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={checklist.local_privativo}
                      readOnly
                      className="h-5 w-5"
                    />
                    <label className="text-white">Local privativo</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={checklist.documentos_em_maos}
                      readOnly
                      className="h-5 w-5"
                    />
                    <label className="text-white">Documentos em mãos</label>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center text-white/80 py-4">
                <p>Nenhum checklist disponível.</p>
              </div>
            )}
          </div>
        </article>

        <article className={cardInfoClasses}>
          <h2 className="text-2xl font-bold mb-4 text-[var(--cor-fundo-hover)] flex items-center gap-2">
            📋 Dados Pós-Consulta
          </h2>
          <div className="space-y-4">
            {loadingPosConsulta ? (
              <div className="text-center text-white py-4">
                <p>Carregando dados da consulta...</p>
              </div>
            ) : errorPosConsulta ? (
              <div className="text-center text-red-400 py-4">
                <p>{errorPosConsulta}</p>
              </div>
            ) : dadosPosConsulta ? (
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="grid gap-3">
                  <div>
                    <label className="block text-white/80 text-sm">Diagnóstico:</label>
                    <p className="text-white">{dadosPosConsulta.diagnostico}</p>
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm">Prescrição:</label>
                    <p className="text-white">{dadosPosConsulta.prescricao}</p>
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm">Orientações:</label>
                    <p className="text-white">{dadosPosConsulta.orientacoes}</p>
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm">Exames Solicitados:</label>
                    <p className="text-white">{dadosPosConsulta.exames_solicitados}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center text-white/80 py-4">
                <p>Nenhum dado pós-consulta disponível.</p>
              </div>
            )}
          </div>
        </article>
      </section>

      <div className="relative top-8 h-1 bg-white w-11/12 mx-auto mt-14 rounded-full opacity-80" />
    </main>
  );
}