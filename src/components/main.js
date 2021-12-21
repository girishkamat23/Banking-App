import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Profile from './profile';
import Deposit from './deposit';
import Withdraw from './withdraw';
import Summary from './summary';
import { Routes } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className="main-div">
      <div>
        <h1 className="wlcm-head">DASHBOARD</h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}>
          <button>Logout</button>
        </div>
        {/* <i class="fas fa-sign-out-alt"></i> */}
      </div>
      <div className="link-div">
        <NavLink className="link" activeclassname="active" to="/" id="Profile">
          Profile
        </NavLink>
        <NavLink className="link" to="/deposit" id="Deposit">
          Deposit
        </NavLink>
        <NavLink className="link" to="/withdraw" id="Withdraw">
          Withdraw
        </NavLink>
        <NavLink className="link" to="/summary" id="Summary">
          Summary
        </NavLink>
      </div>
      <Routes>
        <Route path="/" element={<Profile />}></Route>
        <Route path="/deposit" element={<Deposit />}></Route>
        <Route path="/withdraw" element={<Withdraw />}></Route>
        <Route path="/summary" element={<Summary />}></Route>
      </Routes>
    </div>
  );
};

export default MainPage;
