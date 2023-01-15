import React from "react";
import "../App.css";

const Buttons = (props) => {
  return (
    <div className="main">
    <h1 className="title">Web 3 Auth Buttons</h1>
      <div className="container-w3a">
        <button onClick={props.getUserInfo} className="card">
          Get User Info
        </button>
        <button onClick={props.getChainId} className="card">
          Get Chain ID
        </button>
        <button onClick={props.getAccounts} className="card">
          Get Accounts
        </button>
        <button onClick={props.getBalance} className="card">
          Get Balance
        </button>
        <button onClick={props.sendTransaction} className="card">
          Send Transaction
        </button>
        <button onClick={props.signMessage} className="card">
          Sign Message
        </button>
        <button onClick={props.getPrivateKey} className="card">
          Get Private Key
        </button>
      </div>
    </div>
  );
};

export default Buttons;
