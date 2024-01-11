import React from "react";
import { IFSports } from "../../redux/interfaces/federations";

const Sports = ({ data, prefLang }: { data: IFSports; prefLang: string }) => {
  let decoration = "";
  if (data?.presidentTm.includes("Arslan")) decoration = "line-through";

  return (
    <div
      className={`w-full flex justify-between p-8 font-sofiasans text-xl gap-10`}
    >
      <div className="flex w-full">
        <div className="flex flex-col justify-between w-full">
          <p className={`${decoration}`}>
            Prezidenti:{" "}
            {prefLang === "Tm" ? data?.presidentTm : data?.presidentRu}
          </p>
          <p>
            Baş tälimçi: {prefLang === "Tm" ? data?.leaderTm : data?.leaderRu}
          </p>
          <p>Döredilen ýyly: {data?.founded}</p>
          <p>
            Ýerleşýän ýeri:{" "}
            {prefLang === "Tm" ? data?.locationTm : data?.locationRu}
          </p>
        </div>
        <div className="h-[150px] border-r border-[#40A6FF]" />
      </div>
      <div className="flex flex-col justify-between w-full">
        <p>Telefon: {data?.tel}</p>
        <p>Faks: {data?.fax}</p>
        <p>E-mail: {data?.email}</p>
        <p className="flex gap-3">
          Web:{" "}
          {data?.web.split(";").map((item, index) => {
            return (
              <a
                href={item}
                className="hover:underline"
                target="_blank"
                key={index}
                rel="noreferrer"
              >
                {item}
              </a>
            );
          })}
        </p>
      </div>
    </div>
  );
};

export default Sports;
