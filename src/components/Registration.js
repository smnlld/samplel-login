import React, { useState } from "react";

const Registration = ({ handleRegistrationComplete }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("male");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegistration = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const userData = {
      firstName,
      lastName,
      gender,
      email,
      password,
    };
    localStorage.setItem("userData", JSON.stringify(userData));
    alert("Registration successful!");
    handleRegistrationComplete();
  };

  return (
    <div className="flex flex-col relative justify-center pt-[10%] items-center h-[100%]">
      <div className="bg-[#C8B6A6] border-8 border-double px-20 py-20 justify-center item-center h-[400px] w-[800px] ">
        <p className="justify-center items-center mb-10 relative flex text-4xl font-mono">
          Registration Page
        </p>
        <form onSubmit={handleRegistration}>
          <div>
            <label className="mx-4 text-[#00425A]  font-sans text-xl font-bold">
              First Name:
            </label>
            <input
            className="rounded w-[60%] text-left px-2 ml-16 font-mono tracking-widest text-[#00425A] bg-[#F3DEBA]"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="mx-4 text-[#00425A]  font-sans text-xl font-bold">
              Last Name:
            </label>
            <input
            className="rounded w-[60%] text-left px-2 ml-16 font-mono tracking-widest text-[#00425A] bg-[#F3DEBA]"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="mx-4 text-[#00425A]  font-sans text-xl font-bold">
              Gender:
            </label>

            <select className="rounded w-[60%] text-left px-2 ml-16 font-mono tracking-widest text-[#00425A] bg-[#F3DEBA]" value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
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
          <div>
            <label className="mx-4 text-[#00425A]  font-sans text-xl font-bold">
              Confirm Password:
            </label>
            <input
            className="rounded w-[50%] text-left px-2 ml-16 font-mono tracking-widest text-[#00425A] bg-[#F3DEBA]"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <button className="bg-[#263A29] hover:bg-[#ABC4AA] tracking-widest w-full text-white text-2xl font-bold py-2 px-4 my-2  rounded-lg" type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
