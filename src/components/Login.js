import React, { useState } from "react";

const Login = ({ setIsLoggedIn, setUserName }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (
      userData &&
      userData.email === email &&
      userData.password === password
    ) {
      setIsLoggedIn(true);
      setUserName(userData.firstName + " " + userData.lastName);
      alert("Login successful!");
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="flex flex-col relative pt-[5%] justify-center items-center h-[100%]">
      <div className="bg-[#C8B6A6] border-8 border-double px-20 py-20 justify-center item-center h-[400px] w-[800px] ">
        <p className="justify-center items-center mb-10 relative flex text-4xl font-mono">
          Login Page
        </p>
        <form onSubmit={handleLogin}>
          <div>
            <label className="mx-4 text-[#00425A]  font-sans text-xl font-bold">
              Email:
            </label>
            <input
              className="rounded w-[60%] text-left px-2 ml-16 font-mono tracking-widest text-[#00425A] bg-[#F3DEBA]"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="mx-4 text-[#00425A]  font-sans text-xl font-bold">
              Password:
            </label>
            <input
              className="rounded w-[60%] text-left px-2 ml-16 font-mono tracking-widest text-[#00425A] bg-[#F3DEBA]"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            className="bg-[#263A29] hover:bg-[#ABC4AA] tracking-widest w-full text-white text-2xl font-bold py-2 px-4 my-2  rounded-lg"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
