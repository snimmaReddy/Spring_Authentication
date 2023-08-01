import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { Signup } from "./Signup";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div class="flex items-center justify-center h-screen">
      <div>
        <h2 class="text-center text-5xl font-serif pb-16">Login</h2>
        <form class="" onSubmit={handleLogin}>
          <div class="text-center font-serif pb-8">
            <input
              className="w-[350px] h-12 p-3 bg-gray-200 text-xl focus:bg-white focus:ring focus:ring-blue-300 rounded-md "
              type="email"
              value={email}
              placeholder="Username"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div class="text-center font-serif pb-8 ">
            <input
              className="w-[350px] h-12 p-3 bg-gray-200 text-xl focus:bg-white focus:ring focus:ring-blue-300 rounded-md "
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div class="text-center flex justify-between text-lg font-serif pb-8 ">
            <a href="/Signup">Register</a>
            <a href="/ForgotPassword">Forgot password</a>
          </div>
          <div className="text-center text-2xl font-serif pb-16">
            <button
              class="px-8 bg-slate-300 border-transparent border-2 rounded-md hover:text-black hover:border-black hover:bg-purple-300"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
