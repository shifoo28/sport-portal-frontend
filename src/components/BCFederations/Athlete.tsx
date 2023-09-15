import React from "react";
import rating from "../../assets/svg/rating.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { IFAthletes } from "../../redux/interfaces/federations";
import { urlBack } from "../../redux/apiCalls";

export const a = [
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
    age: 31,
    birthPlace: "Aşgabat",
    experience: 15,
    sportLevel: "Halkara derejeli sport ussady",
    workedAt: [
      "2007-2009Aşgabat",
      "2009-2014Skonto Rīga",
      "2014-2016Jablonec",
      "2016-2019Slavia Prague",
      "2017→ Mladá Boleslav",
      "2018-2019→ Příbram",
      "2019-2020-Irtysh Pavlodar 2020-Shakhter Karagandy",
      "2021-2022Caspiy",
      "2022-Kitchee",
    ],
    badges: [
      "2008-Türkmenistanyň çempiony",
      "2008-Türkmenistanyň Superkubok ýeňijisi",
      "2010-Latwiýanyň çempiony",
      "2012-2013 Latwiýa kubok kümüş medal ýeňijisi",
      "2013-Latwiýanyň Superkubok ýeňijisi",
      "2014/15-2015/16 Çehiýanyň kubok finalisti",
      "2016/17-Çehiýanyň çempiony",
      "2015-Türkmenistanyň iň gowy futbolçysy",
      "2022/23-Hong Kong Premýer ligasynyň iň gowy futbolçysy",
    ],
    jobs: [
      "Milli futbol toparynyň oýunçysy",
      "Hong Kong Kitchee toparynyň hüjümçisi",
    ],
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
    age: 31,
    birthPlace: "Aşgabat",
    experience: 15,
    sportLevel: "Halkara derejeli sport ussady",
    workedAt: [
      "2007-2009Aşgabat",
      "2009-2014Skonto Rīga",
      "2014-2016Jablonec",
      "2016-2019Slavia Prague",
      "2017→ Mladá Boleslav",
      "2018-2019→ Příbram",
      "2019-2020-Irtysh Pavlodar 2020-Shakhter Karagandy",
      "2021-2022Caspiy",
      "2022-Kitchee",
    ],
    badges: [
      "2008-Türkmenistanyň çempiony",
      "2008-Türkmenistanyň Superkubok ýeňijisi",
      "2010-Latwiýanyň çempiony",
      "2012-2013 Latwiýa kubok kümüş medal ýeňijisi",
      "2013-Latwiýanyň Superkubok ýeňijisi",
      "2014/15-2015/16 Çehiýanyň kubok finalisti",
      "2016/17-Çehiýanyň çempiony",
      "2015-Türkmenistanyň iň gowy futbolçysy",
      "2022/23-Hong Kong Premýer ligasynyň iň gowy futbolçysy",
    ],
    jobs: [
      "Milli futbol toparynyň oýunçysy",
      "Hong Kong Kitchee toparynyň hüjümçisi",
    ],
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
    age: 31,
    birthPlace: "Aşgabat",
    experience: 15,
    sportLevel: "Halkara derejeli sport ussady",
    workedAt: [
      "2007-2009Aşgabat",
      "2009-2014Skonto Rīga",
      "2014-2016Jablonec",
      "2016-2019Slavia Prague",
      "2017→ Mladá Boleslav",
      "2018-2019→ Příbram",
      "2019-2020-Irtysh Pavlodar 2020-Shakhter Karagandy",
      "2021-2022Caspiy",
      "2022-Kitchee",
    ],
    badges: [
      "2008-Türkmenistanyň çempiony",
      "2008-Türkmenistanyň Superkubok ýeňijisi",
      "2010-Latwiýanyň çempiony",
      "2012-2013 Latwiýa kubok kümüş medal ýeňijisi",
      "2013-Latwiýanyň Superkubok ýeňijisi",
      "2014/15-2015/16 Çehiýanyň kubok finalisti",
      "2016/17-Çehiýanyň çempiony",
      "2015-Türkmenistanyň iň gowy futbolçysy",
      "2022/23-Hong Kong Premýer ligasynyň iň gowy futbolçysy",
    ],
    jobs: [
      "Milli futbol toparynyň oýunçysy",
      "Hong Kong Kitchee toparynyň hüjümçisi",
    ],
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
const flags = [
  { flag: "/images/federations/flag_2.png", key: "kitchee" },
  { flag: "/images/federations/flag_1.png", key: "ahal" },
  { flag: "/images/federations/flag_1.png", key: "arkadag" },
];
const sportTypes = [
  { name: "Futbol", key: "futbol" },
  { name: "Atletika", key: "atletika" },
  { name: "Stol Tennis", key: "stol tennis" },
  { name: "Basketbol", key: "basketbol" },
  { name: "Agyr Atletika", key: "agyr atletika" },
  { name: "Boks", key: "boks" },
  { name: "Welosiped", key: "welosiped" },
];

const Athlete = ({ open }: { open: string }) => {
  const navigate = useNavigate();
  const location = useLocation();
  // const prefLang = useSelector((state: any) => state.main.prefLang);
  const fathletes: IFAthletes[] = useSelector(
    (state: any) => state.federations.fathletes
  );
  const athletes = fathletes.filter((fa) => fa.federationId === open);

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
            {athletes.map((athlete, index) => {
              return (
                <tr className="border border-[#0088FF]" key={athlete.id}>
                  <td className="p-2 font-semibold" align="center">
                    {index + 1}
                  </td>
                  <td
                    className="p-2 font-semibold cursor-pointer"
                    align="center"
                    onClick={() =>
                      navigate(location.pathname + "/id", {
                        state: { id: athlete.id },
                      })
                    }
                  >
                    <img
                      src={urlBack + athlete.imagePath}
                      className="w-[60px] h-[60px] object-cover"
                    />
                  </td>
                  <td
                    className="p-2 font-semibold cursor-pointer capitalize"
                    align="center"
                    onClick={() =>
                      navigate(location.pathname + "/id", {
                        state: { id: athlete.id },
                      })
                    }
                  >
                    {athlete.name.toLocaleLowerCase()}
                  </td>
                  <td className="p-2 font-semibold" align="center">
                    {
                      sportTypes.find((st) =>
                        athlete.federation.nameTm
                          .toLocaleLowerCase()
                          .includes(st.key)
                      )?.name
                    }
                  </td>
                  <td className="p-2 font-semibold" align="center">
                    {athlete.position}
                  </td>
                  <td className="p-2 font-semibold" align="center">
                    <div className="flex gap-1 w-max">
                      <img
                        src={
                          flags.find((f) =>
                            athlete.club.toLocaleLowerCase().includes(f.key)
                          )?.flag
                        }
                        className="w-[26px] h-[18px] object-cover"
                      />
                      {athlete.club}
                    </div>
                  </td>
                  <td className="p-2 font-semibold" align="center">
                    <img src={rating} className="h-[15px]" />
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
