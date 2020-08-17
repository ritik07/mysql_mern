import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");

  const formHandle = (e) => {
    e.preventDefault();
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      number: number,
      password: password,
      gender: gender,
    };
    console.log(data);

    axios({
      method: "post",
      url: "/api/users/",
      data: data, // you are sending body instead
      headers: {
        // 'Authorization': `bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    setFirstName("");
    setLastName("");
    setEmail("");
    setGender("");
    setNumber("");
    setPassword("");

    // axios.post(`http://localhost:5000/api/users/`, { data }).then((res) => {
    //   console.log(res);
    //   console.log(res.data);
    // });
    // async function CreatAcoount(data) {
    //   const config = {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   };
    //   try {
    //     const res = await axios.post(
    //       "http://localhost:5000/api/users/",
    //       data,
    //       config
    //     );
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    //  CreatAcoount();
  };

  return (
    <div>
      <div className="container">
        <div style={{ marginTop: "1em" }}>
          <h1>User Signup</h1>
          <form onSubmit={formHandle}>
            <div className="form-group" style={{ marginTop: "1em" }}>
              <div style={{ width: "50%" }}>
                <label>First Name</label>
                <input
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                />
                <label style={{ marginTop: "1em" }}>Last Name</label>
                <input
                  required
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="form-control"
                  placeholder="Last Name"
                />
                <label style={{ marginTop: "1em" }}>Phone No.</label>
                <input
                  required
                  type="text"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className="form-control"
                  placeholder="Enter Phone number"
                />
                <label style={{ marginTop: "1em" }}>Email ID</label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  placeholder="Email id"
                />
                <label style={{ marginTop: "1em" }}>Password</label>
                <input
                  required
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  placeholder="Enter Phone numeber"
                />
                <label style={{ marginTop: "1em" }}>Gender</label>
                <select
                  required
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="form-control"
                >
                  <option className="form-control">Male</option>
                  <option className="form-control">Female</option>
                </select>
                <input
                  className="btn btn-outline-dark"
                  type="submit"
                  value="Submit"
                  style={{ marginTop: "1em" }}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
