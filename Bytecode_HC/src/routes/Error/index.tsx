import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Error() {
  useEffect(() => {
    document.title = "404 - Página não encontrada | ByteCode HC";
  }, []);

  return (
    <>

      <main
        className="
          flex flex-col items-center justify-center
          min-h-screen bg-gradient-to-r 
          from-[var(--cor-primaria-clara)] to-[var(--cor-primaria)]
          text-center text-white px-4 py-12
        "
      >
        <section className="max-w-xl bg-white/10 backdrop-blur-sm p-10 rounded-2xl shadow-lg">
          <h1
            className="
              text-[8rem] md:text-[10rem] font-extrabold
              leading-none text-white drop-shadow-lg
            "
          >
            404
          </h1>
          <h2
            className="
              mt-4 text-3xl md:text-4xl font-bold
              text-white drop-shadow
            "
          >
            Página Não Encontrada
          </h2>
          <p className="mt-6 text-base md:text-lg text-gray-200">
            Oops! A página que você procura não existe ou foi movida.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/"
              className="
                inline-block px-8 py-3 bg-white text-[var(--cor-primaria)] 
                font-semibold rounded-[var(--raio-borda-nav)]
                hover:bg-gray-100 transition duration-300 ease-in-out
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white
              "
            >
              Voltar à Página Inicial
            </Link>

            <Link
              to="/contato"
              className="
                inline-block px-8 py-3 border-2 border-white text-white 
                font-semibold rounded-[var(--raio-borda-nav)]
                hover:bg-white hover:text-[var(--cor-primaria)] 
                transition duration-300 ease-in-out
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white
              "
            >
              Falar com Suporte
            </Link>
          </div>
        </section>
      </main>

    </>
  );
}