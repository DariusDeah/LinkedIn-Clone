import React, { ChangeEvent, MouseEventHandler, useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import userSlice, { login } from "../../redux/userSlice";

export type User = {
  name: string;
  email: string;
  profilePicture: string;
  password?: string;
};

function Login() {
  //State hooks
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const dispatch = useDispatch();

  //handlerFunctions
  const handleInputChange = (
    inputName: "email" | "name" | "password" | "profilePicture",
    e: any
  ) => {
    const inputStateFunctions = {
      name: setName,
      email: setEmail,
      password: setPassword,
      profilePicture: setProfilePicture,
    };
    inputStateFunctions[inputName](e.target.value);
  };

  const handleSignIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(
      login({
        name,
        email,
        password,
        profilePicture,
      })
    );
  };

  return (
    <div className="login">
      <div className="login__logo">
        <h1>Linked</h1>
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt="logo"
        />
      </div>
      <form className="login__form">
        <input
          type="text"
          placeholder="Name (required if registering)"
          value={name}
          name="name"
          onChange={(e) => handleInputChange("name", e)}
        />
        <input
          type="text"
          value={profilePicture}
          placeholder="profile pic url (optional)"
          name="profile-pic"
          onChange={(e) => handleInputChange("profilePicture", e)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          autoComplete="current-email"
          name="email"
          onChange={(e) => handleInputChange("email", e)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          name="password"
          autoComplete="current-password"
          onChange={(e) => handleInputChange("password", e)}
        />
        <button
          className="login__btn"
          type="submit"
          hidden={name.length <= 1}
          onClick={handleSignIn}
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Login;
