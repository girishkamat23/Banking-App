import React from 'react';
// import reactDom from 'react-dom';
import './App.css';
// import 'font-awesome/css/font-  .min.css';
// import LoginPage from './components/login';
import MainPage from './components/main';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  doLogin,
  depositAmount,
  withdrawAmount,
  userDetails,
} from './redux comp/actions.js';

class BankingApp extends React.Component {
  state = {
    textValue: '',
    accounts: [
      {
        id: 0,
        accountName: 'girish',
        balance: 0,
        minBal: 1000,
        email: 'girishkamat23@gmail.com',
        password: 'girish@123',
      },

      {
        id: 1,
        accountName: 'gaurish',
        balance: 0,
        minBal: 1000,
        email: 'gaurishkamat23@gmail.com',
        password: 'gaurish@123',
      },

      {
        id: 2,
        accountName: 'moiez',
        balance: 0,
        minBal: 1000,
        email: 'moiez@gmail.com',
        password: 'moiez@123',
      },
    ],
  };

  handleOnMail = (e) => {
    let mailInput = e.target.value;
    this.props.setMail(mailInput);
  };

  handleOnPass = (e) => {
    let passInput = e.target.value;
    this.props.setPass(passInput);
  };

  componentDidMount() {
    fetch('/userDetails.json')
      .then((response) => response.json())
      .then((data) => userDetails(data));
  }

  render() {
    return (
      <div>
        {/* <LoginPage></LoginPage> */}
        <BrowserRouter>
          <MainPage></MainPage>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  amount: state.amount,
  error: state.error,
  textValue: state.textValue,
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  setMail: (text) => dispatch(setMail(text)),
  setPass: (text) => dispatch(setPass(text)),
  userDetails: (data) => dispatch(userDetails(data)),
  deposit: (amt) => dispatch(depositAmount(amt)),
  withdraw: (amt) => dispatch(withdrawAmount(amt)),
  login: (email, password) => dispatch(doLogin(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BankingApp);
