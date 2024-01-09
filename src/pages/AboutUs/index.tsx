import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const textTm =
  "Bu platforma arkaly türkmen türgenlerini halklymyza hem-de dünýä ýüzüne tanatmak we ýaş neslimiziň sporta bolan höwesini has-da artdyrmak. Ýurdumyzdaky sport federasiýalary, ussat tälimçilerimizi, türgenlerimizi olaryň alyp barýan işlerini köpçülikleýin habar beriş serişdelerine çykarmak. Sanly ulgam arkaly gündelik geçilýän sport çäreleri, bäsleşikleri, täzelikleri halkymyza hödürlemek. Galyberse-de sagdyn-durmuş ýörelgelerini, dogry iýmitlenmegi wagyz etmek hem-de portalyň kömegi bilen ýurdumyzyň sport dükanlaryndan sport esbaplaryny, iýmitlerini (PP) has ýeňil görnüşde saýlamak we satyn almak mümkinçiliklerini halkymyza hödürlemek.";
const textRu =
  "С помощью этой платформы мы хотим познакомить туркменских спортсменов с нашим народом и миром и повысить страсть нашего молодого поколения к спорту. Спортивные федерации страны, чтобы представить средствам массовой информации наших главных тренеров, спортсменов и их деятельность. Представляем нашим людям ежедневные спортивные мероприятия, конкурсы и новости через цифровую сеть. Ведь мы хотим пропагандировать здоровый образ жизни, правильное питание, а также предложить нашим людям возможность более простым способом с помощью портала выбирать и покупать спортивное оборудование и продукты питания (ПП) в спортивных магазинах страны.";

const AboutUs = () => {
  const prefLang = useSelector((state: RootState) => state.main.prefLang);

  return (
    <div className="flex justify-center">
      <div className="max-w-[1170px] flex pt-9 gap-20">
        {/* Part 1 */}
        <div className="max-w-[270px] flex flex-col items-center gap-4 pt-10">
          <img
            src="images/aboutus.png"
            alt=""
            className="w-[270px] h-[190px]"
          />
          <div className="text-center max-w-[90%]">
            <p className="font-semibold">SPORT-PORTAL</p>
            <p>
              {prefLang === "Tm"
                ? "Sport bilen bagly ähli zatlary özünde jemleýän platforma."
                : "Платформа, охватывающая всё, что связано со спортом."}
            </p>
          </div>
          <table className="text-white bg-[#0088FF] w-full text-center font-sofiasans">
            <tr>
              <td className="text-3xl p-3 font-semibold">512</td>
              <td className="text-start pl-2">
                {prefLang === "Tm" ? "Sport toplum" : "Спорт комплексы"}
              </td>
            </tr>
            <tr>
              <td className="text-3xl p-3 font-semibold">108</td>
              <td className="text-start pl-2">
                {prefLang === "Tm" ? "Sport mekdep" : "Спорт школы"}
              </td>
            </tr>
            <tr>
              <td className="text-3xl p-3 font-semibold">45</td>
              <td className="text-start pl-2">
                {prefLang === "Tm" ? "Sport görnüş" : "Тип спорта"}
              </td>
            </tr>
            <tr>
              <td className="text-3xl p-3 font-semibold">221</td>
              <td className="text-start pl-2">
                {prefLang === "Tm" ? "Türgenleşik zal" : "Тренажерные залы"}
              </td>
            </tr>
          </table>
        </div>

        {/* Part 2 */}
        <div className="w-full font-sofiasans text-center flex flex-col gap-6">
          <p className="capitalize font-oswald text-5xl">
            {prefLang === "Tm" ? "Biz barada" : "О нас"}
          </p>
          <p className="text-justify text-2xl">{prefLang === "Tm" ? textTm : textRu}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
