import { useEffect } from "react";
import calendario from "../../assets/img/calendario/calendario.jpg";

export default function Calendario() {
  useEffect(() => {
    document.title = "Calendário";
  }, []);

  return (
    <main className="bg-gradient-to-r from-[var(--cor-primaria-clara)] to-[var(--cor-primaria)] py-10 min-h-screen px-4">
      <h2 className="text-4xl text-white font-bold text-center">
        Nosso Calendário
      </h2>
      
      <div className="text-center my-12">
        <img 
          src={calendario} 
          alt="Calendário 2025" 
          className="
            inline-block rounded-[var(--raio-borda-caixa)]
            w-full max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-5xl
          "
        />
      </div>

      <div className="relative top-6 h-1 bg-white w-11/12 mx-auto mt-10" />
    </main>
  );
}