import React, { useState } from "react";
import user from "../../../assets/svg/user.svg";
import Authentication from "./Auth";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const Account = () => {
  // Hooks
  const [open, setOpen] = useState(false);
  const prefLang = useSelector((state: RootState) => state.main.prefLang);

  return (
    <>
      <button
        className="flex justify-center items-center gap-1 outline-none"
        onClick={() => setOpen(true)}
      >
        <p>{prefLang === "Tm" ? "Içeri gir" : "Войти"}</p>
        <img src={user} alt="" />
      </button>
      <Authentication setOpen={setOpen} open={open} prefLang={prefLang} />
    </>
  );
};

export default Account;
