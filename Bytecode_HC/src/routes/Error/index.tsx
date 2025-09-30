import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Error() {
  
  useEffect(() => {
    document.title = "404 - Página não encontrada";
  }, []);

  return (
    <main 
      className="
        flex flex-col items-center justify-center 
        min-h-screen bg-gray-100 text-center p-4
      "
    >
      <div className="max-w-lg">
        <h1 
          className="
            text-8xl md:text-9xl font-extrabold 
            text-[var(--cor-primaria)]
          "
        >
          404
        </h1>
        <h2 
          className="
            mt-4 text-3xl md:text-4xl font-bold 
            text-[var(--cor-texto-principal)]
          "
        >
          Página Não Encontrada
        </h2>
        <p className="mt-4 text-base md:text-lg text-gray-600">
          Oops! Parece que a página que você está procurando não existe ou foi movida para outro local.
        </p>
        <Link 
          to="/" 
          className="
            mt-8 inline-block px-8 py-3 
            bg-[var(--cor-primaria)] text-white 
            font-bold rounded-[var(--raio-borda-nav)] 
            transition-colors duration-300 ease-in-out 
            hover:bg-[var(--cor-primaria-escura)] 
            focus:outline-none focus:ring-2 focus:ring-offset-2 
            focus:ring-[var(--cor-primaria)] no-underline
          "
        >
          Voltar para a Página Inicial
        </Link>
      </div>
    </main>
  );
}