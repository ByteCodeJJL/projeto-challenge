import { useEffect } from "react";

import jp from "../../assets/img/integrantes/jp.jpg";
import matsubara from "../../assets/img/integrantes/matsubara.png";
import jv from "../../assets/img/integrantes/jv.png";
import github from "../../assets/img/integrantes/github.png";
import linkedin from "../../assets/img/integrantes/linkedin.png";


const integrantes = [
    { id: 1, nome: 'João Pedro Pereira Camilo', rm: '562005 | 1TDSPY)', foto: jp, ghLink: 'https://github.com/Jppcamilo', inLink: 'https://linkedin.com/in/joãopedrocamilo910b83298/' },
    { id: 2, nome: 'Lucas Matsubara Reis', rm: '565020 | 1TDSPY)', foto: matsubara, ghLink: 'https://github.com/LucasMatsubara', inLink: 'https://linkedin.com/in/lucasmatsubara11' },
    { id: 3, nome: 'João Victor Santana dos Santos', rm: '566003 | 1TDSPY)', foto: jv, ghLink: 'https://github.com/Jsantanadsx', inLink: 'https://linkedin.com/in/joão-victor-santana-2539a6365' }
];

export default function Integrantes() {
    useEffect(() => {
        document.title = "Integrantes";
      }, []);

  const linkClasses = "flex-1 flex justify-center items-center gap-4 border-2 border-[var(--cor-link-borda)] text-center rounded-lg text-lg font-semibold p-3 text-[var(--cor-link-texto)] bg-white/80 backdrop-blur-sm no-underline transition-all hover:bg-[var(--cor-link-borda)] hover:text-white";

  return (
    <main className="bg-gradient-to-r from-[var(--cor-primaria-clara)] to-[var(--cor-primaria)] py-10 min-h-screen">
      <h1 className="text-4xl text-white font-bold text-center mb-10">Integrantes ByteCode</h1>

      <section className="flex flex-wrap justify-center items-start gap-8 px-4">
        {integrantes.map(integrante => (
          <div key={integrante.id} className="flex flex-col items-center text-white gap-4 w-full max-w-xs md:max-w-sm xl:max-w-md">
            <h3 className="text-lg font-bold text-center">{integrante.nome}<br/>{integrante.rm}</h3>
            <img src={integrante.foto} alt={`Integrante ${integrante.nome}`} className="w-full h-auto rounded-[var(--raio-borda-card)] shadow-[var(--sombra-card)] border-2 border-[var(--cor-destaque)]" />
            <div className="flex justify-center gap-4 w-full">
                <a href={integrante.ghLink} className={linkClasses}><img src={github} alt="Github" className="w-6 h-6"/> Github</a>
                <a href={integrante.inLink} className={linkClasses}><img src={linkedin} alt="LinkedIn" className="w-6 h-6"/> LinkedIn</a>
            </div>
          </div>
        ))}
      </section>

      <div className="relative top-6 h-1 bg-white w-11/12 mx-auto mt-10" />
    </main>
  );
}