import React, { useState } from "react";
import { Signup } from "./Signup";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div class="text-center mt-40 ">
      <h2 class="text-2xl p-4 ">Login Page</h2>
      <form class="text-2xl p-4 " onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button class="text-2xl p-4" type="submit">
          Login
        </button>
      </form>
      <a href="/Signup">Register</a>
    </div>
  );
};
