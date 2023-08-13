import React from "react";

interface IE {
  id?: number;
  president?: string;
  leader?: string;
  creation?: string;
  location?: string;
  tel?: string;
  fax?: string;
  email?: string;
  web?: string;
}

const data = [
  {},
  {},
  {},
  {
    president: "Arslan Kyýasowiç Aynazarow",
    leader: "Mergen Guwançmyradowiç Orazow",
    creation: "1992-nji ýyl",
    location: "Aşgabat şäheri, A.Nyýazow köçe, 245 jaý",
    tel: "(+993 12) 36-26-60",
    fax: "(+993 12) 36-34-33",
    email: "tkm@the-afc.com",
    web: "http://tff.com.tm/ http://www.jankoyer.com.tm/",
  },
  {},
  {},
  {},
];

const Sports = ({ open }: { open: number }) => {
  return (
    <div
      className={`w-full h-max flex justify-between p-8 font-sofiasans text-xl gap-10`}
    >
      <div className="flex w-full">
        <div className="flex flex-col justify-between w-full">
          <p>Prezidenti: {data[open]?.president}</p>
          <p>Baş tälimçi: {data[open]?.leader}</p>
          <p>Döredilen ýyly: {data[open]?.creation}</p>
          <p>Ýerleşýän ýeri: {data[open]?.location}</p>
        </div>
        <div className="h-[150px] border-r border-[#40A6FF]" />
      </div>
      <div className="flex flex-col justify-between w-full">
        <p>Telefon: {data[open]?.tel}</p>
        <p>Faks: {data[open]?.fax}</p>
        <p>E-mail: {data[open]?.email}</p>
        <p>Web: {data[open]?.web}</p>
      </div>
    </div>
  );
};

export default Sports;
