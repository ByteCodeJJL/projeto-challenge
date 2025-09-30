export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="
        w-full h-20 bg-white 
        text-gray-800 
        border-t border-gray-200 
        shadow-inner
      "
    >
      <div className="
        max-w-7xl h-full mx-auto px-4 sm:px-6 lg:px-8 
        flex items-center
      ">
        <p className="text-base text-gray-600">
        Sobre nós | Ouvidoria | Imprensa | Trabalhe conosco | Direitos autorais ByteCode Hospital das Clínicas &copy; {currentYear}
        </p>
      </div>
    </footer>
  );
}
