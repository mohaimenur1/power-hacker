import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    console.log(userData);

    try {
      axios.post("http://localhost:5000/api/login", userData).then((log) => {
        if (log.data.success) {
          console.log(log);
          console.log(userData);
          alert("login Successfull");
        } else {
          alert("Invalid credential");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-3">Login Form</h2>
      <div className="card shadow">
        <form onSubmit={userLogin} className="mt-4 p-5">
          <div className="form-outline mb-4">
            <label className="form-label" for="form2Example1">
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="form2Example1"
              className="form-control"
            />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label" for="form2Example2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="form2Example2"
              className="form-control"
            />
          </div>

          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary btn-block mb-4">
              Sign in
            </button>
          </div>

          <div className="text-center">
            <p>
              Not a member? <Link to="/register">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
