import React from "react";
import { useLocation } from "react-router-dom";
import rating from "../../../assets/svg/rating.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const AthleteDetail = () => {
  // useSelector
  const prefLang = useSelector((state: RootState) => state.main.prefLang);
  const { state } = useLocation();

  // Operation
  const { athleteId, federationId } = state;

  return (
    <div className="mx-40 flex pt-14 justify-between">
      <div className="flex flex-col gap-2">
        <img
          src="/images/bcfdetail/rm.jfif"
          className="w-[210px] h-[235px] object-cover object-center"
        />
        <div className="flex justify-between w-full items-center">
          <div className="flex gap-1 items-center">
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
            <p className="font-sofiasans text-base h-max">35.328</p>
          </div>
          <img src="/images/bcfdetail/socials.png" />
        </div>
      </div>
      <div className="max-w-[870px] w-full flex flex-col gap-5">
        <div className="flex justify-between">
          <p className="font-oswald text-[50px] text-[#0088FF] uppercase">
            RUSLAN MINGAZOW
          </p>
          <img src="" alt="" />
        </div>
        <div className="font-sofiasans text-2xl">
          <p>Ýaşy: 31 </p>
          <p>Doglan ýeri: Aşgabat</p>
          <p>Iş tejribesi: 15 ýyl</p>
          <p>Sport derejesi: Halkara derejeli sport ussady</p>
          <div className="flex justify-between">
            <p>Işlän ýerleri:</p>
            <div className="w-[720px]">
              <p>2007-2009Aşgabat </p>
              <p>2009-2014Skonto Rīga </p>
              <p>2014-2016Jablonec</p>
              <p>2016-2019Slavia Prague </p>
              <p>2017→ Mladá Boleslav </p>
              <p>2018-2019→ Příbram</p>
              <p>2019-2020-Irtysh Pavlodar 2020-Shakhter Karagandy </p>
              <p>2021-2022Caspiy</p>
              <p>2022-Kitchee</p>
            </div>
          </div>
          <div className="flex justify-between">
            <p>Baýraklary:</p>
            <div className="w-[720px]">
              <p>2008-Türkmenistanyň çempiony </p>
              <p>2008-Türkmenistanyň Superkubok ýeňijisi </p>
              <p>2010-Latwiýanyň çempiony </p>
              <p>2012-2013 Latwiýa kubok kümüş medal ýeňijisi </p>
              <p>2013-Latwiýanyň Superkubok ýeňijisi </p>
              <p>2014/15-2015/16 Çehiýanyň kubok finalisti </p>
              <p>2016/17-Çehiýanyň çempiony</p>
              <p>2015-Türkmenistanyň iň gowy futbolçysy </p>
              <p>2022/23-Hong Kong Premýer ligasynyň iň gowy futbolçysy</p>
            </div>
          </div>
          <div className="flex justify-between">
            <p>Iş wezipesi:</p>
            <div className="w-[720px]">
              <p>Milli futbol toparynyň oýunçysy</p>
              <p>Hong Kong Kitchee toparynyň hüjümçisi</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between pt-3">
          <p className="bg-[#CAE4D6] text-[#00843D] uppercase text-[32px] px-5 rounded-sm">
            Milli
          </p>
          <img src={rating} className="h-full" />
          <button className="bg-[#077EE6] text-white font-oswald text-lg px-3">
            {prefLang === "Tm" ? "Hemmesini görmek" : "Посмотреть все"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AthleteDetail;
