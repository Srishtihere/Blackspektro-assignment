import { NavLink } from "react-router-dom";
import navlogo from "../../assets/logo.png";

export default function AppHeader() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <NavLink className="nav-link" to="/">
          <span className="navbar-brand">
            <img
              src={navlogo}
              alt="ashroy logo"
              height={"100%"}
              width={"40px"}
              className="rounded-circle me-2"
            />
            Organization X
          </span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Profile
              </a>
              <ul className="dropdown-menu dropdown-menu-left">
                <li>
                  <NavLink to="/myProfile" className="dropdown-item">
                    My Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/editProfile" className="dropdown-item">
                    edit Profile
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link d-flex justify-content-center"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link d-flex justify-content-center"
                to="/EmployeeList"
              >
                Employees
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
