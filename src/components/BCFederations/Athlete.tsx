import React from "react";
import rating from "../../assets/svg/rating.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { IFAthletes } from "../../redux/interfaces/federations";
import { urlBack } from "../../redux/apiCalls";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

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

const Athlete = ({ data }: { data: IFAthletes[] }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const prefLang = useSelector((state: RootState) => state.main.prefLang);

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
              {/* <td className="" align="center">
                Sport görnüşi
              </td> */}
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
          <tbody className="text-base lowercase">
            {data?.map((athlete, index) => {
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
                    {prefLang === "Tm" ? athlete.nameTm : athlete.nameRu}
                  </td>
                  {/* <td className="p-2 font-semibold" align="center">
                    {
                      sportTypes.find((st) =>
                        athlete.federation?.nameTm
                          ?.toLocaleLowerCase()
                          .includes(st.key)
                      )?.name
                    }
                  </td> */}
                  <td className="p-2 font-semibold capitalize" align="center">
                    {prefLang === "Tm"
                      ? athlete.positionTm
                      : athlete.positionRu}
                  </td>
                  <td className="p-2 font-semibold" align="center">
                    <div className="flex gap-1 w-max capitalize">
                      <img
                        src={
                          flags.find((f) =>
                            athlete.club?.toLocaleLowerCase().includes(f.key)
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
                  <td className="p-2 font-semibold uppercase" align="center">
                    <p className="bg-[#CCE6D8] text-[#00843D] px-2 flex items-center rounded-md w-max text-[10px]">
                      {prefLang === "Tm" ? athlete.madeTm : athlete.madeRu}
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
