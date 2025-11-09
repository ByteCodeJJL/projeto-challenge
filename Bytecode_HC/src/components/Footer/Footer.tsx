export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
        w-full bg-white 
        text-gray-800 border-t border-gray-200 shadow-inner
        py-4 md:py-6
      "
      aria-label="Rodapé do site"
    >
      <div
        className="
          max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
          flex flex-col md:flex-row items-center justify-between gap-2
          text-center md:text-left
        "
      >
        <nav
          aria-label="Links institucionais"
          className="flex flex-wrap justify-center md:justify-start gap-3 text-sm text-gray-600"
        >
          <a href="#" className="hover:text-[var(--cor-primaria)] transition-colors">
            Sobre nós
          </a>
          <span className="hidden md:inline text-gray-400">|</span>
          <a href="#" className="hover:text-[var(--cor-primaria)] transition-colors">
            Ouvidoria
          </a>
          <span className="hidden md:inline text-gray-400">|</span>
          <a href="#" className="hover:text-[var(--cor-primaria)] transition-colors">
            Imprensa
          </a>
          <span className="hidden md:inline text-gray-400">|</span>
          <a href="#" className="hover:text-[var(--cor-primaria)] transition-colors">
            Trabalhe conosco
          </a>
        </nav>

        <p className="text-xs sm:text-sm text-gray-500 mt-2 md:mt-0">
          Direitos autorais © {currentYear} — <strong>ByteCodeHC</strong> | Hospital das Clínicas
        </p>
      </div>
    </footer>
  );
}