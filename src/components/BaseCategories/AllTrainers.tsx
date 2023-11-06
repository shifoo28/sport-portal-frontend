import React from "react";
import { IFTrainers } from "../../redux/interfaces/federations";
import rating from "../../assets/svg/rating.svg";
import { useSelector } from "react-redux";
import { urlBack } from "../../redux/apiCalls";
import { RootState } from "../../redux/store";
import { useNavigate, useLocation } from "react-router-dom";

const AllTrainers = ({ trainers }: { trainers: IFTrainers[] }) => {
  // Hooks
  const navigate = useNavigate();
  const { pathname, state } = useLocation();

  // useSelector
  const prefLang = useSelector((state: RootState) => state.main.prefLang);

  // Function
  const linkToTrainerDetail = (trainerId: string) => {
    navigate(pathname + "/../id", {
      state: { trainerId, federationId: state.federationId },
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
              {prefLang === "Tm" ? "Iş tejribesi" : "Опыт работы"}
            </td>
            <td className="" align="center">
              {prefLang === "Tm" ? "Reýtingi" : "Рейтинг"}
            </td>
            <td className="" align="center"></td>
          </tr>
        </thead>
        <tbody className="text-base lowercase">
          {trainers.map((trainer, index) => {
            return (
              <tr
                className="border border-[#0088FF]"
                onClick={() => linkToTrainerDetail(trainer.id)}
              >
                <td className="p-2 font-semibold" align="center">
                  {index + 1}
                </td>
                <td className="p-2 font-semibold cursor-pointer" align="center">
                  <img
                    src={urlBack + trainer.imagePath}
                    className="w-[60px] h-[60px] object-cover"
                  />
                </td>
                <td
                  className="p-2 font-semibold cursor-pointer uppercase"
                  align="center"
                >
                  {prefLang === "Tm" ? trainer.nameTm : trainer.nameRu}
                </td>
                <td className="p-2 font-semibold capitalize" align="center">
                  {trainer.experience + (prefLang === "Tm" ? " ýyl" : " лет")}
                </td>
                <td className="p-2 font-semibold" align="center">
                  <img src={rating} className="h-[15px]" />
                </td>
                <td className="p-2 font-semibold" align="center">
                  <p className="bg-[#CCE6D8] text-[#00843D] uppercase px-2 flex items-center rounded-md w-max text-[10px]">
                    {prefLang === "Tm" ? trainer.madeTm : trainer.madeRu}
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

export default AllTrainers;
