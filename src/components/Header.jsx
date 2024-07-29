import { Link, NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg border-bottom">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Dev ToolKit
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/neogPrc">
                neoG prc
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/neogMcr">
                neoG MCR
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/mcr">
                MCR
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/codeSnippets">
                Code Snippets
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
