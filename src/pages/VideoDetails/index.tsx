import React from "react";
import { useLocation } from "react-router-dom";

const VideoDetails = () => {
  const location = useLocation();
  const {
    title,
    videoLink = "/videos/ruslanmingazow.mp4",
    created = "2 sagat mundan öň",
  } = location.state;

  return (
    <div className="flex w-full max-w-[1170px] mx-32 pt-7">
      <div className="flex items-center w-full flex-col text-[#0F1A42]">
        <p className="font-oswald text-[50px] max-w-[90%] text-center">
          {title}
        </p>
        <div className="w-full">
          <div className="flex w-full justify-between">
            <p className="font-sofiasans text-base flex justify-center items-center gap-2">
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
              >
                <path
                  d="M13.2931 8.61587C13.2931 10.437 11.8214 11.9087 10.0003 11.9087C8.17912 11.9087 6.70752 10.437 6.70752 8.61587C6.70752 6.79472 8.17912 5.32312 10.0003 5.32312C11.8214 5.32312 13.2931 6.79472 13.2931 8.61587Z"
                  stroke="#0088FF"
                  stroke-opacity="0.4"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 16.2223C13.2468 16.2223 16.2729 14.3092 18.3792 10.998C19.2069 9.70109 19.2069 7.52122 18.3792 6.22432C16.2729 2.91313 13.2468 1 10 1C6.75319 1 3.72713 2.91313 1.62085 6.22432C0.793051 7.52122 0.793051 9.70109 1.62085 10.998C3.72713 14.3092 6.75319 16.2223 10 16.2223Z"
                  stroke="#0088FF"
                  stroke-opacity="0.4"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {35.328}
            </p>
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
