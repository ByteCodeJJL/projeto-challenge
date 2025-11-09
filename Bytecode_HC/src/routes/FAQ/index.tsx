import { useEffect } from "react"; // 1. Adicionado useState

export default function Teleconsulta() {
  useEffect(() => {
    document.title = "FAQ";

    const main = document.querySelector("main");
    if (main) {
      (main as HTMLElement).style.opacity = "0";
      (main as HTMLElement).style.transition = "opacity 0.8s ease";
      setTimeout(() => {
        (main as HTMLElement).style.opacity = "1";
      }, 100);
    }
  }, []);

  const cardInfoClasses =
    "text-white p-6 rounded-[var(--raio-borda-caixa)] shadow-[var(--sombra-card)] border-2 border-[var(--cor-destaque)] bg-white/10 backdrop-blur-md transition-transform duration-500 hover:scale-[1.02] hover:bg-white/20";

  return (
    <main className="bg-gradient-to-r from-[var(--cor-primaria-clara)] to-[var(--cor-primaria)] py-14 min-h-screen px-4">
      <header className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl text-white font-extrabold drop-shadow-lg">
          FAQ - DÚVIDAS FREQUENTES
        </h1>
        <p className="text-white/90 mt-3 text-base md:text-lg max-w-3xl mx-auto">
          Entenda como funciona o processo de teleconsulta no Hospital das Clínicas —
          do agendamento ao acompanhamento pós-atendimento.
        </p>
      </header>

      <section
        className="space-y-8 max-w-5xl mx-auto"
        aria-label="Etapas do processo de teleconsulta"
      >
        <article className={cardInfoClasses}>
          <h2 className="text-2xl font-bold mb-2 text-[var(--cor-fundo-hover)] flex items-center gap-2">
            📅 Agendamento da Consulta
          </h2>
          <p className="text-base leading-relaxed">
            O processo de teleconsulta começa com o <strong>agendamento</strong>.
            O paciente entra em contato com o hospital, seja por telefone, e-mail ou
            plataforma online, para marcar a consulta com o especialista desejado.
            O agendamento pode ser feito para diversas especialidades, como
            cardiologia, dermatologia e pediatria.
          </p>
        </article>

        <article className={cardInfoClasses}>
          <h2 className="text-2xl font-bold mb-2 text-[var(--cor-fundo-hover)] flex items-center gap-2">
            📝 Orientações Pré-Consulta
          </h2>
          <p className="text-base leading-relaxed">
            Após a confirmação do agendamento, o paciente recebe orientações sobre
            como proceder antes da consulta. Essas instruções incluem requisitos
            tecnológicos (dispositivo com câmera e microfone, conexão estável) e
            instruções de acesso à plataforma de videoconferência.
          </p>
        </article>

        <article className={cardInfoClasses}>
          <h2 className="text-2xl font-bold mb-2 text-[var(--cor-fundo-hover)] flex items-center gap-2">
            💻 Acesso à Plataforma
          </h2>
          <p className="text-base leading-relaxed">
            O Hospital das Clínicas utiliza plataformas seguras e criptografadas para
            garantir a <strong>confidencialidade</strong> dos dados médicos. No dia e
            horário agendados, o paciente recebe um link para acessar a videoconferência
            e realizar sua consulta com o médico responsável.
          </p>
        </article>

        <article className={cardInfoClasses}>
          <h2 className="text-2xl font-bold mb-2 text-[var(--cor-fundo-hover)] flex items-center gap-2">
            🩺 Realização da Consulta
          </h2>
          <p className="text-base leading-relaxed">
            Durante a consulta, o médico realiza a <strong>anamnese</strong>
            (entrevista médica) e, se necessário, solicita exames adicionais.
            Caso o quadro clínico exija, o paciente pode ser encaminhado para uma
            avaliação presencial. O atendimento segue o mesmo padrão ético e técnico
            de uma consulta tradicional, com foco em orientar e acompanhar o paciente.
          </p>
        </article>

        <article className={cardInfoClasses}>
          <h2 className="text-2xl font-bold mb-2 text-[var(--cor-fundo-hover)] flex items-center gap-2">
            🔒 Confidencialidade e Segurança
          </h2>
          <p className="text-base leading-relaxed">
            O Hospital das Clínicas segue rigorosos protocolos de{" "}
            <strong>segurança e privacidade</strong> para proteger as informações
            dos pacientes. As plataformas de teleconsulta são totalmente
            compatíveis com a <strong>LGPD (Lei Geral de Proteção de Dados)</strong>,
            garantindo que todas as interações sejam seguras e sigilosas.
          </p>
        </article>

        <article className={cardInfoClasses}>
          <h2 className="text-2xl font-bold mb-2 text-[var(--cor-fundo-hover)] flex items-center gap-2">
            📨 Encerramento e Acompanhamento
          </h2>
          <p className="text-base leading-relaxed">
            Ao final da consulta, o paciente recebe as orientações médicas e, se
            necessário, prescrições digitais ou encaminhamentos para exames.
            O acompanhamento pode ser feito online, garantindo um cuidado contínuo
            e humanizado, mesmo à distância.
          </p>
        </article>
      </section>

      <div className="relative top-8 h-1 bg-white w-11/12 mx-auto mt-14 rounded-full opacity-80" />
    </main>
  );
}