import React from "react";
import { useLocation } from "react-router-dom";
import { doctors } from "../BCFederations/HealthCare";
import { useSelector } from "react-redux";
import rating from "../../assets/svg/rating.svg";

const HCDetail = () => {
  const location = useLocation();
  const { id } = location.state;
  const data = doctors.find((d) => d.id === id);
  const prefLang = useSelector((state: any) => state.main.prefLang);

  return (
    <div className="flex items-center justify-center pt-9">
      <div className="max-w-[1100px] flex justify-between w-full">
        <div className="flex flex-col gap-2">
          <img
            src={data?.imagePath}
            className="w-[210px] h-[235px] object-cover object-center"
          />
          <div className="flex justify-between items-center">
            <p className="font-sofiasans text-base flex items-center gap-2 h-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                className="w-[18px] h-4"
              >
                <path
                  d="M13.2931 8.616C13.2931 10.4371 11.8214 11.9088 10.0003 11.9088C8.17912 11.9088 6.70752 10.4371 6.70752 8.616C6.70752 6.79484 8.17912 5.32324 10.0003 5.32324C11.8214 5.32324 13.2931 6.79484 13.2931 8.616Z"
                  stroke="#0088FF"
                  stroke-opacity="0.4"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 16.2223C13.2468 16.2223 16.2729 14.3092 18.3792 10.998C19.2069 9.70109 19.2069 7.52122 18.3792 6.22432C16.2729 2.91313 13.2468 1 10 1C6.75319 1 3.72713 2.91313 1.62085 6.22432C0.793051 7.52122 0.793051 9.70109 1.62085 10.998C3.72713 14.3092 6.75319 16.2223 10 16.2223Z"
                  stroke="#0088FF"
                  stroke-opacity="0.4"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {35.834}
            </p>
            <img src={"/images/bcfdetail/socials.png"} />
          </div>
        </div>
        <div className="max-w-[850px] w-full flex flex-col">
          <p className="font-oswald text-[50px] text-[#0088FF]">{data?.name}</p>
          <div className="font-sofiasans text-3xl">
            <p>
              {prefLang === "Tm"
                ? `Ýaşy: ${data?.age}`
                : `Возраст: ${data?.age}`}
            </p>
            <p>
              {prefLang === "Tm"
                ? `Iş ýeri: ${data?.workAt}`
                : `Место работы: ${data?.workAt}`}
            </p>
            <p>
              {prefLang === "Tm"
                ? `Iş bölümi: ${data?.department}`
                : `Кафедра: ${data?.department}`}
            </p>
            <p>
              {prefLang === "Tm"
                ? `Iş tejribesi: ${data?.experience}ýyl`
                : `Опыт работы: ${data?.experience}г`}
            </p>
            <p>
              {prefLang === "Tm"
                ? `Iş wezipesi: ${data?.job}`
                : `Должность: ${data?.job}`}
            </p>
          </div>
          <div className="flex justify-between pt-10">
            <span></span>
            <img src={rating} className="h-full"/>
            <button className="bg-[#077EE6] text-white h-11 font-oswald px-4">
              {prefLang === "Tm" ? "Hemmesini görmek" : "Посмотреть все"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HCDetail;
