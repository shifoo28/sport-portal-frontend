import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import Item from "./Item";

export const competes = [
  {
    id: "1",
    nameTm:
      "Türkmenistanyň Atletika Federasiýasynyň guramagyndaky sportuň Arm-Wrestling görnüşi boýunça Aşgabat şäher çempionaty ",
    nameRu:
      "Чемпионат города Ашхабада по армрестлингу, организованный Федерацией легкой атлетики Туркменистана",
    textTm:
      "Şu günler Koreýa Respublikasynyň Çinju şäherinde Agyr atletika boýunça Aziýa çempionaty geçirilýär. Häzire çenli ýaryşda türkmen türgenleri dört medala eýe çykdylar. Has takygy, 64 kilograma çenli agram derejede ýaryşa gatnaşan Medine Amanowa itekläp götermekde 117 kilogram (kiçi kümüş medal), silterläp götermekde 90 kilogram (kiçi bürünç medal) we iki görnüşiň jemi boýunça 207 kilogram (uly kümüş medal) netije görkezip, Türkmenistanyň ýygyndysynyň hasabyna üç medal goşmagy başardy. Bu agram derejede altyn medallaryň üçüsini (itekläp götermekde 118 kilogram, silterläp götermekde 93 kilogram, iki görnüşiň jemi boýunça 211 kilogram) hem mongoliýaly Anuin Ganzoriging özüniňki etdi. Itekläp götermekde (109 kilogram) we iki görnüşiň jemi boýunça (194 kilogram) bürünç medala eýranly Fatima Kişewarz mynasyp boldy. Silterläp götermekdäki kümüş medal bolsa 91 kilogram netije görkezen gazagystanly Karina Goriçýewa nesip etdi. Türkmenistanly ýene bir türgen Bunýad Raşidow bolsa 67 kilograma çenli erkekleriň arasyndaky ýaryşda silterläp götermekde 140 kilogram netije bilen kiçi bürünç medala mynasyp boldy. Itekläp götermekde 162 kilogram agyrlygy göteren Bunýad Raşidow iki görnüşiň jemi boýunça 302 kilogram netije bilen bäşinji orundan ýer aldy. Ýeri gelende bellesek, 5-nji maýda badalga alan Agyr atletika boýunça Aziýa çempionaty 13-nji maýa çenli dowam eder. Ýaryşda Türkmenistana 16 türgen wekilçilik edýär.",
    textRu:
      "В настоящее время в Чинджу, Республика Корея, проходит чемпионат Азии по тяжелой атлетике. На данный момент туркменские спортсмены завоевали на соревнованиях четыре медали. Точнее, Медине Аманова, участвовавшая в соревнованиях в весовой категории до 64 килограммов, добилась результатов 117 килограммов (малая серебряная медаль), 90 килограммов (малая бронзовая медаль) в становой тяге и 207 килограммов (большая серебряная медаль) в становой тяге. Всего два вида, а за счет сборной Туркменистана удалось добавить еще три медали. Три золотые медали в этой весовой категории (118 кг в толчке, 93 кг в становой тяге, 211 кг в сумме в обоих видах) завоевал монголь Ануин Ганзоргинг. Иранка Фатима Кишеварз завоевала бронзовую медаль в толчке (109 килограммов) и сумме двух видов (194 килограмма). Серебряная медаль в становой тяге досталась Карине Горичевой из Казахстана, выступившей с весом 91 килограмм. Еще один спортсмен из Туркменистана Буньяд Рашидов завоевал малую бронзовую медаль в соревнованиях по тяжелой атлетике среди мужчин до 67 кг с результатом 140 кг. Буньяд Рашидов, поднявший в становой тяге вес 162 килограмма, занял пятое место с общим весом 302 килограмма. Насколько нам известно, чемпионат Азии по тяжелой атлетике, стартовавший 5 мая, продлится до 13 мая. Туркменистан на соревнованиях представляют 16 спортсменов.",
    location: "Aşgabat",
    views: 35.328,
    imagePath: "images/competitions/1.png",
    typeId: 0,
    dateStart: new Date("2023-09-23"),
    endDate: new Date("2023-10-30"),
    competitionType: { id: 0, nameTm: "Bäsleşik", nameRu: "Соревнование" },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    nameTm:
      "Türkmenistanyň Atletika Federasiýasynyň guramagyndaky sportuň Arm-Wrestling görnüşi boýunça Aşgabat şäher çempionaty ",
    nameRu:
      "Чемпионат города Ашхабада по армрестлингу, организованный Федерацией легкой атлетики Туркменистана",
    textTm:
      "Şu günler Koreýa Respublikasynyň Çinju şäherinde Agyr atletika boýunça Aziýa çempionaty geçirilýär. Häzire çenli ýaryşda türkmen türgenleri dört medala eýe çykdylar. Has takygy, 64 kilograma çenli agram derejede ýaryşa gatnaşan Medine Amanowa itekläp götermekde 117 kilogram (kiçi kümüş medal), silterläp götermekde 90 kilogram (kiçi bürünç medal) we iki görnüşiň jemi boýunça 207 kilogram (uly kümüş medal) netije görkezip, Türkmenistanyň ýygyndysynyň hasabyna üç medal goşmagy başardy. Bu agram derejede altyn medallaryň üçüsini (itekläp götermekde 118 kilogram, silterläp götermekde 93 kilogram, iki görnüşiň jemi boýunça 211 kilogram) hem mongoliýaly Anuin Ganzoriging özüniňki etdi. Itekläp götermekde (109 kilogram) we iki görnüşiň jemi boýunça (194 kilogram) bürünç medala eýranly Fatima Kişewarz mynasyp boldy. Silterläp götermekdäki kümüş medal bolsa 91 kilogram netije görkezen gazagystanly Karina Goriçýewa nesip etdi. Türkmenistanly ýene bir türgen Bunýad Raşidow bolsa 67 kilograma çenli erkekleriň arasyndaky ýaryşda silterläp götermekde 140 kilogram netije bilen kiçi bürünç medala mynasyp boldy. Itekläp götermekde 162 kilogram agyrlygy göteren Bunýad Raşidow iki görnüşiň jemi boýunça 302 kilogram netije bilen bäşinji orundan ýer aldy. Ýeri gelende bellesek, 5-nji maýda badalga alan Agyr atletika boýunça Aziýa çempionaty 13-nji maýa çenli dowam eder. Ýaryşda Türkmenistana 16 türgen wekilçilik edýär.",
    textRu:
      "В настоящее время в Чинджу, Республика Корея, проходит чемпионат Азии по тяжелой атлетике. На данный момент туркменские спортсмены завоевали на соревнованиях четыре медали. Точнее, Медине Аманова, участвовавшая в соревнованиях в весовой категории до 64 килограммов, добилась результатов 117 килограммов (малая серебряная медаль), 90 килограммов (малая бронзовая медаль) в становой тяге и 207 килограммов (большая серебряная медаль) в становой тяге. Всего два вида, а за счет сборной Туркменистана удалось добавить еще три медали. Три золотые медали в этой весовой категории (118 кг в толчке, 93 кг в становой тяге, 211 кг в сумме в обоих видах) завоевал монголь Ануин Ганзоргинг. Иранка Фатима Кишеварз завоевала бронзовую медаль в толчке (109 килограммов) и сумме двух видов (194 килограмма). Серебряная медаль в становой тяге досталась Карине Горичевой из Казахстана, выступившей с весом 91 килограмм. Еще один спортсмен из Туркменистана Буньяд Рашидов завоевал малую бронзовую медаль в соревнованиях по тяжелой атлетике среди мужчин до 67 кг с результатом 140 кг. Буньяд Рашидов, поднявший в становой тяге вес 162 килограмма, занял пятое место с общим весом 302 килограмма. Насколько нам известно, чемпионат Азии по тяжелой атлетике, стартовавший 5 мая, продлится до 13 мая. Туркменистан на соревнованиях представляют 16 спортсменов.",
    location: "Aşgabat",
    views: 35.328,
    imagePath: "images/competitions/1.png",
    typeId: 0,
    dateStart: new Date("2023-09-23"),
    endDate: new Date("2023-10-30"),
    competitionType: { id: 0, nameTm: "Sport çäre", nameRu: "Соревнование" },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    nameTm:
      "Türkmenistanyň Atletika Federasiýasynyň guramagyndaky sportuň Arm-Wrestling görnüşi boýunça Aşgabat şäher çempionaty ",
    nameRu:
      "Чемпионат города Ашхабада по армрестлингу, организованный Федерацией легкой атлетики Туркменистана",
    textTm:
      "Şu günler Koreýa Respublikasynyň Çinju şäherinde Agyr atletika boýunça Aziýa çempionaty geçirilýär. Häzire çenli ýaryşda türkmen türgenleri dört medala eýe çykdylar. Has takygy, 64 kilograma çenli agram derejede ýaryşa gatnaşan Medine Amanowa itekläp götermekde 117 kilogram (kiçi kümüş medal), silterläp götermekde 90 kilogram (kiçi bürünç medal) we iki görnüşiň jemi boýunça 207 kilogram (uly kümüş medal) netije görkezip, Türkmenistanyň ýygyndysynyň hasabyna üç medal goşmagy başardy. Bu agram derejede altyn medallaryň üçüsini (itekläp götermekde 118 kilogram, silterläp götermekde 93 kilogram, iki görnüşiň jemi boýunça 211 kilogram) hem mongoliýaly Anuin Ganzoriging özüniňki etdi. Itekläp götermekde (109 kilogram) we iki görnüşiň jemi boýunça (194 kilogram) bürünç medala eýranly Fatima Kişewarz mynasyp boldy. Silterläp götermekdäki kümüş medal bolsa 91 kilogram netije görkezen gazagystanly Karina Goriçýewa nesip etdi. Türkmenistanly ýene bir türgen Bunýad Raşidow bolsa 67 kilograma çenli erkekleriň arasyndaky ýaryşda silterläp götermekde 140 kilogram netije bilen kiçi bürünç medala mynasyp boldy. Itekläp götermekde 162 kilogram agyrlygy göteren Bunýad Raşidow iki görnüşiň jemi boýunça 302 kilogram netije bilen bäşinji orundan ýer aldy. Ýeri gelende bellesek, 5-nji maýda badalga alan Agyr atletika boýunça Aziýa çempionaty 13-nji maýa çenli dowam eder. Ýaryşda Türkmenistana 16 türgen wekilçilik edýär.",
    textRu:
      "В настоящее время в Чинджу, Республика Корея, проходит чемпионат Азии по тяжелой атлетике. На данный момент туркменские спортсмены завоевали на соревнованиях четыре медали. Точнее, Медине Аманова, участвовавшая в соревнованиях в весовой категории до 64 килограммов, добилась результатов 117 килограммов (малая серебряная медаль), 90 килограммов (малая бронзовая медаль) в становой тяге и 207 килограммов (большая серебряная медаль) в становой тяге. Всего два вида, а за счет сборной Туркменистана удалось добавить еще три медали. Три золотые медали в этой весовой категории (118 кг в толчке, 93 кг в становой тяге, 211 кг в сумме в обоих видах) завоевал монголь Ануин Ганзоргинг. Иранка Фатима Кишеварз завоевала бронзовую медаль в толчке (109 килограммов) и сумме двух видов (194 килограмма). Серебряная медаль в становой тяге досталась Карине Горичевой из Казахстана, выступившей с весом 91 килограмм. Еще один спортсмен из Туркменистана Буньяд Рашидов завоевал малую бронзовую медаль в соревнованиях по тяжелой атлетике среди мужчин до 67 кг с результатом 140 кг. Буньяд Рашидов, поднявший в становой тяге вес 162 килограмма, занял пятое место с общим весом 302 килограмма. Насколько нам известно, чемпионат Азии по тяжелой атлетике, стартовавший 5 мая, продлится до 13 мая. Туркменистан на соревнованиях представляют 16 спортсменов.",
    location: "Aşgabat",
    views: 35.328,
    imagePath: "images/competitions/1.png",
    typeId: 0,
    dateStart: new Date("2023-09-23"),
    endDate: new Date("2023-10-30"),
    competitionType: { id: 0, nameTm: "Sport okuw", nameRu: "Соревнование" },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "4",
    nameTm:
      "Türkmenistanyň Atletika Federasiýasynyň guramagyndaky sportuň Arm-Wrestling görnüşi boýunça Aşgabat şäher çempionaty ",
    nameRu:
      "Чемпионат города Ашхабада по армрестлингу, организованный Федерацией легкой атлетики Туркменистана",
    textTm:
      "Şu günler Koreýa Respublikasynyň Çinju şäherinde Agyr atletika boýunça Aziýa çempionaty geçirilýär. Häzire çenli ýaryşda türkmen türgenleri dört medala eýe çykdylar. Has takygy, 64 kilograma çenli agram derejede ýaryşa gatnaşan Medine Amanowa itekläp götermekde 117 kilogram (kiçi kümüş medal), silterläp götermekde 90 kilogram (kiçi bürünç medal) we iki görnüşiň jemi boýunça 207 kilogram (uly kümüş medal) netije görkezip, Türkmenistanyň ýygyndysynyň hasabyna üç medal goşmagy başardy. Bu agram derejede altyn medallaryň üçüsini (itekläp götermekde 118 kilogram, silterläp götermekde 93 kilogram, iki görnüşiň jemi boýunça 211 kilogram) hem mongoliýaly Anuin Ganzoriging özüniňki etdi. Itekläp götermekde (109 kilogram) we iki görnüşiň jemi boýunça (194 kilogram) bürünç medala eýranly Fatima Kişewarz mynasyp boldy. Silterläp götermekdäki kümüş medal bolsa 91 kilogram netije görkezen gazagystanly Karina Goriçýewa nesip etdi. Türkmenistanly ýene bir türgen Bunýad Raşidow bolsa 67 kilograma çenli erkekleriň arasyndaky ýaryşda silterläp götermekde 140 kilogram netije bilen kiçi bürünç medala mynasyp boldy. Itekläp götermekde 162 kilogram agyrlygy göteren Bunýad Raşidow iki görnüşiň jemi boýunça 302 kilogram netije bilen bäşinji orundan ýer aldy. Ýeri gelende bellesek, 5-nji maýda badalga alan Agyr atletika boýunça Aziýa çempionaty 13-nji maýa çenli dowam eder. Ýaryşda Türkmenistana 16 türgen wekilçilik edýär.",
    textRu:
      "В настоящее время в Чинджу, Республика Корея, проходит чемпионат Азии по тяжелой атлетике. На данный момент туркменские спортсмены завоевали на соревнованиях четыре медали. Точнее, Медине Аманова, участвовавшая в соревнованиях в весовой категории до 64 килограммов, добилась результатов 117 килограммов (малая серебряная медаль), 90 килограммов (малая бронзовая медаль) в становой тяге и 207 килограммов (большая серебряная медаль) в становой тяге. Всего два вида, а за счет сборной Туркменистана удалось добавить еще три медали. Три золотые медали в этой весовой категории (118 кг в толчке, 93 кг в становой тяге, 211 кг в сумме в обоих видах) завоевал монголь Ануин Ганзоргинг. Иранка Фатима Кишеварз завоевала бронзовую медаль в толчке (109 килограммов) и сумме двух видов (194 килограмма). Серебряная медаль в становой тяге досталась Карине Горичевой из Казахстана, выступившей с весом 91 килограмм. Еще один спортсмен из Туркменистана Буньяд Рашидов завоевал малую бронзовую медаль в соревнованиях по тяжелой атлетике среди мужчин до 67 кг с результатом 140 кг. Буньяд Рашидов, поднявший в становой тяге вес 162 килограмма, занял пятое место с общим весом 302 килограмма. Насколько нам известно, чемпионат Азии по тяжелой атлетике, стартовавший 5 мая, продлится до 13 мая. Туркменистан на соревнованиях представляют 16 спортсменов.",
    location: "Aşgabat",
    views: 35.328,
    imagePath: "images/competitions/1.png",
    typeId: 0,
    dateStart: new Date("2023-09-23"),
    endDate: new Date("2023-10-30"),
    competitionType: { id: 0, nameTm: "Bäsleşik", nameRu: "Соревнование" },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "5",
    nameTm:
      "Türkmenistanyň Atletika Federasiýasynyň guramagyndaky sportuň Arm-Wrestling görnüşi boýunça Aşgabat şäher çempionaty ",
    nameRu:
      "Чемпионат города Ашхабада по армрестлингу, организованный Федерацией легкой атлетики Туркменистана",
    textTm:
      "Şu günler Koreýa Respublikasynyň Çinju şäherinde Agyr atletika boýunça Aziýa çempionaty geçirilýär. Häzire çenli ýaryşda türkmen türgenleri dört medala eýe çykdylar. Has takygy, 64 kilograma çenli agram derejede ýaryşa gatnaşan Medine Amanowa itekläp götermekde 117 kilogram (kiçi kümüş medal), silterläp götermekde 90 kilogram (kiçi bürünç medal) we iki görnüşiň jemi boýunça 207 kilogram (uly kümüş medal) netije görkezip, Türkmenistanyň ýygyndysynyň hasabyna üç medal goşmagy başardy. Bu agram derejede altyn medallaryň üçüsini (itekläp götermekde 118 kilogram, silterläp götermekde 93 kilogram, iki görnüşiň jemi boýunça 211 kilogram) hem mongoliýaly Anuin Ganzoriging özüniňki etdi. Itekläp götermekde (109 kilogram) we iki görnüşiň jemi boýunça (194 kilogram) bürünç medala eýranly Fatima Kişewarz mynasyp boldy. Silterläp götermekdäki kümüş medal bolsa 91 kilogram netije görkezen gazagystanly Karina Goriçýewa nesip etdi. Türkmenistanly ýene bir türgen Bunýad Raşidow bolsa 67 kilograma çenli erkekleriň arasyndaky ýaryşda silterläp götermekde 140 kilogram netije bilen kiçi bürünç medala mynasyp boldy. Itekläp götermekde 162 kilogram agyrlygy göteren Bunýad Raşidow iki görnüşiň jemi boýunça 302 kilogram netije bilen bäşinji orundan ýer aldy. Ýeri gelende bellesek, 5-nji maýda badalga alan Agyr atletika boýunça Aziýa çempionaty 13-nji maýa çenli dowam eder. Ýaryşda Türkmenistana 16 türgen wekilçilik edýär.",
    textRu:
      "В настоящее время в Чинджу, Республика Корея, проходит чемпионат Азии по тяжелой атлетике. На данный момент туркменские спортсмены завоевали на соревнованиях четыре медали. Точнее, Медине Аманова, участвовавшая в соревнованиях в весовой категории до 64 килограммов, добилась результатов 117 килограммов (малая серебряная медаль), 90 килограммов (малая бронзовая медаль) в становой тяге и 207 килограммов (большая серебряная медаль) в становой тяге. Всего два вида, а за счет сборной Туркменистана удалось добавить еще три медали. Три золотые медали в этой весовой категории (118 кг в толчке, 93 кг в становой тяге, 211 кг в сумме в обоих видах) завоевал монголь Ануин Ганзоргинг. Иранка Фатима Кишеварз завоевала бронзовую медаль в толчке (109 килограммов) и сумме двух видов (194 килограмма). Серебряная медаль в становой тяге досталась Карине Горичевой из Казахстана, выступившей с весом 91 килограмм. Еще один спортсмен из Туркменистана Буньяд Рашидов завоевал малую бронзовую медаль в соревнованиях по тяжелой атлетике среди мужчин до 67 кг с результатом 140 кг. Буньяд Рашидов, поднявший в становой тяге вес 162 килограмма, занял пятое место с общим весом 302 килограмма. Насколько нам известно, чемпионат Азии по тяжелой атлетике, стартовавший 5 мая, продлится до 13 мая. Туркменистан на соревнованиях представляют 16 спортсменов.",
    location: "Aşgabat",
    views: 35.328,
    imagePath: "images/competitions/1.png",
    typeId: 0,
    dateStart: new Date("2023-09-23"),
    endDate: new Date("2023-10-30"),
    competitionType: { id: 0, nameTm: "Bäsleşik", nameRu: "Соревнование" },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "6",
    nameTm:
      "Türkmenistanyň Atletika Federasiýasynyň guramagyndaky sportuň Arm-Wrestling görnüşi boýunça Aşgabat şäher çempionaty ",
    nameRu:
      "Чемпионат города Ашхабада по армрестлингу, организованный Федерацией легкой атлетики Туркменистана",
    textTm:
      "Şu günler Koreýa Respublikasynyň Çinju şäherinde Agyr atletika boýunça Aziýa çempionaty geçirilýär. Häzire çenli ýaryşda türkmen türgenleri dört medala eýe çykdylar. Has takygy, 64 kilograma çenli agram derejede ýaryşa gatnaşan Medine Amanowa itekläp götermekde 117 kilogram (kiçi kümüş medal), silterläp götermekde 90 kilogram (kiçi bürünç medal) we iki görnüşiň jemi boýunça 207 kilogram (uly kümüş medal) netije görkezip, Türkmenistanyň ýygyndysynyň hasabyna üç medal goşmagy başardy. Bu agram derejede altyn medallaryň üçüsini (itekläp götermekde 118 kilogram, silterläp götermekde 93 kilogram, iki görnüşiň jemi boýunça 211 kilogram) hem mongoliýaly Anuin Ganzoriging özüniňki etdi. Itekläp götermekde (109 kilogram) we iki görnüşiň jemi boýunça (194 kilogram) bürünç medala eýranly Fatima Kişewarz mynasyp boldy. Silterläp götermekdäki kümüş medal bolsa 91 kilogram netije görkezen gazagystanly Karina Goriçýewa nesip etdi. Türkmenistanly ýene bir türgen Bunýad Raşidow bolsa 67 kilograma çenli erkekleriň arasyndaky ýaryşda silterläp götermekde 140 kilogram netije bilen kiçi bürünç medala mynasyp boldy. Itekläp götermekde 162 kilogram agyrlygy göteren Bunýad Raşidow iki görnüşiň jemi boýunça 302 kilogram netije bilen bäşinji orundan ýer aldy. Ýeri gelende bellesek, 5-nji maýda badalga alan Agyr atletika boýunça Aziýa çempionaty 13-nji maýa çenli dowam eder. Ýaryşda Türkmenistana 16 türgen wekilçilik edýär.",
    textRu:
      "В настоящее время в Чинджу, Республика Корея, проходит чемпионат Азии по тяжелой атлетике. На данный момент туркменские спортсмены завоевали на соревнованиях четыре медали. Точнее, Медине Аманова, участвовавшая в соревнованиях в весовой категории до 64 килограммов, добилась результатов 117 килограммов (малая серебряная медаль), 90 килограммов (малая бронзовая медаль) в становой тяге и 207 килограммов (большая серебряная медаль) в становой тяге. Всего два вида, а за счет сборной Туркменистана удалось добавить еще три медали. Три золотые медали в этой весовой категории (118 кг в толчке, 93 кг в становой тяге, 211 кг в сумме в обоих видах) завоевал монголь Ануин Ганзоргинг. Иранка Фатима Кишеварз завоевала бронзовую медаль в толчке (109 килограммов) и сумме двух видов (194 килограмма). Серебряная медаль в становой тяге досталась Карине Горичевой из Казахстана, выступившей с весом 91 килограмм. Еще один спортсмен из Туркменистана Буньяд Рашидов завоевал малую бронзовую медаль в соревнованиях по тяжелой атлетике среди мужчин до 67 кг с результатом 140 кг. Буньяд Рашидов, поднявший в становой тяге вес 162 килограмма, занял пятое место с общим весом 302 килограмма. Насколько нам известно, чемпионат Азии по тяжелой атлетике, стартовавший 5 мая, продлится до 13 мая. Туркменистан на соревнованиях представляют 16 спортсменов.",
    location: "Aşgabat",
    views: 35.328,
    imagePath: "images/competitions/1.png",
    typeId: 0,
    dateStart: new Date("2023-09-23"),
    endDate: new Date("2023-10-30"),
    competitionType: { id: 0, nameTm: "Bäsleşik", nameRu: "Соревнование" },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "7",
    nameTm:
      "Türkmenistanyň Atletika Federasiýasynyň guramagyndaky sportuň Arm-Wrestling görnüşi boýunça Aşgabat şäher çempionaty ",
    nameRu:
      "Чемпионат города Ашхабада по армрестлингу, организованный Федерацией легкой атлетики Туркменистана",
    textTm:
      "Şu günler Koreýa Respublikasynyň Çinju şäherinde Agyr atletika boýunça Aziýa çempionaty geçirilýär. Häzire çenli ýaryşda türkmen türgenleri dört medala eýe çykdylar. Has takygy, 64 kilograma çenli agram derejede ýaryşa gatnaşan Medine Amanowa itekläp götermekde 117 kilogram (kiçi kümüş medal), silterläp götermekde 90 kilogram (kiçi bürünç medal) we iki görnüşiň jemi boýunça 207 kilogram (uly kümüş medal) netije görkezip, Türkmenistanyň ýygyndysynyň hasabyna üç medal goşmagy başardy. Bu agram derejede altyn medallaryň üçüsini (itekläp götermekde 118 kilogram, silterläp götermekde 93 kilogram, iki görnüşiň jemi boýunça 211 kilogram) hem mongoliýaly Anuin Ganzoriging özüniňki etdi. Itekläp götermekde (109 kilogram) we iki görnüşiň jemi boýunça (194 kilogram) bürünç medala eýranly Fatima Kişewarz mynasyp boldy. Silterläp götermekdäki kümüş medal bolsa 91 kilogram netije görkezen gazagystanly Karina Goriçýewa nesip etdi. Türkmenistanly ýene bir türgen Bunýad Raşidow bolsa 67 kilograma çenli erkekleriň arasyndaky ýaryşda silterläp götermekde 140 kilogram netije bilen kiçi bürünç medala mynasyp boldy. Itekläp götermekde 162 kilogram agyrlygy göteren Bunýad Raşidow iki görnüşiň jemi boýunça 302 kilogram netije bilen bäşinji orundan ýer aldy. Ýeri gelende bellesek, 5-nji maýda badalga alan Agyr atletika boýunça Aziýa çempionaty 13-nji maýa çenli dowam eder. Ýaryşda Türkmenistana 16 türgen wekilçilik edýär.",
    textRu:
      "В настоящее время в Чинджу, Республика Корея, проходит чемпионат Азии по тяжелой атлетике. На данный момент туркменские спортсмены завоевали на соревнованиях четыре медали. Точнее, Медине Аманова, участвовавшая в соревнованиях в весовой категории до 64 килограммов, добилась результатов 117 килограммов (малая серебряная медаль), 90 килограммов (малая бронзовая медаль) в становой тяге и 207 килограммов (большая серебряная медаль) в становой тяге. Всего два вида, а за счет сборной Туркменистана удалось добавить еще три медали. Три золотые медали в этой весовой категории (118 кг в толчке, 93 кг в становой тяге, 211 кг в сумме в обоих видах) завоевал монголь Ануин Ганзоргинг. Иранка Фатима Кишеварз завоевала бронзовую медаль в толчке (109 килограммов) и сумме двух видов (194 килограмма). Серебряная медаль в становой тяге досталась Карине Горичевой из Казахстана, выступившей с весом 91 килограмм. Еще один спортсмен из Туркменистана Буньяд Рашидов завоевал малую бронзовую медаль в соревнованиях по тяжелой атлетике среди мужчин до 67 кг с результатом 140 кг. Буньяд Рашидов, поднявший в становой тяге вес 162 килограмма, занял пятое место с общим весом 302 килограмма. Насколько нам известно, чемпионат Азии по тяжелой атлетике, стартовавший 5 мая, продлится до 13 мая. Туркменистан на соревнованиях представляют 16 спортсменов.",
    location: "Aşgabat",
    views: 35.328,
    imagePath: "images/competitions/1.png",
    typeId: 0,
    dateStart: new Date("2023-09-23"),
    endDate: new Date("2023-10-30"),
    competitionType: { id: 0, nameTm: "Bäsleşik", nameRu: "Соревнование" },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "8",
    nameTm:
      "Türkmenistanyň Atletika Federasiýasynyň guramagyndaky sportuň Arm-Wrestling görnüşi boýunça Aşgabat şäher çempionaty ",
    nameRu:
      "Чемпионат города Ашхабада по армрестлингу, организованный Федерацией легкой атлетики Туркменистана",
    textTm:
      "Şu günler Koreýa Respublikasynyň Çinju şäherinde Agyr atletika boýunça Aziýa çempionaty geçirilýär. Häzire çenli ýaryşda türkmen türgenleri dört medala eýe çykdylar. Has takygy, 64 kilograma çenli agram derejede ýaryşa gatnaşan Medine Amanowa itekläp götermekde 117 kilogram (kiçi kümüş medal), silterläp götermekde 90 kilogram (kiçi bürünç medal) we iki görnüşiň jemi boýunça 207 kilogram (uly kümüş medal) netije görkezip, Türkmenistanyň ýygyndysynyň hasabyna üç medal goşmagy başardy. Bu agram derejede altyn medallaryň üçüsini (itekläp götermekde 118 kilogram, silterläp götermekde 93 kilogram, iki görnüşiň jemi boýunça 211 kilogram) hem mongoliýaly Anuin Ganzoriging özüniňki etdi. Itekläp götermekde (109 kilogram) we iki görnüşiň jemi boýunça (194 kilogram) bürünç medala eýranly Fatima Kişewarz mynasyp boldy. Silterläp götermekdäki kümüş medal bolsa 91 kilogram netije görkezen gazagystanly Karina Goriçýewa nesip etdi. Türkmenistanly ýene bir türgen Bunýad Raşidow bolsa 67 kilograma çenli erkekleriň arasyndaky ýaryşda silterläp götermekde 140 kilogram netije bilen kiçi bürünç medala mynasyp boldy. Itekläp götermekde 162 kilogram agyrlygy göteren Bunýad Raşidow iki görnüşiň jemi boýunça 302 kilogram netije bilen bäşinji orundan ýer aldy. Ýeri gelende bellesek, 5-nji maýda badalga alan Agyr atletika boýunça Aziýa çempionaty 13-nji maýa çenli dowam eder. Ýaryşda Türkmenistana 16 türgen wekilçilik edýär.",
    textRu:
      "В настоящее время в Чинджу, Республика Корея, проходит чемпионат Азии по тяжелой атлетике. На данный момент туркменские спортсмены завоевали на соревнованиях четыре медали. Точнее, Медине Аманова, участвовавшая в соревнованиях в весовой категории до 64 килограммов, добилась результатов 117 килограммов (малая серебряная медаль), 90 килограммов (малая бронзовая медаль) в становой тяге и 207 килограммов (большая серебряная медаль) в становой тяге. Всего два вида, а за счет сборной Туркменистана удалось добавить еще три медали. Три золотые медали в этой весовой категории (118 кг в толчке, 93 кг в становой тяге, 211 кг в сумме в обоих видах) завоевал монголь Ануин Ганзоргинг. Иранка Фатима Кишеварз завоевала бронзовую медаль в толчке (109 килограммов) и сумме двух видов (194 килограмма). Серебряная медаль в становой тяге досталась Карине Горичевой из Казахстана, выступившей с весом 91 килограмм. Еще один спортсмен из Туркменистана Буньяд Рашидов завоевал малую бронзовую медаль в соревнованиях по тяжелой атлетике среди мужчин до 67 кг с результатом 140 кг. Буньяд Рашидов, поднявший в становой тяге вес 162 килограмма, занял пятое место с общим весом 302 килограмма. Насколько нам известно, чемпионат Азии по тяжелой атлетике, стартовавший 5 мая, продлится до 13 мая. Туркменистан на соревнованиях представляют 16 спортсменов.",
    location: "Aşgabat",
    views: 35.328,
    imagePath: "images/competitions/1.png",
    typeId: 0,
    dateStart: new Date("2023-09-23"),
    endDate: new Date("2023-10-30"),
    competitionType: { id: 0, nameTm: "Bäsleşik", nameRu: "Соревнование" },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "9",
    nameTm:
      "Türkmenistanyň Atletika Federasiýasynyň guramagyndaky sportuň Arm-Wrestling görnüşi boýunça Aşgabat şäher çempionaty ",
    nameRu:
      "Чемпионат города Ашхабада по армрестлингу, организованный Федерацией легкой атлетики Туркменистана",
    textTm:
      "Şu günler Koreýa Respublikasynyň Çinju şäherinde Agyr atletika boýunça Aziýa çempionaty geçirilýär. Häzire çenli ýaryşda türkmen türgenleri dört medala eýe çykdylar. Has takygy, 64 kilograma çenli agram derejede ýaryşa gatnaşan Medine Amanowa itekläp götermekde 117 kilogram (kiçi kümüş medal), silterläp götermekde 90 kilogram (kiçi bürünç medal) we iki görnüşiň jemi boýunça 207 kilogram (uly kümüş medal) netije görkezip, Türkmenistanyň ýygyndysynyň hasabyna üç medal goşmagy başardy. Bu agram derejede altyn medallaryň üçüsini (itekläp götermekde 118 kilogram, silterläp götermekde 93 kilogram, iki görnüşiň jemi boýunça 211 kilogram) hem mongoliýaly Anuin Ganzoriging özüniňki etdi. Itekläp götermekde (109 kilogram) we iki görnüşiň jemi boýunça (194 kilogram) bürünç medala eýranly Fatima Kişewarz mynasyp boldy. Silterläp götermekdäki kümüş medal bolsa 91 kilogram netije görkezen gazagystanly Karina Goriçýewa nesip etdi. Türkmenistanly ýene bir türgen Bunýad Raşidow bolsa 67 kilograma çenli erkekleriň arasyndaky ýaryşda silterläp götermekde 140 kilogram netije bilen kiçi bürünç medala mynasyp boldy. Itekläp götermekde 162 kilogram agyrlygy göteren Bunýad Raşidow iki görnüşiň jemi boýunça 302 kilogram netije bilen bäşinji orundan ýer aldy. Ýeri gelende bellesek, 5-nji maýda badalga alan Agyr atletika boýunça Aziýa çempionaty 13-nji maýa çenli dowam eder. Ýaryşda Türkmenistana 16 türgen wekilçilik edýär.",
    textRu:
      "В настоящее время в Чинджу, Республика Корея, проходит чемпионат Азии по тяжелой атлетике. На данный момент туркменские спортсмены завоевали на соревнованиях четыре медали. Точнее, Медине Аманова, участвовавшая в соревнованиях в весовой категории до 64 килограммов, добилась результатов 117 килограммов (малая серебряная медаль), 90 килограммов (малая бронзовая медаль) в становой тяге и 207 килограммов (большая серебряная медаль) в становой тяге. Всего два вида, а за счет сборной Туркменистана удалось добавить еще три медали. Три золотые медали в этой весовой категории (118 кг в толчке, 93 кг в становой тяге, 211 кг в сумме в обоих видах) завоевал монголь Ануин Ганзоргинг. Иранка Фатима Кишеварз завоевала бронзовую медаль в толчке (109 килограммов) и сумме двух видов (194 килограмма). Серебряная медаль в становой тяге досталась Карине Горичевой из Казахстана, выступившей с весом 91 килограмм. Еще один спортсмен из Туркменистана Буньяд Рашидов завоевал малую бронзовую медаль в соревнованиях по тяжелой атлетике среди мужчин до 67 кг с результатом 140 кг. Буньяд Рашидов, поднявший в становой тяге вес 162 килограмма, занял пятое место с общим весом 302 килограмма. Насколько нам известно, чемпионат Азии по тяжелой атлетике, стартовавший 5 мая, продлится до 13 мая. Туркменистан на соревнованиях представляют 16 спортсменов.",
    location: "Aşgabat",
    views: 35.328,
    imagePath: "images/competitions/1.png",
    typeId: 0,
    dateStart: new Date("2023-09-23"),
    endDate: new Date("2023-10-30"),
    competitionType: { id: 0, nameTm: "Bäsleşik", nameRu: "Соревнование" },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "10",
    nameTm:
      "Türkmenistanyň Atletika Federasiýasynyň guramagyndaky sportuň Arm-Wrestling görnüşi boýunça Aşgabat şäher çempionaty ",
    nameRu:
      "Чемпионат города Ашхабада по армрестлингу, организованный Федерацией легкой атлетики Туркменистана",
    textTm:
      "Şu günler Koreýa Respublikasynyň Çinju şäherinde Agyr atletika boýunça Aziýa çempionaty geçirilýär. Häzire çenli ýaryşda türkmen türgenleri dört medala eýe çykdylar. Has takygy, 64 kilograma çenli agram derejede ýaryşa gatnaşan Medine Amanowa itekläp götermekde 117 kilogram (kiçi kümüş medal), silterläp götermekde 90 kilogram (kiçi bürünç medal) we iki görnüşiň jemi boýunça 207 kilogram (uly kümüş medal) netije görkezip, Türkmenistanyň ýygyndysynyň hasabyna üç medal goşmagy başardy. Bu agram derejede altyn medallaryň üçüsini (itekläp götermekde 118 kilogram, silterläp götermekde 93 kilogram, iki görnüşiň jemi boýunça 211 kilogram) hem mongoliýaly Anuin Ganzoriging özüniňki etdi. Itekläp götermekde (109 kilogram) we iki görnüşiň jemi boýunça (194 kilogram) bürünç medala eýranly Fatima Kişewarz mynasyp boldy. Silterläp götermekdäki kümüş medal bolsa 91 kilogram netije görkezen gazagystanly Karina Goriçýewa nesip etdi. Türkmenistanly ýene bir türgen Bunýad Raşidow bolsa 67 kilograma çenli erkekleriň arasyndaky ýaryşda silterläp götermekde 140 kilogram netije bilen kiçi bürünç medala mynasyp boldy. Itekläp götermekde 162 kilogram agyrlygy göteren Bunýad Raşidow iki görnüşiň jemi boýunça 302 kilogram netije bilen bäşinji orundan ýer aldy. Ýeri gelende bellesek, 5-nji maýda badalga alan Agyr atletika boýunça Aziýa çempionaty 13-nji maýa çenli dowam eder. Ýaryşda Türkmenistana 16 türgen wekilçilik edýär.",
    textRu:
      "В настоящее время в Чинджу, Республика Корея, проходит чемпионат Азии по тяжелой атлетике. На данный момент туркменские спортсмены завоевали на соревнованиях четыре медали. Точнее, Медине Аманова, участвовавшая в соревнованиях в весовой категории до 64 килограммов, добилась результатов 117 килограммов (малая серебряная медаль), 90 килограммов (малая бронзовая медаль) в становой тяге и 207 килограммов (большая серебряная медаль) в становой тяге. Всего два вида, а за счет сборной Туркменистана удалось добавить еще три медали. Три золотые медали в этой весовой категории (118 кг в толчке, 93 кг в становой тяге, 211 кг в сумме в обоих видах) завоевал монголь Ануин Ганзоргинг. Иранка Фатима Кишеварз завоевала бронзовую медаль в толчке (109 килограммов) и сумме двух видов (194 килограмма). Серебряная медаль в становой тяге досталась Карине Горичевой из Казахстана, выступившей с весом 91 килограмм. Еще один спортсмен из Туркменистана Буньяд Рашидов завоевал малую бронзовую медаль в соревнованиях по тяжелой атлетике среди мужчин до 67 кг с результатом 140 кг. Буньяд Рашидов, поднявший в становой тяге вес 162 килограмма, занял пятое место с общим весом 302 килограмма. Насколько нам известно, чемпионат Азии по тяжелой атлетике, стартовавший 5 мая, продлится до 13 мая. Туркменистан на соревнованиях представляют 16 спортсменов.",
    location: "Aşgabat",
    views: 35.328,
    imagePath: "images/competitions/1.png",
    typeId: 0,
    dateStart: new Date("2023-09-23"),
    endDate: new Date("2023-10-30"),
    competitionType: { id: 0, nameTm: "Bäsleşik", nameRu: "Соревнование" },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const List = () => {
  const prefLang = useSelector((state: RootState) => state.main.prefLang);
  const { competitions } = useSelector(
    (state: RootState) => state.competitions
  );

  return (
    <div className="flex flex-col w-full mt-5 gap-14">
      <p className="uppercase ml-16 font-sofiasans text-3xl text-[#182135] font-semibold">
        {prefLang === "Tm"
          ? "Tapylan sport bäsleşikleriň netijesi:"
          : "Результаты спортивных соревнований найдены:"}{" "}
        {competes.length}
      </p>
      <div className="flex flex-wrap justify-between gap-y-14">
        {competes.map((c, i) => {
          return <Item data={c} l={prefLang} />;
        })}
      </div>
      <div></div>
    </div>
  );
};

export default List;
