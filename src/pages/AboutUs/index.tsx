import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const textTm =
  "Türkmenistan Garaşsyzlygyny gazanandan soňra ýurtda bedenterbiýe we sport hereketlerini ýola goýmagyň täze usullary kemala gelip ugrady hem-de şol ugurda halkara hyzmatdaşlygy alyp barmagyň düýp esasy goýuldy. 2007-nji ýylda Gurbanguly Berdimuhamedowyň Prezident wezipesine saýlanylmagy bilen döwlet gurlyşynyň we jemgyýetiň ähli ulgamlarynda, şol sanda sport ulgamynda hem özgertmeler geçirilip başlandy. Şol döwürden bäri ýurdumyzda bedenterbiýäniň we sportuň kämilleşmegi, adamyň kuwwatynyň maddy we ruhy taýdan sazlaşykly utgaşmagy netijesinde sagdyn durmuş ýörelgesine eýe bolmagy, şeýle hem sport ugry boýunça halkara hyzmatdaşlygyň giňelmegi döwlet syýasatymyzyň ileri tutulýan ugurlarynyň biri boldy.\n Şeýle syýasaty durmuşa geçirmek maksady bilen diýarymyzyň ähli welaýatlarynda köpugurly stadionlar, bedenterbiýe we sagaldyş toplumlary, aýlawlar, sport mekdepleri we başga-da ş.m. desgalar bina edildi. Ýurdumyzda türgenlerdir hünärmenleri taýýarlamagyň täze usullary we sport oýunlaryny geçirmegiň tejribesi kämilleşdirildi, türkmen türgenleri bolsa daşary ýurtlarda geçirilýän sport ýaryşlaryna işjeň gatnaşyp başladylar. 2012-nji ýylyň 1-nji ýanwaryndan bäri «Türkmenistan–sport» telekanaly “Türkmenistan – sagdynlygyň we ruhubelentligiň ýurdy” şygary astynda alnyp barylýan bedenterbiýe we sport ugrunda gazanylan üstünlikleri beýan etmek, sagdyn durmuş ýörelgesini wagyz etmek üçin ýaýlymda yzygiderli gepleşikleri bermegini dowam edýär.\n Türkmenistanyň aýratyn howa-klimat şertlerine garap, bu ýerde sportuň gyşky görnüşleri bilen meşgullanmaga giň mümkinçilikler döredildi. Aşgabatda sportuň gyşky görnüşleri boýunça Sport toplumy, “Awaza” milli syýahatçylyk zolagynda bolsa uly göwrümli buz meýdançalaryndan ybarat bolan köpugurly sport toplumy guruldy. Ýurdumyzda hokkeý boýunça milli çempionat oýunlary indi birnäçe ýyl bäri geçirilýär, şeýle hem sportyň figuralaýyn buzda typmak we şort-trek ýaly görnüşleri ösdürilýär.";
const textRu =
  "После обретения Туркменистаном независимости в стране сформировались новые методы физической культуры и спортивной деятельности, заложена фундаментальная основа международного сотрудничества в этой сфере. В 2007 году с избранием Гурбангулы Бердымухамедова Президентом были проведены реформы во всех сферах государственного устройства и общества, в том числе в спорте. С этого времени совершенствование физического воспитания и спорта в стране, ведение здорового образа жизни как результат гармоничного сочетания материальных и духовных сил человека, а также расширение международного сотрудничества в области спорта стали одной из задач приоритетных направлений нашей государственной политики.\n В целях реализации такой политики во всех регионах нашей страны построены многофункциональные стадионы, физкультурно-оздоровительные центры, автодромы, спортивные школы и т.д. объекты были построены. Были усовершенствованы новые методы подготовки спортсменов в стране и опыт проведения спортивных игр, а туркменские спортсмены стали активно участвовать в спортивных соревнованиях, проводимых за рубежом. С 1 января 2012 года телеканал «Туркменистан-спорт» продолжает вести регулярные передачи под лозунгом «Туркменистан – страна здоровья и духовности», рассказывающие о достижениях в области физического воспитания и спорта, пропаганды здорового образа жизни. Благодаря особым погодно-климатическим условиям Туркменистана здесь открываются широкие возможности для занятий зимними видами спорта.\n В Ашхабаде построен спортивный комплекс для зимних видов спорта, а в национальной туристической зоне «Аваза» — многофункциональный спортивный комплекс, состоящий из масштабных ледовых катков. В стране уже несколько лет проводятся чемпионаты страны по хоккею, а также развиваются такие виды спорта, как фигурное катание и шорт-трек.";

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
          <p className="text-justify">{prefLang === "Tm" ? textTm : textRu}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
