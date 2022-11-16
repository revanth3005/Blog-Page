import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "../App.css";

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const formOnSubmit = (e) => {
       e.preventDefault()
    localStorage.email = user.email;
    const url = "http://127.0.0.1:3001/create-user";
    axios
      .post(url, user, {
        header: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response);
        navigate("/Verify");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onChangehandel = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <h3 className="mt-4" style={{'textAlign':'center'}}>Register</h3>
          <div className="col-md-12 adjust">
            <form onSubmit={formOnSubmit}>
              <div className="col-md-3 mt-4">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control "
                  required
                  style={{ width: "400px" }}
                  placeholder="Name"
                  onChange={onChangehandel}
                  value={user.name}
                />
              </div>
              <div className="col-md-3 mt-4">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  required
                  style={{ width: "400px" }}
                  placeholder="Email📧"
                  onChange={onChangehandel}
                  value={user.email}
                />
              </div>
              <div className="col-md-3 mt-4">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  required
                  style={{ width: "400px" }}
                  placeholder="Password"
                  onChange={onChangehandel}
                  value={user.password}
                />
              </div>
              <div className="col-md-3 mt-4">
                <input
                  type="submit"
                  value="Register"
                  className="btn btn-primary"
                  style={{ marginLeft: "150px" }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
