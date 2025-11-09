import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import logo from '../../../public/logoHCprofile.jpg'; 
import userIcon from '../../assets/img/geral/user-icon.webp';

export default function Header() {
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

      <Link to="/acesso">
        <img 
          src={userIcon} 
          alt="Acesso do Usuário" 
          className="w-[60px] md:w-[80px] xl:w-[100px]" 
        />
      </Link>
    </header>
  );
}