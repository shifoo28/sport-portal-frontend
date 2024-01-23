import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import React from "react";
import yokaryligaSvg from "./svg/yokaryliga.svg";
import tff from "./svg/tff.svg";

const clubs = [
  {
    id: 0,
    place: 1,
    title: "Manchester United",
    logo: "/images/world_news/mu.png",
  },
  {
    id: 1,
    place: 2,
    title: "Manchester City",
    logo: "/images/world_news/mancity.png",
  },
  {
    id: 2,
    place: 3,
    title: "Liverpool",
    logo: "/images/world_news/liverpool.png",
  },
  {
    id: 3,
    place: 4,
    title: "Chelsea F.C",
    logo: "/images/world_news/chelsea.png",
  },
  {
    id: 4,
    place: 5,
    title: "West Ham United",
    logo: "/images/world_news/westham.png",
  },
  {
    id: 5,
    place: 5,
    title: "Arsenal",
    logo: "/images/world_news/arsenal.png",
  },
  {
    id: 6,
    place: 1,
    title: "Manchester United",
    logo: "/images/world_news/mu.png",
  },
  {
    id: 7,
    place: 2,
    title: "Manchester City",
    logo: "/images/world_news/mancity.png",
  },
  {
    id: 8,
    place: 3,
    title: "Liverpool",
    logo: "/images/world_news/liverpool.png",
  },
];
const chempionship = [
  {
    id: 0,
    title: "Ýokary Liga",
    imgLink: yokaryligaSvg,
    clubs,
  },
  {
    id: 1,
    title: "Naýbaşy futzal liga",
    imgLink: tff,
    clubs,
  },
];

const FootballNewsBody = () => {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <div className="pt-6">
      {chempionship.map((cempionat, index) => {
        return (
          <Accordion
            key={index}
            open={open === cempionat.id}
            className="pb-2"
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className={`${open === cempionat.id ? "rotate-90" : ""}`}
              >
                <g clip-path="url(#clip0_1_770)">
                  <path
                    d="M14.9744 12L10.7386 16.243L9.32703 14.828L12.1512 12L9.32703 9.17198L10.7386 7.75698L14.9744 12Z"
                    fill="#393939"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_770">
                    <rect
                      width="24"
                      height="23.959"
                      fill="white"
                      transform={`translate(0 24) rotate(-90)`}
                    />
                  </clipPath>
                </defs>
              </svg>
            }
            placeholder=""
          >
            <AccordionHeader
              className="border-0 p-0"
              onClick={() => handleOpen(cempionat.id)}
              placeholder=""
            >
              <img src={cempionat.imgLink} alt="" className="w-5 h-5" />
              <p className="font-sofiasans text-sm font-normal flex justify-start w-full ml-3">
                {cempionat.title}
              </p>
            </AccordionHeader>
            <AccordionBody>
              <div
                className={`${
                  open !== cempionat.id ? "hidden" : ""
                } font-sofiasans text-xs`}
              >
                <div className="flex justify-between items-center text-[#636363] ml-2 mr-4">
                  <div>Toparlar</div>
                  <div className="flex">
                    <p className="flex justify-center items-center w-[23px]">
                      Ý
                    </p>
                    <p className="flex justify-center items-center w-[23px]">
                      D
                    </p>
                    <p className="flex justify-center items-center w-[23px]">
                      U
                    </p>
                    <p className="flex justify-center items-center w-[27px]">
                      Utuk
                    </p>
                  </div>
                </div>
                <div className=" overflow-auto max-h-[300px]">
                  <div className={`flex flex-col gap-1 pr-1`}>
                    {cempionat?.clubs?.map((club, index) => {
                      return (
                        <div
                          key={index}
                          className={`flex rounded-md p-1 justify-between ${
                            club.place < 5 ? "bg-[#F2F0F9]" : "bg-[#FEE6EB]"
                          } 
                      `}
                        >
                          <div className="flex">
                            <p className="pr-2">{club.place}</p>
                            <div className="h-5 w-7 flex justify-center items-center">
                              <img
                                src={club.logo}
                                className="w-full h-full object-contain"
                                alt=""
                              />
                            </div>
                            <p className="flex items-center pl-1 w-full">
                              {club.title}
                            </p>
                          </div>
                          <div className="flex justify-between items-center pr-1">
                            <p className="flex justify-center items-center w-[23px]">
                              {Math.floor(Math.random() * 20) + 11}
                            </p>
                            <p className="flex justify-center items-center w-[23px]">
                              {Math.floor(Math.random() * 10)}
                            </p>
                            <p className="flex justify-center items-center w-[23px]">
                              {Math.floor(Math.random() * 10)}
                            </p>
                            <p className="flex justify-center items-center w-[27px]">
                              {Math.floor(Math.random() * 40) + 11}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </AccordionBody>
          </Accordion>
        );
      })}
    </div>
  );
};

export default FootballNewsBody;
