import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./Styles.css";
import disney from "./disney-logo.png"


export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="site-title">
        <img src={disney} />
      </Link>
      <ul className="menu-bar">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/Characters">Characters</CustomLink>
        <CustomLink to="/Favourites">Favourites</CustomLink>
        <CustomLink to="/About">About</CustomLink>
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
