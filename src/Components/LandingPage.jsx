import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
  const clickLogout = () => {
    localStorage.removeItem("token");
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav className="navbar navbar-expand-lg bg-light">
              <div className="container-fluid">
                <NavLink className="navbar-brand" href="#">
                  Logo
                </NavLink>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        className="nav-link active"
                        aria-current="page"
                        to={"/Home"}
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link active"
                        aria-current="page"
                        to={"/Contact"}
                      >
                        Contact
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to={"/Product"}
                        className="nav-link active"
                        aria-current="page"
                      >
                        Products
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link active"
                        aria-current="page"
                        to={"/Photos"}
                      >
                        photos
                      </NavLink>
                    </li>
                  </ul>
                  <NavLink to="/Register">
                    <button className="btn btn-outline-success">
                      Register
                    </button>
                  </NavLink>
                  <NavLink to={"/Login"}>
                    <button
                      className="btn btn-outline-success"
                      style={{ marginLeft: "20px" }}
                    >
                      Login
                    </button>
                  </NavLink>
                    <NavLink to={""}>
                      <button
                        className="btn btn-outline-success"
                        style={{ marginLeft: "20px" }}
                        onClick={clickLogout}
                      >
                        logout
                      </button>
                    </NavLink>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
