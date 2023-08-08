import React from "react";
import NewsCards from "./Local News";
import WorldSportNews from "./World Sport News";
import VideoNews from "./Video News";

function App() {
  return (
    <div className="w-full flex flex-col justify-center pb-20">
      <NewsCards />
      <WorldSportNews />
      <VideoNews />
    </div>
  );
}

export default App;
