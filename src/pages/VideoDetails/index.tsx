import React from "react";
import { useLocation } from "react-router-dom";

const VideoDetails = () => {
  const location = useLocation();
  const {
    date,
    title,
    videoLink = "/videos/ruslanmingazow.mp4",
    created = "2 sagat mundan öň",
  } = location.state;

  return (
    <div className="flex w-full max-w-[1170px] mx-32 pt-7">
      <div className="flex items-center w-full flex-col">
        <p className="font-oswald text-[50px] max-w-[90%] text-center">{title}</p>
        <div className="w-full">
          <div className="flex w-full justify-between text-[#0F1A42]">
            <p className="font-sofiasans text-base">{date}</p>
            <p className="font-sofiasans text-base">{created}</p>
          </div>
          <video src={videoLink} width={"100%"} controls>
            Your browser doesn't support this video!
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
