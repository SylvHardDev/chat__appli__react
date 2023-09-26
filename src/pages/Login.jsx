import React from "react";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chan Chat</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sing in</button>
        </form>
        <p>Don't have account ? Register</p>
      </div>
    </div>
  );
};

export default Login;
