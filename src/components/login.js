import React from 'react';

const LoginPage = () => {
  return (
    <div className="main-div">
      <h1 className="wlcm-head">WELCOME TO GKSB !!</h1>
      <div className="login-div">
        <h2 style={{ color: 'white' }}>LOGIN</h2>
        <div className="input-div">
          <input type="email" placeholder="Enter Email Id"></input>
          <input type="text" placeholder="Enter Password"></input>
        </div>
        <div className="btn-div">
          <button className="btn">Sign-In</button>
          <button className="btn">Sign-Up</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
