import React from "react";
import rating from "../../assets/svg/rating.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { IFederations } from "../../redux/interfaces/federations";
import { urlBack } from "../../redux/apiCalls";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { flags } from "./Athlete";

const AllAhtlete = () => {
  const navigate = useNavigate();
  const { pathname, state } = useLocation();
  const federation: IFederations = state.federation;
  const prefLang = useSelector((state: RootState) => state.main.prefLang);

  return (
    <div className="w-full min-h-screen font-sofiasans">
      <table className="w-full">
        <thead>
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
          {federation.fathlete?.map((athlete, index) => {
            return (
              <tr className="border border-[#0088FF]">
                <td className="p-2 font-semibold" align="center">
                  {index + 1}
                </td>
                <td
                  className="p-2 font-semibold cursor-pointer"
                  align="center"
                  onClick={() =>
                    navigate(pathname.slice(0, pathname.length - 4) + "/id", {
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
                  className="p-2 font-semibold cursor-pointer uppercase"
                  align="center"
                  onClick={() =>
                    navigate(pathname.slice(0, pathname.length - 4) + "/id", {
                      state: { id: athlete.id },
                    })
                  }
                >
                  {prefLang === "Tm" ? athlete.nameTm : athlete.nameRu}
                </td>
                {/* <td className="p-2 font-semibold" align="center">
                  {}
                </td> */}
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
