import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import './globals.css'

export default function App() {
  return (
    <div
      className="
        flex flex-col min-h-screen 
        bg-[var(--cor-fundo-geral)] 
        text-[var(--cor-texto-principal)] 
        font-sans
      "
    >
      <Header />

      <main
        id="conteudo-principal"
        className="
          flex-grow 
          focus:outline-none 
          scroll-smooth
        "
        tabIndex={-1}
      >
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}