import React, { useState } from "react";
import { registerUser } from "../api/auth";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUsername(e) {
    setUsername(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await fetch(
      "https://strangers-things.herokuapp.com/api/2206-ftb-mt-web-ft/users/register",
      {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password,
          },
        }),
      }
    )
      .then((response) => response.JSON())
      .then((result) => {
        localStorage.setItem("token", "result.data.token");
      })
      .catch(console.error);
  };

  return (
    <div>
      <h4>Register:</h4>
      <form onSubmit={handleSubmit}>
        <input
          required
          value={username}
          placeholder="USERNAME"
          onChange={handleUsername}
        />
        <input
          type="password"
          value={password}
          placeholder="PASSWORD"
          onChange={handlePassword}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
export default Register;
