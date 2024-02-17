import React, { useEffect, useState } from "react";
import userIcon from "../../../assets/svg/user.svg";
import Authentication from "./Auth";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { authDialogOpen } from "../../../redux/actions/main";
import { sp_local_user } from "../../../tools/constants";
import { IUser } from "../../../redux/interfaces/main";

const Account = () => {
  // Hooks
  const dispatch = useDispatch();
  const prefLang = useSelector((state: RootState) => state.main.prefLang);
  const [user, setUser] = useState<IUser>();
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem(sp_local_user) || "{}"));
  }, []);

  return (
    <>
      <button
        className="flex justify-center items-center gap-1 outline-none"
        onClick={() => dispatch(authDialogOpen(true))}
      >
        {localStorage.length ? (
          <p>{user?.name + " " + user?.surname}</p>
        ) : (
          <p>{prefLang === "Tm" ? "Içeri gir" : "Войти"}</p>
        )}
        <img src={userIcon} alt="" />
      </button>
      <Authentication />
    </>
  );
};

export default Account;
