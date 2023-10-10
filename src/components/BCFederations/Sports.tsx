import React from "react";
import { IFSports } from "../../redux/interfaces/federations";

const Sports = ({ data }: { data: IFSports }) => {
  return (
    <div
      className={`w-full h-max flex justify-between p-8 font-sofiasans text-xl gap-10`}
    >
      <div className="flex w-full">
        <div className="flex flex-col justify-between w-full">
          <p>Prezidenti: {data?.president}</p>
          <p>Baş tälimçi: {data?.leader}</p>
          <p>Döredilen ýyly: {data?.founded}</p>
          <p>Ýerleşýän ýeri: {data?.location}</p>
        </div>
        <div className="h-[150px] border-r border-[#40A6FF]" />
      </div>
      <div className="flex flex-col justify-between w-full">
        <p>Telefon: {data?.tel}</p>
        <p>Faks: {data?.fax}</p>
        <p>E-mail: {data?.email}</p>
        <p className="flex gap-3">
          Web:{" "}
          {data?.web.split(";").map((e, i) => {
            return (
              <a href={e} className="hover:underline" target="_blank" key={i}>
                {e}
              </a>
            );
          })}
        </p>
      </div>
    </div>
  );
};

export default Sports;
