import React, { useState } from "react";
import "./styles.css";
import { signIn, signUp } from "./firebase";

export default function LoginModal() {
  const [hasAccount, setHasAccount] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const getFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setFormData({ ...formData, [name]: value });
  };

  function handleUserRequest(e: React.FormEvent) {
    e.preventDefault();
    const { name, email, password } = formData;

    if (hasAccount) signIn(email, password);
    else signUp(name, email, password);
  }

  return (
    <div className="login__modal-wrapper">
      <div className="login__modal">
        <p>{hasAccount ? "Sign In" : "Sign Up"}</p>

        <form onSubmit={handleUserRequest}>
          {!hasAccount && (
            <input
              type="text"
              onChange={getFormData}
              value={formData.name}
              name="name"
              placeholder="Username"
            />
          )}
          <input
            type="text"
            onChange={getFormData}
            value={formData.email}
            name="email"
            placeholder="Email Address"
          />
          <input
            type="password"
            onChange={getFormData}
            value={formData.password}
            name="password"
            placeholder="Password"
          />
          <div className="checkbox__sec">
            <input type="checkbox" name="remember_me" id="remember_me" />
            <label htmlFor="remember_me">Remember Me</label>
          </div>
          <button>{hasAccount ? "Sign In" : "Sign Up"}</button>
        </form>
        {!hasAccount ? (
          <p>
            Already have account ,
            <span
              onClick={() => setHasAccount(true)}
              style={{ color: "red", cursor: "pointer" }}
            >
              Sign in
            </span>
          </p>
        ) : (
          <p>
            Create a new account ,{" "}
            <span
              onClick={() => setHasAccount(false)}
              style={{ color: "red", cursor: "pointer" }}
            >
              Sign Up
            </span>
          </p>
        )}
      </div>
    </div>
  );
}
