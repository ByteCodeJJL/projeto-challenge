import { useEffect } from "react";

export default function Sobre() {
    useEffect(() => {
        document.title = "Sobre";
      }, []);

  const cardInfoClasses = "text-white p-5 rounded-[var(--raio-borda-caixa)] shadow-[var(--sombra-card)] border-2 border-[var(--cor-destaque)] bg-white/10 backdrop-blur-sm";

  return (
    <main className="bg-gradient-to-r from-[var(--cor-primaria-clara)] to-[var(--cor-primaria)] py-10 min-h-screen px-4">
      <h1 className="text-4xl text-white font-bold text-center mb-6">Sobre Nós</h1>
      
      <section className="space-y-6 max-w-4xl mx-auto">
        <div className={cardInfoClasses}>
          <h3 className="text-xl font-bold mb-2">Grupo ByteCode</h3>
          <p className="text-base">
            Somos o Grupo Bytecode, um time formado por três pessoas apaixonadas por tecnologia e pelo potencial que ela tem de transformar realidades. Nosso grupo nasceu com o objetivo de desenvolver soluções clínicas que resolvessem aspectos sociais, especificamente o setor de saúde pública. Em 2025, unimos forças para encarar um desafio de grande importância: o Challenge 2025, promovido pelo ENIAC, que nos desafiou a repensar e otimizar o sistema de saúde de nossa cidade.
          </p>
        </div>

        <div className={cardInfoClasses}>
          <h3 className="text-xl font-bold mb-2">Nosso Desafio</h3>
          <p className="text-base">
            O objetivo proposto é claro e ambicioso: reduzir a taxa de absenteísmo (faltas) nas teleconsultas de 20% para 10%. Embora as teleconsultas tenham ampliado o acesso à saúde, muitas pessoas ainda enfrentam barreiras que as impedem de participar efetivamente desse formato. A ausência em consultas prejudica não só o tratamento do paciente, mas também a organização e eficiência do sistema de saúde como um todo.
          </p>
        </div>

        <div className={cardInfoClasses}>
          <h3 className="text-xl font-bold mb-2">Nossa Proposta</h3>
          <p className="text-base">
            Para endereçar esse cenário, desenvolvemos a proposta de um chatbot acessível, inclusivo e inteligente, voltado para acompanhar e orientar os pacientes antes de suas consultas. Este assistente virtual tem como principais funções: [...]
          </p>
        </div>

        {/* Adicione os outros cards de conteúdo aqui */}

      </section>

      <div className="relative top-6 h-1 bg-white w-11/12 mx-auto mt-10" />
    </main>
  );
}