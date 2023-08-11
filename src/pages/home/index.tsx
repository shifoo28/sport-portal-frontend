import React from "react";
import NewsCards from "../../components/Local News";
import VideoNews from "../../components/Video News";
import WorldSportNews from "../../components/World Sport News";

const HomePage = () => {
  return (
    <div className="w-full flex flex-col justify-center">
      <NewsCards />
      <WorldSportNews />
      <VideoNews />
    </div>
  );
};

export default HomePage;
