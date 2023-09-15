import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import nextSvg from "../../../assets/svg/next.svg";
import prevSvg from "../../../assets/svg/prev.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { activateTab } from "../../../redux/actions/main";

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
export const tbodyTm = [
  {
    id: 0,
    nameTm: "Gyşky görnüşleri boýunça sport toplumy",
    nameRu: "Зимний спортивный комплекс",
    locationTm: "Aşgabat şäher, Atatürk Oguzhan köçäniň çatrygy",
    locationRu: "г. Ашхабад, пересечение улицы Ататюрка Огужана",
    tel: ["+99312212658", "+99312212674"],
    sportsTm: [
      "Hokkeý",
      "Biýatlon",
      "Fristaýl",
      "Bobsleý",
      "Lyžnyý gonka",
      "Skaýbord",
    ],
    sportsRu: [
      "Хоккей",
      "Биатлон",
      "Фристайл",
      "Бобслей",
      "Горнолыжный спорт",
      "Скайборд",
    ],
    openAtTm: ["Du-Şe", "09:00-12:00", "17:00-20:00"],
    openAtRu: ["Пон-Суб", "09:00-12:00", "17:00-20:00"],
  },
  {
    id: 1,
    nameTm: "Olimpiya Suw-Sport Toplumy",
    nameRu: "Олимпийская сборная по водным видам спорта",
    locationTm: "Aşgabat şäher, Garaşsyzlyk köçe, 74 jaý",
    locationRu: "город Ашхабад, улица Независимости, дом 74",
    tel: ["21-16-63", "21-16-99"],
    sportsTm: ["Suwda ýüzmek", "suwa bökmek", "gimnastika", "küşt"],
    sportsRu: ["Плавание", "дайвинг", "гимнастика", "шахматы"],
    openAtTm: ["Si-Ýe", "07:00-22:00"],
    openAtRu: ["Втр-Вос", "07:00-22:00"],
  },
  {
    id: 2,
    nameTm: "Gyşky görnüşleri boýunça sport toplumy",
    nameRu: "Зимний спортивный комплекс",
    locationTm: "Aşgabat şäher, Atatürk Oguzhan köçäniň çatrygy",
    locationRu: "г. Ашхабад, пересечение улицы Ататюрка Огужана",
    tel: ["+99312212658", "+99312212674"],
    sportsTm: [
      "Hokkeý",
      "Biýatlon",
      "Fristaýl",
      "Bobsleý",
      "Lyžnyý gonka",
      "Skaýbord",
    ],
    sportsRu: [
      "Хоккей",
      "Биатлон",
      "Фристайл",
      "Бобслей",
      "Горнолыжный спорт",
      "Скайборд",
    ],
    openAtTm: ["Du-Şe", "09:00-12:00", "17:00-20:00"],
    openAtRu: ["Пон-Суб", "09:00-12:00", "17:00-20:00"],
  },
  {
    id: 3,
    nameTm: "Olimpiya Suw-Sport Toplumy",
    nameRu: "Олимпийская сборная по водным видам спорта",
    locationTm: "Aşgabat şäher, Garaşsyzlyk köçe, 74 jaý",
    locationRu: "город Ашхабад, улица Независимости, дом 74",
    tel: ["21-16-63", "21-16-99"],
    sportsTm: ["Suwda ýüzmek", "suwa bökmek", "gimnastika", "küşt"],
    sportsRu: ["Плавание", "дайвинг", "гимнастика", "шахматы"],
    openAtTm: ["Si-Ýe", "07:00-22:00"],
    openAtRu: ["Втр-Вос", "07:00-22:00"],
  },
  {
    id: 4,
    nameTm: "Gyşky görnüşleri boýunça sport toplumy",
    nameRu: "Зимний спортивный комплекс",
    locationTm: "Aşgabat şäher, Atatürk Oguzhan köçäniň çatrygy",
    locationRu: "г. Ашхабад, пересечение улицы Ататюрка Огужана",
    tel: ["+99312212658", "+99312212674"],
    sportsTm: [
      "Hokkeý",
      "Biýatlon",
      "Fristaýl",
      "Bobsleý",
      "Lyžnyý gonka",
      "Skaýbord",
    ],
    sportsRu: [
      "Хоккей",
      "Биатлон",
      "Фристайл",
      "Бобслей",
      "Горнолыжный спорт",
      "Скайборд",
    ],
    openAtTm: ["Du-Şe", "09:00-12:00", "17:00-20:00"],
    openAtRu: ["Пон-Суб", "09:00-12:00", "17:00-20:00"],
  },
  {
    id: 5,
    nameTm: "Olimpiya Suw-Sport Toplumy",
    nameRu: "Олимпийская сборная по водным видам спорта",
    locationTm: "Aşgabat şäher, Garaşsyzlyk köçe, 74 jaý",
    locationRu: "город Ашхабад, улица Независимости, дом 74",
    tel: ["21-16-63", "21-16-99"],
    sportsTm: ["Suwda ýüzmek", "suwa bökmek", "gimnastika", "küşt"],
    sportsRu: ["Плавание", "дайвинг", "гимнастика", "шахматы"],
    openAtTm: ["Si-Ýe", "07:00-22:00"],
    openAtRu: ["Втр-Вос", "07:00-22:00"],
  },
  {
    id: 6,
    nameTm: "Gyşky görnüşleri boýunça sport toplumy",
    nameRu: "Зимний спортивный комплекс",
    locationTm: "Aşgabat şäher, Atatürk Oguzhan köçäniň çatrygy",
    locationRu: "г. Ашхабад, пересечение улицы Ататюрка Огужана",
    tel: ["+99312212658", "+99312212674"],
    sportsTm: [
      "Hokkeý",
      "Biýatlon",
      "Fristaýl",
      "Bobsleý",
      "Lyžnyý gonka",
      "Skaýbord",
    ],
    sportsRu: [
      "Хоккей",
      "Биатлон",
      "Фристайл",
      "Бобслей",
      "Горнолыжный спорт",
      "Скайборд",
    ],
    openAtTm: ["Du-Şe", "09:00-12:00", "17:00-20:00"],
    openAtRu: ["Пон-Суб", "09:00-12:00", "17:00-20:00"],
  },
  {
    id: 7,
    nameTm: "Olimpiya Suw-Sport Toplumy",
    nameRu: "Олимпийская сборная по водным видам спорта",
    locationTm: "Aşgabat şäher, Garaşsyzlyk köçe, 74 jaý",
    locationRu: "город Ашхабад, улица Независимости, дом 74",
    tel: ["21-16-63", "21-16-99"],
    sportsTm: ["Suwda ýüzmek", "suwa bökmek", "gimnastika", "küşt"],
    sportsRu: ["Плавание", "дайвинг", "гимнастика", "шахматы"],
    openAtTm: ["Si-Ýe", "07:00-22:00"],
    openAtRu: ["Втр-Вос", "07:00-22:00"],
  },
  {
    id: 8,
    nameTm: "Gyşky görnüşleri boýunça sport toplumy",
    nameRu: "Зимний спортивный комплекс",
    locationTm: "Aşgabat şäher, Atatürk Oguzhan köçäniň çatrygy",
    locationRu: "г. Ашхабад, пересечение улицы Ататюрка Огужана",
    tel: ["+99312212658", "+99312212674"],
    sportsTm: [
      "Hokkeý",
      "Biýatlon",
      "Fristaýl",
      "Bobsleý",
      "Lyžnyý gonka",
      "Skaýbord",
    ],
    sportsRu: [
      "Хоккей",
      "Биатлон",
      "Фристайл",
      "Бобслей",
      "Горнолыжный спорт",
      "Скайборд",
    ],
    openAtTm: ["Du-Şe", "09:00-12:00", "17:00-20:00"],
    openAtRu: ["Пон-Суб", "09:00-12:00", "17:00-20:00"],
  },
];

const ListofFacility = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const prefLang = useSelector((state: any) => state.main.prefLang);
  const [paginate, setPaginate] = useState(0);
  const tbody = tbodyTm.filter((b, i) => i >= paginate && i < paginate + 5);

  const linkTo = (l: string, id: number) => {
    navigate(l, {
      state: { id },
    });
    dispatch(activateTab(4));
  };

  return (
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
          {tbody.map((b, i) => {
            return (
              <tr
                key={i}
                className={`${
                  i % 2 !== 0 ? "bg-[#A9CFEF4D]" : ""
                } cursor-pointer`}
              >
                <td className="">
                  <p className="flex items-center justify-center">
                    {b.id + 1}.
                  </p>
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
              <button
                className="bg-[#0F1A42] px-2"
                onClick={() => setPaginate(0)}
              >
                1
              </button>
              <button
                className="bg-[#0F1A42] px-2"
                onClick={() => setPaginate(5)}
              >
                2
              </button>
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
                disabled={tbody.length < 5}
                onClick={() => setPaginate(paginate + 5)}
              >
                <img
                  src={nextSvg}
                  className={`cursor-pointer ${
                    tbody.length === 5 ? "bg-[#0F1A42]" : "bg-[#6E748C]"
                  }`}
                />
              </button>
            </div>
          </th>
        </tfoot>
      </table>
    </div>
  );
};

export default ListofFacility;
