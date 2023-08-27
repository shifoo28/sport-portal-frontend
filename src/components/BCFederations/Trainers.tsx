import React from "react";
import rating from "./svg/rating.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const data = [
  {
    id: 0,
    name: "Mergen Orazow",
    yygyndy: "Milli",
    rating: 0.0,
    imgLink: "/images/federations/trainer_1.jfif",
    info: {
      age: 38,
      job: "Milli erkek futbol toparynyň baş tälimçisi",
      home: "Bekrewe, Aşgabat",
      sportLevel: "Halkara derejeli tälimçi",
      experience: 16,
    },
  },
  {
    id: 0,
    name: "Mergen Orazow",
    yygyndy: "Milli",
    rating: 0.0,
    imgLink: "/images/federations/trainer_1.jfif",
    info: {
      age: 38,
      job: "Milli erkek futbol toparynyň baş tälimçisi",
      home: "Bekrewe, Aşgabat",
      sportLevel: "Halkara derejeli tälimçi",
      experience: 16,
    },
  },
  {
    id: 0,
    name: "Mergen Orazow",
    yygyndy: "Milli",
    rating: 0.0,
    imgLink: "/images/federations/trainer_1.jfif",
    info: {
      age: 38,
      job: "Milli erkek futbol toparynyň baş tälimçisi",
      home: "Bekrewe, Aşgabat",
      sportLevel: "Halkara derejeli tälimçi",
      experience: 16,
    },
  },
  {
    id: 0,
    name: "Mergen Orazow",
    yygyndy: "Milli",
    rating: 0.0,
    imgLink: "/images/federations/trainer_1.jfif",
    info: {
      age: 38,
      job: "Milli erkek futbol toparynyň baş tälimçisi",
      home: "Bekrewe, Aşgabat",
      sportLevel: "Halkara derejeli tälimçi",
      experience: 16,
    },
  },
  {
    id: 0,
    name: "Mergen Orazow",
    yygyndy: "Milli",
    rating: 0.0,
    imgLink: "/images/federations/trainer_1.jfif",
    info: {
      age: 38,
      job: "Milli erkek futbol toparynyň baş tälimçisi",
      home: "Bekrewe, Aşgabat",
      sportLevel: "Halkara derejeli tälimçi",
      experience: 16,
    },
  },
  {
    id: 0,
    name: "Mergen Orazow",
    yygyndy: "Milli",
    rating: 0.0,
    imgLink: "/images/federations/trainer_1.jfif",
    info: {
      age: 38,
      job: "Milli erkek futbol toparynyň baş tälimçisi",
      home: "Bekrewe, Aşgabat",
      sportLevel: "Halkara derejeli tälimçi",
      experience: 16,
    },
  },
  {
    id: 0,
    name: "Mergen Orazow",
    yygyndy: "Milli",
    rating: 0.0,
    imgLink: "/images/federations/trainer_1.jfif",
    info: {
      age: 38,
      job: "Milli erkek futbol toparynyň baş tälimçisi",
      home: "Bekrewe, Aşgabat",
      sportLevel: "Halkara derejeli tälimçi",
      experience: 16,
    },
  },
  {
    id: 0,
    name: "Mergen Orazow",
    yygyndy: "Milli",
    rating: 0.0,
    imgLink: "/images/federations/trainer_1.jfif",
    info: {
      age: 38,
      job: "Milli erkek futbol toparynyň baş tälimçisi",
      home: "Bekrewe, Aşgabat",
      sportLevel: "Halkara derejeli tälimçi",
      experience: 16,
    },
  },
  {
    id: 0,
    name: "Mergen Orazow",
    yygyndy: "Milli",
    rating: 0.0,
    imgLink: "/images/federations/trainer_1.jfif",
    info: {
      age: 38,
      job: "Milli erkek futbol toparynyň baş tälimçisi",
      home: "Bekrewe, Aşgabat",
      sportLevel: "Halkara derejeli tälimçi",
      experience: 16,
    },
  },
  {
    id: 0,
    name: "Mergen Orazow",
    yygyndy: "Milli",
    rating: 0.0,
    imgLink: "/images/federations/trainer_1.jfif",
    info: {
      age: 38,
      job: "Milli erkek futbol toparynyň baş tälimçisi",
      home: "Bekrewe, Aşgabat",
      sportLevel: "Halkara derejeli tälimçi",
      experience: 16,
    },
  },
  {
    id: 0,
    name: "Mergen Orazow",
    yygyndy: "Milli",
    rating: 0.0,
    imgLink: "/images/federations/trainer_1.jfif",
    info: {
      age: 38,
      job: "Milli erkek futbol toparynyň baş tälimçisi",
      home: "Bekrewe, Aşgabat",
      sportLevel: "Halkara derejeli tälimçi",
      experience: 16,
    },
  },
  {
    id: 0,
    name: "Mergen Orazow",
    yygyndy: "Milli",
    rating: 0.0,
    imgLink: "/images/federations/trainer_1.jfif",
    info: {
      age: 38,
      job: "Milli erkek futbol toparynyň baş tälimçisi",
      home: "Bekrewe, Aşgabat",
      sportLevel: "Halkara derejeli tälimçi",
      experience: 16,
    },
  },
  {
    id: 0,
    name: "Mergen Orazow",
    yygyndy: "Milli",
    rating: 0.0,
    imgLink: "/images/federations/trainer_1.jfif",
    info: {
      age: 38,
      job: "Milli erkek futbol toparynyň baş tälimçisi",
      home: "Bekrewe, Aşgabat",
      sportLevel: "Halkara derejeli tälimçi",
      experience: 16,
    },
  },
];

const Trainers = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const prefLang = useSelector((state: any) => state.main.prefLang);

  return (
    <div className="flex flex-col gap-[5px]">
      <div className="pt-8 px-8">
        <div className="w-full h-[395px] grid grid-cols-3 gap-4 justify-between overflow-auto">
          {data.map((trainer) => {
            return (
              <div
                className="max-w-[345px] h-[120px] flex border border-[#0088FF] scroll-mt-6"
                key={trainer.id}
              >
                <img src={trainer.imgLink} className="object-cover w-[95px]" />
                <div className="pl-2 font-sofiasans flex flex-col justify-around w-full">
                  <p className="text-[#0F1A42] font-semibold">{trainer.name}</p>
                  <div className="font-sofiasans text-[10px] text-[#182135]">
                    <p className="h-[14px] flex items-center">
                      Ýaşy: {trainer.info.age}
                    </p>
                    <p className="h-[14px] flex items-center">
                      Doglan ýeri: {trainer.info.home}
                    </p>
                    <p className="h-[14px] flex items-center">
                      Sport derejesi: {trainer.info.sportLevel}
                    </p>
                    <p className="h-[14px] flex items-center">
                      Iş wezipesi: {trainer.info.job}
                    </p>
                    <p className="h-[14px] flex items-center">
                      Iş tejribesi: {trainer.info.experience} ýyl
                    </p>
                  </div>
                  <div className="flex w-full justify-between">
                    <div className="bg-[#CCE6D8] text-[#00843D] px-2 flex items-center justify-center rounded-md">
                      MILLI
                    </div>
                    <img src={rating} className="" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="px-[48px] py-1 flex justify-end">
        <button
          className="bg-[#077EE6] text-white h-[44px] w-[148px] font-oswald text-base"
          onClick={() => {
            navigate(location.pathname + "/all");
          }}
        >
          {prefLang === "Tm" ? "Hemmesini görmek" : "Посмотреть все"}
        </button>
      </div>
    </div>
  );
};

export default Trainers;
