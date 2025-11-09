import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Menu from "../Menu/Menu";
import logo from '../../../public/logoHCprofile.jpg'; 
import userIcon from '../../assets/img/geral/user-icon.webp';
import { useAuth } from "../../hooks/useAuth";

export default function Header() {
  const { isAuthenticated, user, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header 
      className="
        bg-white w-full h-[156px] xl:h-[180px] 
        px-4 sm:px-6 lg:px-8
        flex items-center justify-between
        shadow-md
      "
    >
      <Link to="/">
        <img 
          src={logo} 
          alt="Logo ByteCodeHC" 
          className="w-[120px] md:w-[150px] xl:w-[180px]" 
        />
      </Link>

      <Menu />

      <div className="relative" ref={dropdownRef}>
        {isAuthenticated ? (
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <img 
              src={userIcon} 
              alt={`Perfil de ${user?.nome}`} 
              className="w-[60px] md:w-[80px] xl:w-[100px] rounded-full border-2 border-[var(--cor-destaque)]" 
            />
          </button>
        ) : (
          <Link to="/acesso">
            <img 
              src={userIcon} 
              alt="Acesso do Usuário" 
              className="w-[60px] md:w-[80px] xl:w-[100px]" 
            />
          </Link>
        )}

        {showDropdown && isAuthenticated && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
            <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-200">
              <p className="font-medium">{user?.nome}</p>
              <p className="text-gray-500 text-xs">{user?.email}</p>
            </div>
            <button
              onClick={() => {
                logout();
                setShowDropdown(false);
              }}
              className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
            >
              Sair da conta
            </button>
          </div>
        )}
      </div>
    </header>
  );
}