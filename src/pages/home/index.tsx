import React from "react";
import NewsCards from "../../components/Local News";
import VideoNews from "../../components/Video News";
import WorldSportNews from "../../components/World Sport News";
import { useDispatch } from "react-redux";
import { GET_LOCAL_NEWS, GET_VIDEO_NEWS } from "../../redux/types";

const HomePage = () => {
  const dispatch = useDispatch();
  dispatch({ type: GET_LOCAL_NEWS });
  dispatch({ type: GET_VIDEO_NEWS });

  return (
    <div className="w-full flex flex-col justify-center">
      <NewsCards />
      <WorldSportNews />
      <VideoNews />
    </div>
  );
};

export default HomePage;
