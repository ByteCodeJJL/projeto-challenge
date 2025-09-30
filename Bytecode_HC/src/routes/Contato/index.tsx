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

  const infoCardClasses = "bg-white rounded-[var(--raio-borda-caixa)] shadow-[var(--sombra-card)] border-2 border-[var(--cor-destaque)] p-4 md:p-8 h-auto md:h-[120px] flex flex-col justify-center items-center text-center";
  const unitImageClasses = "w-full md:w-[calc(33.333%-1rem)] h-auto rounded-[var(--raio-borda-card)] shadow-[var(--sombra-card)] border-2 border-[var(--cor-destaque)]";

  return (
    <main className="bg-gradient-to-r from-[var(--cor-primaria-clara)] to-[var(--cor-primaria)] py-10 min-h-screen px-4">
      <section className="max-w-4xl mx-auto">
        <h2 className="text-4xl text-white font-bold text-center mb-6">Contato</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 p-4 border-2 border-[var(--cor-destaque)] shadow-[var(--sombra-card)] rounded-[var(--raio-borda-caixa)] mb-12">
          <div className={infoCardClasses}>
            <h3 className="text-lg font-bold">📞 Telefone</h3>
            <p className="mt-1 text-sm">(011) 2661-0000</p>
          </div>
          <div className={infoCardClasses}>
            <h3 className="text-lg font-bold">🏠 Endereço</h3>
            <p className="mt-1 text-sm">Av. Dr. Enéas de Carvalho Aguiar, 255 - Cerqueira César - 05403-000 - São Paulo - Brasil</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto">
        <h2 className="text-4xl text-white font-bold text-center mb-6">Conheça nossas unidades</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <img src={ichc} alt="Instituto Central Hospital das Clínicas" className={unitImageClasses} />
          <img src={ip} alt="Instituto de Psiquiatria" className={unitImageClasses} />
          <img src={imfr} alt="Instituto de Medicina Física e Reabilitação" className={unitImageClasses} />
          <img src={pa} alt="Prédio dos Ambulatórios" className={unitImageClasses} />
          <img src={iot} alt="Instituto de Ortopedia e Traumatologia" className={unitImageClasses} />
          <img src={ica} alt="Instituto da Criança e do Adolescente" className={unitImageClasses} />
          
        </div>
      </section>
      
      <div className="relative top-6 h-1 bg-white w-11/12 mx-auto mt-10" />
    </main>
  );
}