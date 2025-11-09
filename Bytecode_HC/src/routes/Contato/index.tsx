import { useEffect } from "react";
import ica from "../../assets/img/contato/ica.png";
import ichc from "../../assets/img/contato/ichc.png";
import imfr from "../../assets/img/contato/imfr.png";
import iot from "../../assets/img/contato/iot.png";
import ip from "../../assets/img/contato/ip.png";
import pa from "../../assets/img/contato/pa.png";


export default function Contato() {
  useEffect(() => {
    document.title = "Contato";
  }, []);

const infoCardClasses =
    "bg-white rounded-[var(--raio-borda-caixa)] shadow-[var(--sombra-card)] border-2 border-[var(--cor-destaque)] p-6 flex flex-col justify-center items-center text-center w-72 h-40"; 

  const unitImageClasses =
    "w-full md:w-[calc(33.333%-1rem)] h-auto rounded-[var(--raio-borda-card)] shadow-[var(--sombra-card)] border-2 border-[var(--cor-destaque)] transition-transform hover:scale-[1.02] hover:shadow-xl";

  return (
    <>
      <main className="bg-gradient-to-r from-[var(--cor-primaria-clara)] to-[var(--cor-primaria)] py-12 min-h-screen px-4">
        <section className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl text-white font-bold mb-8">Entre em Contato</h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-6 border-2 border-[var(--cor-destaque)] bg-white/10 backdrop-blur-sm shadow-[var(--sombra-card)] rounded-[var(--raio-borda-caixa)]">
            <div className={infoCardClasses}>
              <h3 className="text-lg font-bold text-[var(--cor-primaria)]">
                📞 Telefone
              </h3>
              <p className="mt-2 text-sm text-gray-700">(11) 2661-0000</p>
            </div>

            <div className={infoCardClasses}>
              <h3 className="text-lg font-bold text-[var(--cor-primaria)]">
                🏠 Endereço
              </h3>
              <p className="mt-2 text-sm text-gray-700 leading-tight">
                Av. Dr. Enéas de Carvalho Aguiar, 255<br />
                Cerqueira César - São Paulo/SP<br />
                CEP 05403-000
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl text-white font-bold mb-8">
            Nossas Unidades
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            <img
              src={ichc}
              alt="Instituto Central do Hospital das Clínicas"
              className={unitImageClasses}
            />
            <img
              src={ip}
              alt="Instituto de Psiquiatria"
              className={unitImageClasses}
            />
            <img
              src={imfr}
              alt="Instituto de Medicina Física e Reabilitação"
              className={unitImageClasses}
            />
            <img
              src={pa}
              alt="Prédio dos Ambulatórios"
              className={unitImageClasses}
            />
            <img
              src={iot}
              alt="Instituto de Ortopedia e Traumatologia"
              className={unitImageClasses}
            />
            <img
              src={ica}
              alt="Instituto da Criança e do Adolescente"
              className={unitImageClasses}
            />
          </div>
        </section>

        <div className="relative top-8 h-1 bg-white w-11/12 mx-auto mt-16 rounded-full opacity-80" />
      </main>
    </>
  );
}