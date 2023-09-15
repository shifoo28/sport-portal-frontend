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

const descriptionRu =
  'Медицинские осмотры спортсменов, взрослых и детей, проводятся в соответствии с Приказом МЗ РФот 23 октября 2020 г. N 1144н "Об утверждении порядка организации оказания медицинской помощи лицам, занимающимся физической культурой и спортом (в том числе при подготовке и проведении физкультурных мероприятий и спортивных мероприятий), включая порядок медицинского осмотра лиц, желающих пройти спортивную подготовку, заниматься физической культурой и спортом в организациях и (или) выполнить нормативы испытаний (тестов) Всероссийского физкультурно-спортивного комплекса "Готов к труду и обороне" (Г ТО)" и форм медицинских заключений о допуске к участию физкультурных и спортивных мероприятиях" Цены ниже муниципальных.';
const descriptionTm =
  "Türgenleriň, ulularyň we çagalaryň lukmançylyk barlaglary Döwlet Saglygy goraýyş ministrliginiň 2020-nji ýylyň 23-nji oktýabryndaky N 1144n Buýruga gatnaşýan adamlara lukmançylyk kömegini bermegiň tertibi tassyklanylandan soň buýrugy boýunça geçirilýär. bedenterbiýe we sport (bedenterbiýe we sport çärelerini taýýarlamakda we geçirmekde), şol sanda sport tälimini almak, guramalarda bedenterbiýe we sport bilen meşgullanmak we synag standartlaryny ýerine ýetirmek isleýän adamlary lukmançylyk barlagynyň tertibini goşmak bilen (Zähmet we goranmaga taýyn) bedenterbiýe we sport toplumynyň (synaglar) we bedenterbiýe we sport çärelerine gatnaşmaga kabul edilmek.";

export const doctors = [
  {
    id: 0,
    age: 54,
    experience: 24,
    department: "Fiziolok",
    name: "Batyr Gurbangulyýew",
    imagePath: "/images/health_care/doctor_1o.png",
    workAt: "Arçabil şa 18. Fiz binasy, 1-nji gat, otag 2115",
    job: "Dikeldiş we sport lukmançylygy fakultetiniň dekany, kadaly fiziologiýa kafedrasynyň mugallymy",
  },
  {
    id: 1,
    name: "Kyýas Hajyýew",
    imagePath: "/images/health_care/doctor_2.png",
    age: 35,
    workAt: "Aşgabat şäher, Nyýazow köçe, 245 jaý",
    department: "Fiziolok",
    experience: 9,
    job: "Futzal boýunça milli ýygyndynyň baş lukmany",
  },
  {
    id: 2,
    name: "Batyr Gurbangulyýew",
    imagePath: "/images/health_care/doctor_1o.png",
    age: 54,
    workAt: "Arçabil şa 18. Fiz binasy, 1-nji gat, otag 2115",
    department: "Fiziolok",
    experience: 24,
    job: "Dikeldiş we sport lukmançylygy fakultetiniň dekany, kadaly fiziologiýa kafedrasynyň mugallymy",
  },
  {
    id: 3,
    name: "Kyýas Hajyýew",
    imagePath: "/images/health_care/doctor_2.png",
    age: 35,
    workAt: "Aşgabat şäher, Nyýazow köçe, 245 jaý",
    department: "Fiziolok",
    experience: 9,
    job: "Futzal boýunça milli ýygyndynyň baş lukmany",
  },
  {
    id: 4,
    name: "Batyr Gurbangulyýew",
    imagePath: "/images/health_care/doctor_1o.png",
    age: 54,
    workAt: "Arçabil şa 18. Fiz binasy, 1-nji gat, otag 2115",
    department: "Fiziolok",
    experience: 24,
    job: "Dikeldiş we sport lukmançylygy fakultetiniň dekany, kadaly fiziologiýa kafedrasynyň mugallymy",
  },
  {
    id: 5,
    name: "Kyýas Hajyýew",
    imagePath: "/images/health_care/doctor_2.png",
    age: 35,
    workAt: "Aşgabat şäher, Nyýazow köçe, 245 jaý",
    department: "Fiziolok",
    experience: 9,
    job: "Futzal boýunça milli ýygyndynyň baş lukmany",
  },
  {
    id: 6,
    name: "Batyr Gurbangulyýew",
    imagePath: "/images/health_care/doctor_1o.png",
    age: 54,
    workAt: "Arçabil şa 18. Fiz binasy, 1-nji gat, otag 2115",
    department: "Fiziolok",
    experience: 24,
    job: "Dikeldiş we sport lukmançylygy fakultetiniň dekany, kadaly fiziologiýa kafedrasynyň mugallymy",
  },
  {
    id: 7,
    name: "Kyýas Hajyýew",
    imagePath: "/images/health_care/doctor_2.png",
    age: 35,
    workAt: "Aşgabat şäher, Nyýazow köçe, 245 jaý",
    department: "Fiziolok",
    experience: 9,
    job: "Futzal boýunça milli ýygyndynyň baş lukmany",
  },
];
const departments = [
  {
    id: 0,
    nameTm: "KARDIOLOGIÝA BÖLÜMI",
    nameRu: "ОТДЕЛЕНИЕ КАРДИОЛОГИИ",
    data: [],
  },
  {
    id: 1,
    nameTm: "kOSMETELOGIÝA BÖLÜMI",
    nameRu: "ОТДЕЛЕНИЕ КОСМЕТОЛОГИИ",
    data: [],
  },
  {
    id: 2,
    nameTm: "HIRURGIÝA BÖLÜMI",
    nameRu: "ХИРУРГИЧЕСКОЕ ОТДЕЛЕНИЕ",
    data: [],
  },
  {
    id: 3,
    nameTm: "FIZIOLOGIÝA BÖLÜMI",
    nameRu: "ОТДЕЛЕНИЕ ФИЗИОЛОГИИ",
    data: doctors,
  },
  {
    id: 4,
    nameTm: "UROLOGIÝA BÖLÜMI",
    nameRu: "ОТДЕЛЕНИЕ УРОЛОГИИ",
    data: [],
  },
  {
    id: 5,
    nameTm: "NEWROLOGIÝA BÖLÜMI",
    nameRu: "ОТДЕЛЕНИЕ НЕВРОЛОГИИ",
    data: [],
  },
  {
    id: 6,
    nameTm: "STOMATALOGIÝA BÖLÜMI",
    nameRu: "ОТДЕЛЕНИЕ СТОМАТОЛОГИИ",
    data: [],
  },
];

const HealthCare = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const prefLang = useSelector((state: any) => state.main.prefLang);

  const [open, setOpen] = React.useState(3);
  const handleOpen = (value: number) =>
    setOpen(open === value ? departments.length : value);
  const linkTo = (l: string, id: number) => {
    navigate(l, { state: { id } });
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
        {departments.map((d, i) => {
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
                    {d.data.map((w, i) => {
                      return (
                        <button
                          key={i}
                          className="flex max-w-[345px] border border-[#0088FF]"
                          onClick={() => linkTo(pathname + "/detail", w.id)}
                        >
                          <img
                            src={w.imagePath}
                            className="w-[95px] h-[108px] object-cover"
                          />
                          <div className="flex flex-col font-sofiasans text-[#0F1A42] justify-between h-full pl-2">
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
                                  ? `Iş bölümi: ${w.department}`
                                  : `Кафедра: ${w.department}`}
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
                              <img src={rating} className="h-3" />
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

export default HealthCare;
