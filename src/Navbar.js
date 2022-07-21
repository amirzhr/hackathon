import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./Styles.css";
import disney from "./disney-logo.png"
import { AiOutlineHome } from "react-icons/ai";
import { TbBuildingCastle } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineInfoCircle } from "react-icons/ai";


export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="site-title">
        <img src={disney} className="img" />
      </Link>
      <ul className="menu-bar">
        <CustomLink to="/">
          <AiOutlineHome />
        </CustomLink>
        <CustomLink to="/Characters">
          <TbBuildingCastle />
        </CustomLink>
        <CustomLink to="/Favourites">
          <AiOutlineHeart />
        </CustomLink>
        <CustomLink to="/About">
          <AiOutlineInfoCircle />
        </CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path:resolvedPath.pathname, end:true})
  const path = window.location.pathname;
  return (
    <li className={path === to ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
