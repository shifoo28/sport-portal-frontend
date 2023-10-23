import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import nextSvg from "../../../assets/svg/next.svg";
import prevSvg from "../../../assets/svg/prev.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { activateTab } from "../../../redux/actions/main";
import { RootState } from "../../../redux/store";
import { IGymsAndClubs } from "../../../redux/interfaces/gymsclubs";

const theadersTm = [
  "№",
  "Ady",
  "Ýerleşýän ýeri",
  "Tel belgisi",
  "Sport görnüşleri",
  "Iş wagty",
];
const theadersRu = [
  "№",
  "Имя",
  "Расположение",
  "Номер телефона",
  "Виды спорта",
  "Рабочее время",
];

const List = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const prefLang = useSelector((state: RootState) => state.main.prefLang);
  const gymsclubs: IGymsAndClubs[] = useSelector(
    (state: RootState) => state.gymsclubs.gymsclubs
  );
  const [paginate, setPaginate] = useState(0);
  const table_body = gymsclubs.filter(
    (b, i) => i >= paginate && i < paginate + 5
  );
  let paginator = [];
  for (let i = 0; i < gymsclubs.length; i++) {
    paginator.push(
      <button className="bg-[#0F1A42] px-2" onClick={() => setPaginate(i * 5)}>
        {i + 1}
      </button>
    );
  }

  const linkTo = (l: string, id: string) => {
    navigate(l, {
      state: { id },
    });
    dispatch(activateTab(4));
  };

  return gymsclubs.length ? (
    <div className="max-w-[1170px] w-full font-sofiasans text-[#182135]">
      <p className="uppercase text-3xl px-8 py-10">
        {prefLang === "Tm"
          ? "TAPYLAN SPORT DESGALARYŇ SANAWY:"
          : "СПИСОК НАЙДЕННЫХ СПОРТИВНЫХ ОБЪЕКТОВ:"}
      </p>
      <table className="border border-[#0088FF] w-full">
        <thead className="bg-[#A9CFEF] h-[74px]">
          {theadersTm.map((h, i) => {
            return (
              <th className="font-normal text-xl" key={i}>
                {prefLang === "Tm" ? h : theadersRu[i]}
              </th>
            );
          })}
        </thead>
        <br />
        <br />
        <tbody>
          {table_body.map((b, i) => {
            return (
              <tr
                key={i}
                className={`${
                  i % 2 !== 0 ? "bg-[#A9CFEF4D]" : ""
                } cursor-pointer`}
              >
                <td>
                  <p className="flex items-center justify-center">{i + 1}.</p>
                </td>
                <td className="border-l px-4 py-8 max-w-[220px]">
                  <p
                    className="flex items-center justify-center text-center"
                    onClick={() => linkTo(location.pathname + "/detail", b.id)}
                  >
                    {prefLang === "Tm" ? b.nameTm : b.nameRu}
                  </p>
                </td>
                <td className="border-l px-4 py-8 max-w-[220px]">
                  <p className="flex items-center justify-center text-center">
                    {prefLang === "Tm" ? b.locationTm : b.locationRu}
                  </p>
                </td>
                <td className="border-l px-4 py-8">
                  <p className="flex flex-col items-center justify-center">
                    {b.tel.map((t, i) => {
                      return <p key={i}>{t}</p>;
                    })}
                  </p>
                </td>
                <td className="border-l max-w-[200px] px-4 py-8">
                  <p className="text-center">
                    {b.sportsTm.map((s, i) => {
                      return (prefLang === "Tm" ? s : b.sportsRu[i]) + " ";
                    })}
                  </p>
                </td>
                <td className="border-l px-4 py-8">
                  <p className="flex flex-col items-center justify-center">
                    {b.openAtTm.map((o, i) => {
                      return (
                        <p key={i}>{prefLang === "Tm" ? o : b.openAtRu[i]}</p>
                      );
                    })}
                  </p>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <th colSpan={6}>
            <div className="py-5 px-14 w-full flex justify-end text-white font-normal gap-2 text-xs">
              {paginator}
              <button
                disabled={paginate < 1}
                onClick={() => setPaginate(paginate - 5)}
              >
                <img
                  src={prevSvg}
                  className={`cursor-pointer ${
                    paginate > 0 ? "bg-[#0F1A42]" : "bg-[#6E748C]"
                  }`}
                />
              </button>
              <button
                disabled={table_body.length < 5}
                onClick={() => setPaginate(paginate + 5)}
              >
                <img
                  src={nextSvg}
                  className={`cursor-pointer ${
                    table_body.length === 5 ? "bg-[#0F1A42]" : "bg-[#6E748C]"
                  }`}
                />
              </button>
            </div>
          </th>
        </tfoot>
      </table>
    </div>
  ) : (
    <></>
  );
};

export default List;
