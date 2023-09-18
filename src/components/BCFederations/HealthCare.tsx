import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import rating from "../../assets/svg/rating.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { activateTab } from "../../redux/actions/main";
import HCDetail from "../Details/HCDetail";
import { GET_HEALTH_CARE_DEPARTMENTS } from "../../redux/types";
import { IHCDepartment } from "../../redux/interfaces/federations";
import { RootState } from "../../redux/store";
import { urlBack } from "../../redux/apiCalls";

const descriptionRu =
  'Медицинские осмотры спортсменов, взрослых и детей, проводятся в соответствии с Приказом МЗ РФ от 23 октября 2020 г. N 1144н "Об утверждении порядка организации оказания медицинской помощи лицам, занимающимся физической культурой и спортом (в том числе при подготовке и проведении физкультурных мероприятий и спортивных мероприятий), включая порядок медицинского осмотра лиц, желающих пройти спортивную подготовку, заниматься физической культурой и спортом в организациях и (или) выполнить нормативы испытаний (тестов) Всероссийского физкультурно-спортивного комплекса "Готов к труду и обороне" (Г ТО)" и форм медицинских заключений о допуске к участию физкультурных и спортивных мероприятиях" Цены ниже муниципальных.';
const descriptionTm =
  "Türgenleriň, ulularyň we çagalaryň lukmançylyk barlaglary Döwlet Saglygy goraýyş ministrliginiň 2020-nji ýylyň 23-nji oktýabryndaky N 1144n Buýruga gatnaşýan adamlara lukmançylyk kömegini bermegiň tertibi tassyklanylandan soň buýrugy boýunça geçirilýär. bedenterbiýe we sport (bedenterbiýe we sport çärelerini taýýarlamakda we geçirmekde), şol sanda sport tälimini almak, guramalarda bedenterbiýe we sport bilen meşgullanmak we synag standartlaryny ýerine ýetirmek isleýän adamlary lukmançylyk barlagynyň tertibini goşmak bilen (Zähmet we goranmaga taýyn) bedenterbiýe we sport toplumynyň (synaglar) we bedenterbiýe we sport çärelerine gatnaşmaga kabul edilmek.";

const Component = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const prefLang = useSelector((state: any) => state.main.prefLang);
  const hcdepartmnts: IHCDepartment[] = useSelector(
    (state: RootState) => state.federations.hcdepartments
  );

  const [open, setOpen] = React.useState("");
  const handleOpen = (value: string) => setOpen(open === value ? "" : value);
  const linkTo = (l: string, employeeId: string, departmentId: string) => {
    navigate(l, { state: { employeeId, departmentId } });
    dispatch(activateTab(5));
  };

  return pathname.includes("detail") ? (
    <HCDetail />
  ) : (
    <div className="mx-32 max-w-[1170px] pt-8 flex flex-col gap-10">
      <div className="px-16">
        <p className="text-center font-oswald text-[50px] text-[#0F1A42] capitalize">
          {prefLang === "Tm"
            ? "Döwlet Sport lukmançylygy ylmy we amaly merkeziniň lukmançylyk hyzmatlarynyň sanawy"
            : "Список медицинских услуг Государственного научно-практического центра спортивной медицины"}
        </p>
        <p className="font-sofiasans text-lg text-center">
          {prefLang === "Tm" ? descriptionTm : descriptionRu}
        </p>
      </div>
      <div className="text-[#182135] flex flex-col gap-5 font-sofiasans text-[25px] font-semibold">
        <p>
          {prefLang === "Tm" ? "Ýükläp al: " : "Скачать: "}
          <a href="/pdf/trainers.pdf" className="hover:underline">
            Tälimçiler üçin Medisina barlagy
          </a>
        </p>
        <p>
          {prefLang === "Tm" ? "Ýükläp al: " : "Скачать: "}
          <a href="/pdf/sportsmens.pdf" className="hover:underline">
            Türgenler üçin Medisina barlagy
          </a>
        </p>
      </div>
      <div className="flex flex-col gap-8">
        {hcdepartmnts.map((d, i) => {
          return (
            <Accordion
              open={open === d.id}
              className="border-b-2 border-r-2 border-blue-100 w-full bg-white"
              key={i}
            >
              <AccordionHeader
                onClick={() => handleOpen(d.id)}
                className="h-[73px] border-none"
              >
                <p className="text-[#0088FF] text-[25px] flex items-center justify-center pl-8 uppercase font-oswald font-normal">
                  {prefLang === "Tm" ? d.nameTm : d.nameRu}
                </p>
              </AccordionHeader>
              <AccordionBody>
                <div
                  className={`w-full h-max px-8 ${
                    open != d.id ? "hidden" : ""
                  }`}
                >
                  <div className="grid grid-cols-3 overflow-auto h-60 gap-y-4">
                    {d.employees.map((w, i) => {
                      return (
                        <button
                          key={i}
                          className="flex max-w-[345px] border border-[#0088FF] h-[108px]"
                          onClick={() =>
                            linkTo(pathname + "/detail", w.id, d.id)
                          }
                        >
                          <img
                            src={urlBack + w.imagePath}
                            className="w-[95px] h-full object-cover"
                          />
                          <div className="flex flex-col font-sofiasans text-[#0F1A42] justify-between h-full pl-2 pb-1">
                            <p className="font-semibold text-left h-4">
                              {w.name}
                            </p>
                            <div className="w-full">
                              <p className="h-[14px] text-[10px] text-left overflow-hidden w-full">
                                {prefLang === "Tm"
                                  ? `Ýaşy: ${w.age}`
                                  : `Возраст: ${w.age}`}
                              </p>
                              <p className="h-[14px] text-[10px] text-left overflow-hidden w-full">
                                {prefLang === "Tm"
                                  ? `Iş ýeri: ${w.workAt}`
                                  : `Место работы: ${w.workAt}`}
                              </p>
                              <p className="h-[14px] text-[10px] text-left overflow-hidden w-full">
                                {prefLang === "Tm"
                                  ? `Iş bölümi: ${d.nameTm}`
                                  : `Кафедра: ${d.nameRu}`}
                              </p>
                              <p className="h-[14px] text-[10px] text-left overflow-hidden w-full">
                                {prefLang === "Tm"
                                  ? `Iş tejribesi: ${w.experience}ýyl`
                                  : `Опыт работы: ${w.experience}г`}
                              </p>
                              <p className="h-[14px] text-[10px] text-left overflow-hidden w-full">
                                {prefLang === "Tm"
                                  ? `Iş wezipesi: ${w.job}`
                                  : `Должность: ${w.job}`}
                              </p>
                            </div>
                            <div className="flex justify-end">
                              <img src={rating} className="h-3 pr-1" />
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  <div className="flex justify-end pt-4 px-6">
                    <button className="bg-[#077EE6] text-white h-11 font-oswald px-4">
                      {prefLang === "Tm"
                        ? "Hemmesini görmek"
                        : "Посмотреть все"}
                    </button>
                  </div>
                </div>
              </AccordionBody>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
};

const HealthCare = () => {
  const dispatch = useDispatch();
  dispatch({ type: GET_HEALTH_CARE_DEPARTMENTS });

  return <Component />;
};

export default HealthCare;
