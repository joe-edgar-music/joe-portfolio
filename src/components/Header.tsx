import { Link } from "react-router";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = {
    HOME: "/",
    ABOUT: "/about",
    PORTFOLIO: "/portfolio",
    LISTEN: "/listen",
    CONTACT: "/contact",
  };

  return (
    <header className="flex flex-col w-full">
      <div className="flex flex-row w-full items-center justify-between px-4 py-3">
        <Link to="/">
          <h1 className="text-3xl tracking-widest">JOE EDGAR</h1>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex flex-row justify-content space-x-4">
            {Object.entries(links).map(([name, path]) => (
              <li key={path}>
                <Link to={path}>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          ☰
        </button>

      </div>

      {menuOpen &&
        <nav className="flex md:hidden pb-4">
          <ul className="flex flex-col space-y-4 px-4 text-left">
            {Object.entries(links).map(([name, path]) => (
              <li key={path}>
                <Link to={path}>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      }
    </header>
  );
}