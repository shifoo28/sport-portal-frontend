import React from "react";
import NewsCards from "../../components/Sections/Local";
import VideoNews from "../../components/Sections/Videos/Videos";
import WorldSportNews from "../../components/Sections/Global";

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
