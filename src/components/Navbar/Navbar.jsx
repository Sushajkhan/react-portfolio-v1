import { Link } from "react-router-dom";

import "./navbar.css";

const NavBar = (props) => {
  const { active } = props;

  return (
    <>
      <div className="nav-container">
        <nav className="navbar">
          <div className="nav-background">
            <ul className="nav-list">
              <li
                className={active === "home" ? "nav-item active" : "nav-item"}
              >
                <Link to="/">Home</Link>
              </li>
              <li
                className={active === "about" ? "nav-item active" : "nav-item"}
              >
                <Link to="/about">About</Link>
              </li>
              <li
                className={
                  active === "projects" ? "nav-item active" : "nav-item"
                }
              >
                <Link to="/projects">Projects</Link>
              </li>

              <li
                className={
                  active === "contact" ? "nav-item active" : "nav-item"
                }
              >
                <Link to="/contact">Contact</Link>
              </li>
              <li
                className={active === "resume" ? "nav-item active" : "nav-item"}
              >
                <Link to="https://drive.google.com/file/d/10G0n5noEvIbnUPX0ZJM24dZ6Yd9x9fEa/view?usp=drive_link">
                  Resume
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
