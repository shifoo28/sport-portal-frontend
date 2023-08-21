import React from "react";
import rating from "./svg/rating.svg";
import { useLocation, useNavigate } from "react-router-dom";

const data = [
  {
    id: 0,
    imgLink: "/images/federations/athlete_1.jfif",
    name: "Ruslan Mingazow",
    sportType: "Futbol",
    position: "Hüjümçi",
    flagImg: "/images/federations/flag_2.png",
    club: "Kitchee",
    rating: 4.5,
    made: "MILLI",
  },
  {
    id: 1,
    imgLink: "/images/federations/athlete_2.png",
    name: "Arslanmyrat Amanow",
    sportType: "Futbol",
    position: "Ýarym goragçy",
    flagImg: "/images/federations/flag_1.png",
    club: "Ahal",
    rating: 4.5,
    made: "MILLI",
  },
  {
    id: 2,
    imgLink: "/images/federations/athlete_3.png",
    name: "Daýanç Meredow",
    sportType: "Futbol",
    position: "Ýarym goragçy",
    flagImg: "/images/federations/flag_1.png",
    club: "Arkadag",
    rating: 4.5,
    made: "U23",
  },
  {
    id: 3,
    imgLink: "/images/federations/athlete_1.jfif",
    name: "Ruslan Mingazow",
    sportType: "Futbol",
    position: "Hüjümçi",
    flagImg: "/images/federations/flag_2.png",
    club: "Kitchee",
    rating: 4.5,
    made: "MILLI",
  },
  {
    id: 4,
    imgLink: "/images/federations/athlete_2.png",
    name: "Arslanmyrat Amanow",
    sportType: "Futbol",
    position: "Ýarym goragçy",
    flagImg: "/images/federations/flag_1.png",
    club: "Ahal",
    rating: 4.5,
    made: "MILLI",
  },
  {
    id: 5,
    imgLink: "/images/federations/athlete_3.png",
    name: "Daýanç Meredow",
    sportType: "Futbol",
    position: "Ýarym goragçy",
    flagImg: "/images/federations/flag_1.png",
    club: "Arkadag",
    rating: 4.5,
    made: "U23",
  },
  {
    id: 6,
    imgLink: "/images/federations/athlete_1.jfif",
    name: "Ruslan Mingazow",
    sportType: "Futbol",
    position: "Hüjümçi",
    flagImg: "/images/federations/flag_2.png",
    club: "Kitchee",
    rating: 4.5,
    made: "MILLI",
  },
  {
    id: 7,
    imgLink: "/images/federations/athlete_2.png",
    name: "Arslanmyrat Amanow",
    sportType: "Futbol",
    position: "Ýarym goragçy",
    flagImg: "/images/federations/flag_1.png",
    club: "Ahal",
    rating: 4.5,
    made: "MILLI",
  },
  {
    id: 8,
    imgLink: "/images/federations/athlete_3.png",
    name: "Daýanç Meredow",
    sportType: "Futbol",
    position: "Ýarym goragçy",
    flagImg: "/images/federations/flag_1.png",
    club: "Arkadag",
    rating: 4.5,
    made: "U23",
  },
];

const Athlete = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="text-[#0F1A42] font-sofiasans px-8 pt-8">
      <div className="w-full h-[410px] overflow-auto">
        <table className="w-full max-w-[99%]">
          <thead className="">
            <tr className="h-[13px] text-[11px] border border-[#0088FF]">
              <td className="" align="center">
                №
              </td>
              <td className="" align="center">
                Surady
              </td>
              <td className="" align="center">
                Ady we familiýasy
              </td>
              <td className="" align="center">
                Sport görnüşi
              </td>
              <td className="" align="center">
                Orny
              </td>
              <td className="" align="center">
                Toparynyň ady
              </td>
              <td className="" align="center">
                Reýtingi
              </td>
              <td className="" align="center"></td>
            </tr>
          </thead>
          <tbody className="text-base">
            {data.map((athlete) => {
              return (
                <tr className="border border-[#0088FF]">
                  <td className="p-2 font-semibold" align="center">
                    {athlete.id + 1}
                  </td>
                  <td className="p-2 font-semibold cursor-pointer" align="center">
                    <img
                      src={athlete.imgLink}
                      className="w-[60px] h-[60px] object-cover"
                    />
                  </td>
                  <td className="p-2 font-semibold cursor-pointer" align="center">
                    {athlete.name}
                  </td>
                  <td className="p-2 font-semibold" align="center">
                    {athlete.sportType}
                  </td>
                  <td className="p-2 font-semibold" align="center">
                    {athlete.position}
                  </td>
                  <td className="p-2 font-semibold" align="center">
                    <div className="flex gap-1 w-max">
                      <img
                        src={athlete.flagImg}
                        className="w-[26px] h-[18px] object-cover"
                      />
                      {athlete.club}
                    </div>
                  </td>
                  <td className="p-2 font-semibold" align="center">
                    <img src={rating} />
                  </td>
                  <td className="p-2 font-semibold" align="center">
                    <p className="bg-[#CCE6D8] text-[#00843D] px-2 flex items-center rounded-md w-max text-[10px]">
                      {athlete.made}
                    </p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="px-[15px] py-1 flex justify-end">
        <button
          className="bg-[#077EE6] text-white h-[44px] w-[148px] font-oswald text-base"
          onClick={() => {
            navigate(location.pathname + "/all");
          }}
        >
          Hemmesini görmek
        </button>
      </div>
    </div>
  );
};

export default Athlete;
