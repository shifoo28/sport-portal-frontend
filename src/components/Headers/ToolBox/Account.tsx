import React from "react";
import user from "./svg/user.svg";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../../../tools/links";

const Account = ({ prefLang }: { prefLang: string }) => {
  const navigate = useNavigate();

  return (
    <button
      className="flex justify-center items-center gap-1"
      onClick={() => navigate(LOGIN)}
    >
      <p>{prefLang === "Tm" ? "Içeri gir" : "Войти"}</p>
      <img src={user} className="" />
    </button>
  );
};

export default Account;
