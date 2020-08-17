import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [serverMessage, setServerMessage] = useState("");

  const formHandle = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    console.log(data);

    async function userLogin() {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      try {
        const res = await axios.post("/api/users/login", data, config);
        const servermsg = res.data.message;
        const serversuccess = res.data.success;
        console.log("server message", res.data);
        if (!serversuccess) {
          setServerMessage(servermsg);
        } else {
          setServerMessage("");
        }
      } catch (err) {}
    }
    userLogin();
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <div className="container">
        <div style={{ marginTop: "1em" }}>
          <h1>User Login</h1>
          <form onSubmit={formHandle}>
            <div className="form-group" style={{ marginTop: "1em" }}>
              <div style={{ width: "50%" }}>
                <label>Email ID</label>
                <input
                  required
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email..."
                  className="form-control"
                />
                <label style={{ marginTop: "1em" }}>Password</label>
                <input
                  required
                  type="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password..."
                  className="form-control"
                />
              </div>
              <p style={{ marginTop: ".5em", color: "red" }}>{serverMessage}</p>
              <input
                type="submit"
                name="Login"
                style={{ marginTop: ".5em" }}
                className="btn btn-outline-dark"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
