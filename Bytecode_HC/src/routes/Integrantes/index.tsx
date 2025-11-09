import { useEffect } from "react";

import jp from "../../assets/img/integrantes/jp.jpg";
import matsubara from "../../assets/img/integrantes/matsubara.png";
import jv from "../../assets/img/integrantes/jv.png";
import github from "../../assets/img/integrantes/github.png";
import linkedin from "../../assets/img/integrantes/linkedin.png";


const integrantes = [
  {
    id: 1,
    nome: "João Pedro Pereira Camilo",
    rm: "562005 | 1TDSPY",
    foto: jp,
    ghLink: "https://github.com/Jppcamilo",
    inLink: "https://linkedin.com/in/joãopedrocamilo910b83298/",
  },
  {
    id: 2,
    nome: "Lucas Matsubara Reis",
    rm: "565020 | 1TDSPY",
    foto: matsubara,
    ghLink: "https://github.com/LucasMatsubara",
    inLink: "https://linkedin.com/in/lucasmatsubara11",
  },
  {
    id: 3,
    nome: "João Victor Santana dos Santos",
    rm: "566003 | 1TDSPY",
    foto: jv,
    ghLink: "https://github.com/Jsantanadsx",
    inLink: "https://linkedin.com/in/joão-victor-santana-2539a6365",
  },
];

export default function Integrantes() {
  useEffect(() => {
    document.title = "Integrantes";
  }, []);

  const linkClasses =
    "flex-1 flex justify-center items-center gap-2 border-2 border-[var(--cor-link-borda)] rounded-[var(--raio-borda-card)] text-base font-semibold py-2 px-3 text-[var(--cor-link-texto)] bg-white/80 backdrop-blur-sm no-underline transition-all hover:bg-[var(--cor-link-borda)] hover:text-white shadow-[var(--sombra-card)]";

  return (
    <main className="bg-gradient-to-r from-[var(--cor-primaria-clara)] to-[var(--cor-primaria)] py-12 min-h-screen px-4">
      <h1 className="text-4xl text-white font-bold text-center mb-12 drop-shadow-lg">
        Integrantes ByteCode
      </h1>

      <section
        className="flex flex-wrap justify-center gap-10"
        aria-label="Lista de integrantes da equipe ByteCode"
      >
        {integrantes.map((integrante) => (
          <article
            key={integrante.id}
            className="flex flex-col items-center text-white gap-4 w-full max-w-xs md:max-w-sm xl:max-w-md"
          >
            <h2 className="text-lg font-bold text-center leading-tight">
              {integrante.nome}
              <br />
              <span className="font-medium text-sm text-gray-200">
                {integrante.rm}
              </span>
            </h2>

            <img
              src={integrante.foto}
              alt={Foto de ${integrante.nome}}
              className="w-full h-auto rounded-[var(--raio-borda-card)] shadow-[var(--sombra-card)] border-2 border-[var(--cor-destaque)]"
              loading="lazy"
            />

            <div className="flex justify-center gap-3 w-full">
              <a
                href={integrante.ghLink}
                className={linkClasses}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={github}
                  alt="Ícone do GitHub"
                  className="w-5 h-5"
                  loading="lazy"
                />
                Github
              </a>

              <a
                href={integrante.inLink}
                className={linkClasses}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedin}
                  alt="Ícone do LinkedIn"
                  className="w-5 h-5"
                  loading="lazy"
                />
                LinkedIn
              </a>
            </div>
          </article>
        ))}
      </section>

      <div className="relative top-6 h-1 bg-white w-11/12 mx-auto mt-12 rounded-full opacity-80" />
    </main>
  );
}