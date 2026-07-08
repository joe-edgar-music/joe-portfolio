export default function Header() {
  const links = {
    HOME: "/",
    ABOUT: "/about",
    NEWS: "/news",
    PORTFOLIO: "/portfolio",
    CONTACT: "/contact",
  };

  return (
    <header className="flex flex-row items-center justify-between px-4 py-3">
      <h1 className="text-3xl tracking-widest">JOE EDGAR</h1>
      <nav>
        <ul className="flex flex-row justify-content space-x-4">
          {Object.entries(links).map(([name, path]) => (
            <li key={path}>
              <a href={path}>{name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}