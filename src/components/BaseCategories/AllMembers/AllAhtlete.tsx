import React from "react";
import rating from "../../../assets/svg/rating.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { IFAthletes } from "../../../redux/interfaces/federations";
import { urlBack } from "../../../redux/apiCalls";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { flags } from "../Athlete";

const AllAhtlete = ({ athletes }: { athletes: IFAthletes[] }) => {
  // Hooks
  const navigate = useNavigate();
  const { pathname, state } = useLocation();

  // useSelector
  const prefLang = useSelector((state: RootState) => state.main.prefLang);

  // Function
  const linkToAthleteDetail = (athleteId: string) => {
    navigate(pathname + "/../id", {
      state: { athleteId, federationId: state.federationId },
    });
  };

  return (
    <div className="w-full min-h-screen font-sofiasans">
      <table className="w-full">
        <thead>
          <tr className="h-[13px] text-[11px] border border-[#0088FF]">
            <td className="" align="center">
              №
            </td>
            <td className="" align="center">
              {prefLang === "Tm" ? "Surady" : "Фото"}
            </td>
            <td className="" align="center">
              {prefLang === "Tm" ? "Ady we familiýasy" : "Имя и фамилия"}
            </td>
            <td className="" align="center">
              {prefLang === "Tm" ? "Orny" : "Позиция"}
            </td>
            <td className="" align="center">
              {prefLang === "Tm" ? "Toparynyň ady" : "Название команды"}
            </td>
            <td className="" align="center">
              {prefLang === "Tm" ? "Reýtingi" : "Рейтинг"}
            </td>
            <td className="" align="center"></td>
          </tr>
        </thead>
        <tbody className="text-base lowercase">
          {athletes.map((athlete, index) => {
            return (
              <tr
                className="border border-[#0088FF]"
                onClick={() => linkToAthleteDetail(athlete.id)}
              >
                <td className="p-2 font-semibold" align="center">
                  {index + 1}
                </td>
                <td className="p-2 font-semibold cursor-pointer" align="center">
                  <img
                    src={urlBack + athlete.imagePath}
                    className="w-[60px] h-[60px] object-cover"
                  />
                </td>
                <td
                  className="p-2 font-semibold cursor-pointer uppercase"
                  align="center"
                >
                  {prefLang === "Tm" ? athlete.nameTm : athlete.nameRu}
                </td>
                <td className="p-2 font-semibold capitalize" align="center">
                  {prefLang === "Tm" ? athlete.positionTm : athlete.positionRu}
                </td>
                <td className="p-2 font-semibold" align="center">
                  <div className="flex gap-1 w-max items-center capitalize">
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
                <td className="p-2 font-semibold" align="center">
                  <p className="bg-[#CCE6D8] text-[#00843D] uppercase px-2 flex items-center rounded-md w-max text-[10px]">
                    {prefLang === "Tm" ? athlete.madeTm : athlete.madeRu}
                  </p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllAhtlete;