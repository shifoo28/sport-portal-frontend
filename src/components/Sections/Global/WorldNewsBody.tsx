import React from "react";

const worldNews = [
  {
    id: 0,
    placeAndDate: "Craig Bator - 27 Dec 2020",
    title: "Penn’s expanding political climate gears up for 2020 election",
    imgLink: "/images/world_news/news_2.png",
  },
  {
    id: 1,
    placeAndDate: "Craig Bator - 27 Dec 2020",
    title: "Things to Look For in a Financial Trading Platform",
    imgLink: "/images/world_news/news_3.png",
  },
  {
    id: 2,
    placeAndDate: "Craig Bator - 27 Dec 2020",
    title: "The only thing that overcomes hard luck is hard work",
    imgLink: "/images/world_news/news_4.png",
  },
  {
    id: 3,
    placeAndDate: "Craig Bator - 27 Dec 2020",
    title: "Success is not a good teacher failure makes you humble",
    imgLink: "/images/world_news/news_5.png",
  },
  {
    id: 4,
    placeAndDate: "Craig Bator - 27 Dec 2020",
    title: "At Value-Focused Hotels, the Free Breakfast Gets Bigger",
    imgLink: "/images/world_news/news_6.png",
  },
];

const WorldNewsBody = () => {
  let category = "Futbol";

  return (
    <div className="flex justify-between pt-5 gap-7">
      <div className="flex flex-col max-w-[400px] w-full">
        <div className="relative">
          <img
            src="/images/world_news/news_1.png"
            className="object-cover h-64 w-full"
          />
          <div className="absolute inset-0 m-0 bg-gradient-to-t from-black/60 to-black/50 " />
          <div className="absolute top-6 left-6 h-5 bg-[#08F] w-max text-white text-[9px] flex items-center">
            <p className="px-3">{category}</p>
          </div>
        </div>
        <div className="flex flex-col pt-6">
          <p className="pb-[6px] font-sofiasans text-[10px]">
            Craig Bator - 27 Dec 2020
          </p>
          <p className="pb-4 font-oswald text-lg tracking-wide font-semibold cursor-pointer">
            Now Is the Time to Think About Your Small Business Success
          </p>
          <p className="font-sofiasans text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
            lobortis augue condimentum maecenas. Metus at in fames vitae posuere
            ut vel vulputate....
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col justify-between">
        {worldNews.map((e) => {
          return (
            <div className="flex cursor-pointer">
              <img
                src={e.imgLink}
                className="h-[70px] w-[90px] object-cover"
              />
              <div className="pl-4">
                <p className="font-sofiasans text-[10px]">{e.placeAndDate}</p>
                <p className="font-oswald text-[16px] max-w-[280px]">{e.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorldNewsBody;
