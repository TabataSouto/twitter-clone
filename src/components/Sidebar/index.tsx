import {
  House,
  Hash,
  Bell,
  Envelope,
  BookmarkSimple,
  FileText,
  User,
  DotsThreeCircle,
} from "phosphor-react";
import tweeterLogo from "../../assets/logo-twitter.svg";
import "./style.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <img className="logo" src={tweeterLogo} alt="logo do Twitter" />
      <nav className="main-navigation">
        <NavLink to="/">
          <House weight="fill" />
          Página inicial
        </NavLink>
        <a href="">
          <Hash />
          Explorar
        </a>
        <a href="">
          <Bell />
          Notificações
        </a>
        <a href="">
          <Envelope />
          Mensagens
        </a>
        <a href="">
          <FileText />
          Listas
        </a>
        <a href="">
          <BookmarkSimple />
          Itens salvos
        </a>
        <a href="">
          <User />
          Perfil
        </a>
        <a href="">
          <DotsThreeCircle />
          Mais
        </a>
      </nav>
      <button className="new-tweet" type="button">
        Tweet
      </button>
    </aside>
  );
};

export default Sidebar;
