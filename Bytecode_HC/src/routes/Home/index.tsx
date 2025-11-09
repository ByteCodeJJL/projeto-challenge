import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import vacinacao from "../../assets/img/index/vacinacao.png";

import pediatria from "../../assets/img/index/pediatria.png";

import grupo from "../../assets/img/index/grupo.png";

import biolixo from "../../assets/img/index/biolixo.png";

import borboleta from "../../assets/img/index/borboleta.png";





export default function Home() {

  const [noticiasVisiveis, setNoticiasVisiveis] = useState<boolean>(true);

  const [animarNoticias, setAnimarNoticias] = useState<boolean>(true);



  useEffect(() => {

    document.title = "Home";

  }, []);



  const toggleNoticias = (): void => {

    if (noticiasVisiveis) {

      setAnimarNoticias(false);

      setTimeout(() => setNoticiasVisiveis(false), 300);

    } else {

      setNoticiasVisiveis(true);

      setTimeout(() => setAnimarNoticias(true), 10);

    }

  };



  return (

    <main>

      <section className="flex flex-wrap justify-center items-center gap-12 my-12 px-4">

        <div>

          <h2 className="text-4xl text-[var(--cor-texto-secundario)] mb-8 font-bold">

            SAÚDE

          </h2>



          <div className="grid grid-cols-2 gap-4">

            <Link

              to="/teleconsulta"

              className="border-2 border-[var(--cor-primaria-escura)] rounded-[var(--raio-borda-botao)] p-4 text-center text-lg text-[var(--cor-texto-secundario)] flex items-center justify-center gap-2 cursor-pointer transition-colors duration-300 hover:bg-[var(--cor-fundo-hover)] no-underline"

            >

              💻 Teleconsulta

            </Link>



            <Link

              to="/calendario"

              className="border-2 border-[var(--cor-primaria-escura)] rounded-[var(--raio-borda-botao)] p-4 text-center text-lg text-[var(--cor-texto-secundario)] flex items-center justify-center gap-2 cursor-pointer transition-colors duration-300 hover:bg-[var(--cor-fundo-hover)] no-underline"

            >

              📅 Calendário

            </Link>



            <Link

              to="/contato"

              className="border-2 border-[var(--cor-primaria-escura)] rounded-[var(--raio-borda-botao)] p-4 text-center text-lg text-[var(--cor-texto-secundario)] flex items-center justify-center gap-2 cursor-pointer transition-colors duration-300 hover:bg-[var(--cor-fundo-hover)] no-underline"

            >

              📍 Locais de Atendimento

            </Link>



            <Link

              to="/sobre"

              className="border-2 border-[var(--cor-primaria-escura)] rounded-[var(--raio-borda-botao)] p-4 text-center text-lg text-[var(--cor-texto-secundario)] flex items-center justify-center gap-2 cursor-pointer transition-colors duration-300 hover:bg-[var(--cor-fundo-hover)] no-underline"

            >

              👥 Sobre nós

            </Link>

          </div>

        </div>



        <img

          src={vacinacao}

          alt="Vacinação"

          className="mt-5 w-full max-w-lg xl:max-w-xl rounded-[var(--raio-borda-botao)] shadow-[var(--sombra-card)] border-2 border-[var(--cor-destaque)]"

        />

      </section>



      <section className="px-4 py-16">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl text-[var(--cor-texto-secundario)] mb-4 font-bold">

            NOTÍCIAS

          </h2>



          <button

            onClick={toggleNoticias}

            className="mb-8 text-white bg-[var(--cor-primaria-escura)] py-2 px-4 text-sm rounded-[var(--raio-borda-card)] shadow-[var(--sombra-card)] border-2 border-[var(--cor-destaque)] transition-colors duration-300 hover:bg-[var(--cor-primaria)]"

          >

            {noticiasVisiveis ? "Esconder Notícias" : "Mostrar Notícias"}

          </button>

        </div>



        {noticiasVisiveis && (

          <div

            className={`flex flex-wrap justify-center gap-8 transition-opacity duration-500 ${

              animarNoticias ? "opacity-100" : "opacity-0"

            }`}

          >

            <article className="text-center font-bold mb-24 w-64">

              <img

                src={pediatria}

                alt="Arte em prédio que ilustra a pediatria"

                className="rounded-[var(--raio-borda-card)] w-full h-auto shadow-[var(--sombra-card)] border-2 border-[var(--cor-destaque)] mb-4"

              />

              <p>Arte que transforma</p>

            </article>



            <article className="text-center font-bold mb-24 w-64">

              <img

                src={grupo}

                alt="Associação dos Voluntários do Hospital das Clínicas"

                className="rounded-[var(--raio-borda-card)] w-full h-auto shadow-[var(--sombra-card)] border-2 border-[var(--cor-destaque)] mb-4"

              />

              <p>AVOHC completa 60 anos de atuação</p>

            </article>



            <article className="text-center font-bold mb-24 w-64">

              <img

                src={biolixo}

                alt="Descarte de bio-lixo"

                className="rounded-[var(--raio-borda-card)] w-full h-auto shadow-[var(--sombra-card)] border-2 border-[var(--cor-destaque)] mb-4"

              />

              <p>Descarte de bio-lixo? Siga</p>

            </article>



            <article className="text-center font-bold mb-24 w-64">

              <img

                src={borboleta}

                alt="Borboleta na mão de uma mulher"

                className="rounded-[var(--raio-borda-card)] w-full h-auto shadow-[var(--sombra-card)] border-2 border-[var(--cor-destaque)] mb-4"

              />

              <p>Combate à Violência Doméstica</p>

            </article>

          </div>

        )}

      </section>



      <div className="relative top-6 h-1 bg-[var(--cor-texto-secundario)] w-11/12 mx-auto" />

    </main>

  );

}