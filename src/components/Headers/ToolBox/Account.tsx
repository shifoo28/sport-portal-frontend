import React from "react";
import user from "./svg/user.svg";

const Account = ({ prefLang }: { prefLang: string }) => {
  return (
    <button className="flex justify-center items-center">
      <p>{prefLang === "Tm" ? "Içeri gir" : "Войти"}</p>
      <img src={user} className="pl-1" />
    </button>
  );
};

export default Account;
