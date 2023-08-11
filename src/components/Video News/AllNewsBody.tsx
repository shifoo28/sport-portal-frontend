import React, { useState, Fragment } from "react";

const allNews = [
  {
    id: 0,
    title: "Gluten-Free Almond Cake with Berries",
    date: "Craig Bator - 27 Dec 2020",
    imgLink: "/images/video_news/all_1.png",
  },
  {
    id: 1,
    title: "Enjoy My Favourite Molten Chocolate Cake",
    date: "Craig Bator - 27 Dec 2020",
    imgLink: "/images/video_news/all_2.png",
  },
  {
    id: 2,
    title: "They back return to you Kennedy Darlings",
    date: "Craig Bator - 27 Dec 2020",
    imgLink: "/images/video_news/all_3.png",
  },
  {
    id: 3,
    title: "The art of racing with speed Motor GP",
    date: "Craig Bator - 27 Dec 2020",
    imgLink: "/images/video_news/all_4.png",
  },
  {
    id: 4,
    title: "Home team takes the win – NBA 2020",
    date: "Craig Bator - 27 Dec 2020",
    imgLink: "/images/video_news/all_5.png",
  },
  {
    id: 5,
    title: "Gluten-Free Almond Cake with Berries",
    date: "Craig Bator - 27 Dec 2020",
    imgLink: "/images/video_news/all_1.png",
  },
  {
    id: 6,
    title: "Enjoy My Favourite Molten Chocolate Cake",
    date: "Craig Bator - 27 Dec 2020",
    imgLink: "/images/video_news/all_2.png",
  },
  {
    id: 7,
    title: "They back return to you Kennedy Darlings",
    date: "Craig Bator - 27 Dec 2020",
    imgLink: "/images/video_news/all_3.png",
  },
];

const AllNewsBody = () => {
  const [activeTab, setActiveTab] = useState(false);

  return (
    <Fragment>
      <div className="flex justify-between h-11 font-oswald w-full cursor-pointer">
        <div
          className={`flex items-center border-b text-sm font-semibold w-full ${
            !activeTab
              ? "border-red-600 text-red-600"
              : "border-black w-full text-black"
          }`}
          onClick={() => setActiveTab(false)}
        >
          Täzeler
        </div>
        <div
          className={`flex items-center justify-end text-sm border-b w-full font-semibold ${
            activeTab
              ? "border-red-600 text-red-600"
              : "border-black w-full text-black"
          }`}
          onClick={() => setActiveTab(true)}
        >
          Köp okalanlar
        </div>
      </div>

      {/* All News Body */}
      <div className="pt-5">
        {allNews.map((e) => {
          return (
            <div key={e.id} className="flex justify-between items-center pb-4">
              <div className="h-[70px] w-[70px] relative">
                <img
                  src={e.imgLink}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col justify-around max-w-[185px] w-full">
                <p className="font-sofiasans text-[8px]">{e.date}</p>
                <p className="font-oswald text-[15px] leading-5 cursor-pointer">{e.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default AllNewsBody;
