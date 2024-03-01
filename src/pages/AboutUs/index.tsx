import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const textTm = `Berkarar döwletiň täze eýýamynyň Galkynyşy döwründe Arkadagly Gahryman Serdarymyzyň taýsyz tagallalary netijesinde  ýurdumyzda ylym-bilim, saglygy goraýyş we sport ulgamlaryna uly üns berilýär. Esasan hem sportyň we bedenterbiýäniň ýurdumyzda tutýan ornuny giňeltmekde, ony sanly ulgama geçirmekde we köpçülikleýin habar beriş serişdelerine ýetirmekde ähli şertler döredilýär.
Prezidentimiz Serdar Berdimuhamedowyň: “Sportuň, bedenterbiýäniň ýörgünli bolmagy, birinjiden, halkyň, esasan hem ýaşlaryň saglygy üçin uly ähmiýetli bolsa, ikinjiden, dünýäde ýurduň sport abraýynyň ýokarlandyrylmagyny şertlendirýär” diýen paýhasly sözlerinden ugur alyp, men hem ata Watanymyzyň Sport ulgamynda ösüşine öz mynasyp goşandymy goşmak maksady bilen ýurdumyzdaky ilkinji SPORTPORTAL ulgamyny taýýarladyk.
  
SPORTPORTAL – türkmen sporty barada taýýarlanylan ilkinji ulgam bolup, bu ulgam arkaly milli türgenlerimizi halkymyza hem-de dünýä ýüzüne tanatmak we ýaş neslimiziň sporta bolan höwesini has-da artdyrmak bolup durýar. Ýurdumyzdaky sport federasiýalary, ussat tälimçilerimizi, türgenlerimizi olaryň alyp barýan işlerini köpçülikleýin habar beriş serişdelerine çykarmak, gündelik geçirilýän sport çäreleri, bäsleşikleri we täzelikleri halkymyza sanly ulgamyň üsti bilen hödürlemek.`;
const textRu = `В период возрождения новой эпохи стабильного государства, в результате неустанных усилий нашего Архигероя Сердара, большое внимание уделяется системе науки и образования, здравоохранения и спорта в нашей стране. В частности, созданы все условия для расширения роли спорта и физического воспитания в стране, перевода их в цифровую систему и в средства массовой информации.
По мудрым словам нашего Президента Сердара Бердымухамедова: «Успехи спорта и физической культуры, во-первых, имеют большое значение для здоровья народа, особенно молодежи, а во-вторых, обусловливают улучшение спортивной репутации». страны в мире», и внесу свой достойный вклад в развитие спортивной системы Родины. Для этого мы подготовили первую в нашей стране систему «СПОРТПОРТАЛ».

СПОРТПОРТАЛ — первая система, разработанная для туркменского спорта, и с помощью этой системы она направлена ​​на то, чтобы познакомить наших национальных спортсменов с нашим народом и миром, а также повысить энтузиазм нашего молодого поколения к спорту. Спортивные федерации страны, наши главные тренеры, наши спортсмены должны освещать свою деятельность в средствах массовой информации, представлять ежедневные спортивные события, соревнования и новости нашему народу через цифровую систему.`;

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
            <p className="font-semibold">SPORTPORTAL</p>
            <p>
              {prefLang === "Tm"
                ? "Sport bilen bagly ähli zatlary özünde jemleýän platforma."
                : "Платформа, охватывающая всё, что связано со спортом."}
            </p>
          </div>
          <table className="text-white bg-[#0088FF] w-full text-center font-inter">
            <tr>
              <td className="text-3xl p-3 font-semibold">-</td>
              <td className="text-start pl-2">
                {prefLang === "Tm" ? "Sport toplum" : "Спорт комплексы"}
              </td>
            </tr>
            <tr>
              <td className="text-3xl p-3 font-semibold">-</td>
              <td className="text-start pl-2">
                {prefLang === "Tm" ? "Sport mekdep" : "Спорт школы"}
              </td>
            </tr>
            <tr>
              <td className="text-3xl p-3 font-semibold">-</td>
              <td className="text-start pl-2">
                {prefLang === "Tm" ? "Sport görnüş" : "Тип спорта"}
              </td>
            </tr>
            <tr>
              <td className="text-3xl p-3 font-semibold">-</td>
              <td className="text-start pl-2">
                {prefLang === "Tm" ? "Türgenleşik zal" : "Тренажерные залы"}
              </td>
            </tr>
          </table>
        </div>

        {/* Part 2 */}
        <div className="w-full font-inter text-center flex flex-col gap-6">
          <p className="capitalize font-oswald text-5xl">
            {prefLang === "Tm" ? "Biz barada" : "О нас"}
          </p>
          <p className="text-justify text-xl whitespace-pre-line leading-relaxed">
            {prefLang === "Tm" ? textTm : textRu}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
