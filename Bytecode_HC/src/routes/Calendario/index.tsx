import { useEffect } from "react";
import calendario from "../../assets/img/calendario/calendario.jpg";

export default function Calendario() {
  useEffect(() => {
    document.title = "Calendário";
  }, []);

  return (
    <>

      <main className="flex flex-col items-center justify-center bg-gradient-to-r from-[var(--cor-primaria-clara)] to-[var(--cor-primaria)] py-10 min-h-screen px-6 text-center">
        <h2 className="text-4xl text-white font-bold mb-6">
          Nosso Calendário de Atividades 2025
        </h2>

        <div className="my-10">
          <img
            src={calendario}
            alt="Calendário com as principais atividades e eventos do Hospital das Clínicas em 2025"
            className="inline-block rounded-[var(--raio-borda-caixa)] shadow-lg
                       w-full max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl"
          />
          <p className="text-white mt-4 text-lg font-medium">
            Acompanhe nossos eventos, teleconsultas e campanhas de saúde!
          </p>
        </div>

        <div className="relative top-6 h-1 bg-white w-11/12 mx-auto mt-10 rounded-full opacity-70" />
      </main>

    </>
  );
}