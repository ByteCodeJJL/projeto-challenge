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
  const baseLinkClasses = 
    inline-block py-2 px-4 text-sm font-bold text-white no-underline
    bg-[var(--cor-primaria)] rounded-[var(--raio-borda-nav)]
    transition-all duration-300 ease-in-out
    hover:scale-110 hover:-translate-y-1
    md:py-2 md:px-5 md:text-base
  ;

  const activeLinkClasses = 
    !bg-white !text-[var(--cor-texto-principal)] 
    border-2 border-[var(--cor-primaria-escura)]
    scale-110 -translate-y-1
  ;

  return (
    <nav>
      <ul className="flex items-center gap-2 md:gap-4">
        {navLinks.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) => 
                ${baseLinkClasses} ${isActive ? activeLinkClasses : ''}
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
