import { useEffect } from "react";

const faqs = [
    { q: "1. Perdi a DATA E HORÁRIO para retirada dos medicamentos, o que devo fazer?" },
    { q: "2. Como funciona e qual é o HORÁRIO de ATENDIMENTO da Central de Dispensação de Medicamentos (CDM)?" },
    { q: "3. Perdi a RECEITA MÉDICA, o que devo fazer?" },
    { q: "4. Como devo fazer para me CADASTRAR no Programa Medicamento em Casa (PMC)?" },
    { q: "5. Sou cadastrado no Programa Medicamento em Casa (PMC), e preciso ATUALIZAR MEU ENDEREÇO, o que devo fazer?" },
    { q: "6. Meu MEDICAMENTO precisa ficar ARMAZENADO NA GELADEIRA, posso me cadastrar no Programa Medicamento em Casa (PMC)?" },
    { q: "7. Meu MEDICAMENTO NÃO CHEGOU ao endereço cadastrado para entrega, o que devo fazer?" },
    { q: "8. Por que a data de validade da receita registrada na Ficha Técnica de Dispensação de Medicamentos - FTDM, é diferente da data que consta na filipeta de agendamento" },
    { q: "9. Qual a VALIDADE da minha PRESCRIÇÃO MÉDICA?" },
    { q: "10. Como saber se meu medicamento está disponível para retirada?" },
    { q: "11. O que é o medicamento CEAF?" },
    { q: "12. O que é LME e qual a validade deste documento?" }
    
];

export default function FAQ() {
    useEffect(() => {
        document.title = "FAQ";
      }, []);
  return (
    <main className="bg-gradient-to-r from-[var(--cor-primaria-clara)] to-[var(--cor-primaria)] py-10 min-h-screen px-4">
      <section className="max-w-4xl mx-auto">
        <h2 className="text-4xl text-white font-bold mb-6">FAQ - Perguntas Frequentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-[var(--raio-borda-caixa)] p-5 text-lg shadow-[var(--sombra-card)] border-2 border-[var(--cor-destaque)]">
              <p><strong className="text-[var(--cor-primaria-escura)]">{`• ${faq.q}`}</strong></p>
            </div>
          ))}
        </div>
      </section>
      <div className="relative top-6 h-1 bg-white w-11/12 mx-auto mt-10" />
    </main>
  );
}