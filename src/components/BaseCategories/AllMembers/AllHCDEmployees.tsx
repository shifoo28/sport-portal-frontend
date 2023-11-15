import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { IHCEmployee } from "../../../redux/interfaces/hcdepartment";
import rating from "../../../assets/svg/rating.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { urlBack } from "../../../redux/apiCalls";

const AllHCDEmployees = ({ employees }: { employees: IHCEmployee[] }) => {
  // Hooks
  const navigate = useNavigate();
  const { pathname, state } = useLocation();

  // useSelector
  const prefLang = useSelector((state: RootState) => state.main.prefLang);

  // Function
  const linkToEmployeeDetail = (employeeId: string) => {};

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
            <td className="" align="center">
              {prefLang === "Tm" ? "Iş wezipesi" : "Должность"}
            </td>
          </tr>
        </thead>
        <tbody className="text-base lowercase">
          {employees.map((employee, index) => {
            return (
              <tr
                className="border border-[#0088FF]"
                onClick={() => linkToEmployeeDetail(employee.id)}
              >
                <td className="p-2 font-semibold" align="center">
                  {index + 1}
                </td>
                <td className="p-2 font-semibold cursor-pointer" align="center">
                  <img
                    src={urlBack + employee.imagePath}
                    className="w-[60px] h-[60px] object-cover"
                  />
                </td>
                <td
                  className="p-2 font-semibold cursor-pointer uppercase"
                  align="center"
                >
                  {prefLang === "Tm" ? employee.nameTm : employee.nameRu}
                </td>
                <td className="p-2 font-semibold capitalize" align="center">
                  {employee.experience + (prefLang === "Tm" ? " ýyl" : " лет")}
                </td>
                <td className="p-2 font-semibold" align="center">
                  <img src={rating} className="h-[15px]" />
                </td>
                <td className="p-2 font-semibold" align="center">
                  <p className="bg-[#CCE6D8] text-[#00843D] uppercase px-2 flex items-center rounded-md w-max text-[10px]">
                    {prefLang === "Tm" ? employee.jobTm : employee.jobRu}
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

export default AllHCDEmployees;
