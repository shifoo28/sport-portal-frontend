import React from "react";
import user from "./svg/user.svg";

const Account = () => {
  return (
    <button className="flex justify-center items-center">
      <p>Içeri gir</p>
      <img src={user} className="pl-1"/>
    </button>
  );
};

export default Account;
