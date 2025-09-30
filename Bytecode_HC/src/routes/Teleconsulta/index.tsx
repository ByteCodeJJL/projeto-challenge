import { useEffect } from "react";

export default function Teleconsulta() {
    useEffect(() => {
        document.title = "Teleconsulta";
      }, []);

  const cardInfoClasses = "text-white p-5 rounded-[var(--raio-borda-caixa)] shadow-[var(--sombra-card)] border-2 border-[var(--cor-destaque)] bg-white/10 backdrop-blur-sm";
  
  return (
    <main className="bg-gradient-to-r from-[var(--cor-primaria-clara)] to-[var(--cor-primaria)] py-10 min-h-screen px-4">
      <h1 className="text-4xl text-white font-bold text-center mb-6">Teleconsulta</h1>
      <section className="space-y-6 max-w-4xl mx-auto">

        <div className={cardInfoClasses}>
          <h3 className="text-xl font-bold mb-2">Agendamento da Consulta</h3>
          <p className="text-base">O processo de teleconsulta começa com o agendamento. O paciente entra em contato com o hospital, seja por meio de telefone, e-mail ou plataforma online, para marcar uma consulta com o especialista desejado. O agendamento pode ser feito para diversas especialidades médicas, como cardiologia, dermatologia, pediatria, entre outras.</p>
        </div>

        <div className={cardInfoClasses}>
          <h3 className="text-xl font-bold mb-2">Orientações Pré-Consulta</h3>
          <p className="text-base">Após a confirmação do agendamento, o paciente recebe orientações detalhadas sobre como proceder antes da consulta. Essas instruções incluem informações sobre os requisitos tecnológicos (como a necessidade de um dispositivo com câmera e microfone, além de uma conexão de internet estável), e como acessar a plataforma de videoconferência que será utilizada para a teleconsulta.</p>
        </div>

        <div className={cardInfoClasses}>
          <h3 className="text-xl font-bold mb-2">Acesso à Plataforma de Videoconferência</h3>
          <p className="text-base">O Hospital das Clínicas utiliza plataformas seguras para garantir a confidencialidade das informações médicas durante a consulta. O paciente recebe um link para acessar a plataforma no dia e horário agendados. A consulta ocorre por meio de vídeo, onde o médico pode visualizar o paciente e realizar uma avaliação remota. Isso permite a continuidade do atendimento médico sem a necessidade de deslocamento até o hospital.</p>
        </div>

        <div className={cardInfoClasses}>
          <h3 className="text-xl font-bold mb-2">Realização da Consulta</h3>
          <p className="text-base">Durante a consulta, o médico realiza a anamnese (entrevista médica) e, se necessário, solicita exames ou outros exames complementares para avaliação. Em alguns casos, o paciente pode ser orientado a ir até o hospital ou clínica para realizar exames físicos ou testes que não podem ser feitos virtualmente. A consulta é conduzida da mesma forma que uma consulta presencial, com a diferença de que é feita por meio de vídeo e áudio. O médico pode avaliar o quadro clínico, discutir sintomas, revisar histórico médico e até fornecer orientações sobre o tratamento, como prescrição de medicamentos, mudanças no estilo de vida e outras medidas terapêuticas.</p>
        </div>

        <div className={cardInfoClasses}>
          <h3 className="text-xl font-bold mb-2">Confidencialidade e Segurança</h3>
          <p className="text-base">O Hospital das Clínicas segue rigorosos protocolos de segurança e confidencialidade para garantir que todas as informações do paciente sejam protegidas. As plataformas de teleconsulta são criptografadas e compatíveis com as regulamentações de proteção de dados (como a Lei Geral de Proteção de Dados - LGPD).</p>
        </div>

        <div className={cardInfoClasses}>
          <h3 className="text-xl font-bold mb-2">Encerramento da Consulta e Acompanhamento</h3>
          <p className="text-base">Ao final da teleconsulta, o paciente recebe as orientações do médico, incluindo o tratamento recomendado e, se necessário, o encaminhamento para exames adicionais ou visitas presenciais. Prescrições de medicamentos podem ser enviadas digitalmente, e o paciente também pode receber recomendações de acompanhamento.</p>
        </div>

      </section>
      <div className="relative top-6 h-1 bg-white w-11/12 mx-auto mt-10" />
    </main>
  );
}