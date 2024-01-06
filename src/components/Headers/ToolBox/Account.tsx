import React from "react";
import user from "../../../assets/svg/user.svg";
import Authentication from "./Auth";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { authDialogOpen } from "../../../redux/actions/main";

const Account = () => {
  // Hooks
  const dispatch = useDispatch();
  const prefLang = useSelector((state: RootState) => state.main.prefLang);

  return (
    <>
      <button
        className="flex justify-center items-center gap-1 outline-none"
        onClick={() => dispatch(authDialogOpen(true))}
      >
        <p>{prefLang === "Tm" ? "Içeri gir" : "Войти"}</p>
        <img src={user} alt="" />
      </button>
      <Authentication />
    </>
  );
};

export default Account;
