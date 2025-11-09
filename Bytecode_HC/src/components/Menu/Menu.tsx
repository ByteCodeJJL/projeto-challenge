import { NavLink } from "react-router-dom";

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/integrantes', label: 'Integrantes' },
  { path: '/contato', label: 'Contato' },
  { path: '/faq', label: 'FAQ' },
  { path: '/teleconsulta', label: 'Teleconsulta' },
  { path: '/calendario', label: 'Calendário' },
  { path: '/sobre', label: 'Sobre' },
  { path: '/acesso', label: 'Acesse' },
];

export default function Menu() {
  const baseLinkClasses = `
    inline-block py-2 px-4 md:py-2 md:px-5
    text-sm md:text-base font-semibold text-white
    no-underline rounded-[var(--raio-borda-nav)]
    bg-[var(--cor-primaria)]
    transition-all duration-300 ease-in-out
    hover:scale-110 hover:-translate-y-1 hover:shadow-md
    focus:outline-none focus:ring-2 focus:ring-[var(--cor-primaria-escura)]
  `;

  const activeLinkClasses = `
    !bg-white !text-[var(--cor-texto-principal)]
    border-2 border-[var(--cor-primaria-escura)]
    scale-110 -translate-y-1 shadow-md
  `;

  return (
    <nav
      aria-label="Menu principal"
      className="flex justify-center items-center"
    >
      <ul
        className="
          flex flex-wrap items-center justify-center
          gap-2 md:gap-4
          text-center
        "
      >
        {navLinks.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `${baseLinkClasses} ${isActive ? activeLinkClasses : ""}`
              }
              end
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}