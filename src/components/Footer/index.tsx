import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import clock from "../../assets/footer/clock.svg";
import info from "../../assets/footer/info.svg";
import location from "../../assets/footer/location.svg";
import mail from "../../assets/footer/mail.svg";
import tel from "../../assets/footer/tel.svg";
import { useNavigate } from "react-router-dom";
import { ABOUTUS } from "../../tools/links";

const Footer = () => {
  const navigate = useNavigate();
  const prefLang = useSelector((state: RootState) => state.main.prefLang);

  return (
    <div className="pt-20">
      <div className="bg-[#393939] text-[#FFFFFF] flex flex-col w-full font-sofiasans">
        <div className="w-full flex mt-5">
          <div className="w-full border-b" />
          <p className="font-oswald text-2xl text-center border-b border-[#0088FF] min-w-[200px]">
            {prefLang === "Tm" ? "Habarlaşmak üçin" : "Свяжитесь с нами"}
          </p>
          <div className="w-full border-b" />
        </div>
        <div className="flex flex-col justify-between items-center mx-32 my-5 max-w-[1170px] w-full gap-5 font-sofiasans">
          {/* Information */}
          <div className="flex gap-3">
            <div className="flex justify-center items-center gap-1">
              <img src={location} alt="" />
              <p>
                {prefLang === "Tm"
                  ? "Aşgabat şäheri Atatürk köçesi Sport we Turizm işewürlik merkezi"
                  : "Улица Ататюрка, Ашхабад, Спортивно-туристический Бизнес-центр"}
              </p>
            </div>
            <div className="flex justify-center items-center gap-1">
              <img src={mail} alt="" />
              <p className="underline">sportportal-tm@olympic.tm</p>
            </div>
            <div className="flex justify-center items-center gap-1">
              <img src={tel} alt="" />
              <p>+99312123456</p>
            </div>
            <div className="flex justify-center items-center gap-1">
              <img src={clock} alt="" />
              <p>
                {prefLang === "Tm"
                  ? "Du-Ýe: 9:00 - 22:00"
                  : "Пон-Вос: 9:00 - 22:00"}
              </p>
            </div>
            <div
              className="flex justify-center items-center gap-1 cursor-pointer"
              onClick={() => navigate(ABOUTUS)}
            >
              <img src={info} alt="" />
              <p>{prefLang === "Tm" ? "Biz barada" : "О нас"}</p>
            </div>
          </div>

          {/* Mobile Apps */}
          <div className="flex h-[42px] gap-6">
            <img
              src="/images/footer/google-play.png"
              alt=""
              className="w-[138px]"
            />
            <img
              src="/images/footer/app-store.png"
              alt=""
              className="w-[138px]"
            />
          </div>

          {/* Links */}
          <img src="/icons/footer/social.png" alt="" className="h-[23px]" />

          {/* Policy */}
          <p className="text-sm">
            {prefLang === "Tm"
              ? "© Copyright 2023. Ähli hukuklar goralan."
              : "© Copyright 2023. Все права защищены."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
