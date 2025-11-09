import { useEffect } from "react";

export default function Sobre() {
  useEffect(() => {
    document.title = "Sobre";
    // 👇 Fade-in suave no carregamento da página
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
          Sobre Nós
        </h1>
        <p className="text-white/90 mt-3 text-base md:text-lg max-w-3xl mx-auto">
          Conheça a equipe ByteCode e o projeto desenvolvido para otimizar a
          saúde pública através da tecnologia.
        </p>
      </header>

      <section
        className="space-y-8 max-w-5xl mx-auto"
        aria-label="Informações sobre o grupo ByteCode"
      >
        <article className={cardInfoClasses}>
          <h2 className="text-2xl font-bold mb-2 text-[var(--cor-fundo-hover)]">
            Grupo ByteCode
          </h2>
          <p className="text-base leading-relaxed">
            Somos o <strong>Grupo ByteCode</strong>, formado por três pessoas
            apaixonadas por tecnologia e pelo potencial que ela tem de
            transformar realidades. Nosso grupo nasceu com o objetivo de
            desenvolver soluções clínicas que abordem desafios sociais,
            especialmente no setor de saúde pública.
          </p>
          <p className="mt-3 text-base leading-relaxed">
            Em 2025, unimos forças para encarar o <strong>Challenge FIAP</strong>,
            um desafio que nos motivou a repensar o sistema de saúde do Hospital das Clínicas e
            propor melhorias reais e sustentáveis.
          </p>
        </article>

        <article className={cardInfoClasses}>
          <h2 className="text-2xl font-bold mb-2 text-[var(--cor-fundo-hover)]">
            Nosso Desafio
          </h2>
          <p className="text-base leading-relaxed">
            O objetivo proposto é claro e ambicioso:{" "}
            <strong>
              reduzir a taxa de absenteísmo (faltas) em teleconsultas de 20% para
              10%
            </strong>
            . Apesar dos avanços da telemedicina, muitos pacientes ainda
            enfrentam dificuldades em comparecer às consultas online, o que
            impacta negativamente o tratamento e a eficiência do sistema de
            saúde.
          </p>
        </article>

        <article className={cardInfoClasses}>
          <h2 className="text-2xl font-bold mb-2 text-[var(--cor-fundo-hover)]">
            Nossa Proposta
          </h2>
          <p className="text-base leading-relaxed">
            Para enfrentar esse cenário, desenvolvemos a proposta de um{" "}
            <strong>chatbot acessível e inclusivo</strong>, criado para
            acompanhar os pacientes antes das consultas. O assistente virtual
            oferece lembretes, orientações e suporte básico, garantindo que o
            paciente esteja pronto e informado para sua teleconsulta.
          </p>
          <p className="mt-3 text-base leading-relaxed">
            Essa solução é voltada especialmente para populações vulneráveis,
            buscando reduzir as barreiras de comunicação e ampliar o acesso à
            saúde digital.
          </p>
        </article>

        <article className={cardInfoClasses}>
          <h2 className="text-2xl font-bold mb-2 text-[var(--cor-fundo-hover)]">
            Objetivo Social
          </h2>
          <p className="text-base leading-relaxed">
            Nosso foco vai além da tecnologia. O projeto ByteCode HC busca{" "}
            <strong>humanizar o uso da tecnologia</strong> em contextos de saúde
            pública, promovendo inclusão digital e bem-estar social.
          </p>
          <p className="mt-2 text-base leading-relaxed">
            Acreditamos que pequenas inovações podem gerar grandes transformações
            — e o nosso compromisso é tornar isso realidade.
          </p>
        </article>
      </section>

      <div className="relative top-8 h-1 bg-white w-11/12 mx-auto mt-14 rounded-full opacity-80" />
    </main>
  );
}